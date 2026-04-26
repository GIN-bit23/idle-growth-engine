import { useEffect, useMemo, useState } from 'react';
import { BALANCE, GeneratorId } from '../config/balance';
import { getGeneratorCost } from '../core/economy';
import {
  canAffordGenerator,
  getPassiveIncomePerSecond,
  initialGameState,
  type GameState
} from '../core/gameState';

export const useIdleGame = () => {
  const [state, setState] = useState<GameState>(initialGameState);

  const incomePerSecond = useMemo(() => getPassiveIncomePerSecond(state), [state]);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((previous) => ({
        ...previous,
        kush: previous.kush + incomePerSecond * (BALANCE.tickRateMs / 1000)
      }));
    }, BALANCE.tickRateMs);

    return () => clearInterval(interval);
  }, [incomePerSecond]);

  const tap = () => {
    setState((previous) => ({
      ...previous,
      kush: previous.kush + BALANCE.clickPower,
      totalTapCount: previous.totalTapCount + 1
    }));
  };

  const buyGenerator = (generatorId: GeneratorId) => {
    setState((previous) => {
      if (!canAffordGenerator(previous, generatorId)) {
        return previous;
      }

      const definition = BALANCE.generators.find((generator) => generator.id === generatorId);
      if (!definition) {
        return previous;
      }

      const currentLevel = previous.generators[generatorId];
      const cost = getGeneratorCost(definition.baseCost, currentLevel, BALANCE.generatorCostGrowth);

      return {
        ...previous,
        kush: previous.kush - cost,
        generators: {
          ...previous.generators,
          [generatorId]: currentLevel + 1
        }
      };
    });
  };

  return {
    state,
    incomePerSecond,
    tap,
    buyGenerator
  };
};
