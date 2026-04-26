import { BALANCE, GeneratorId } from '../config/balance';
import { getGeneratorCost, getGeneratorProduction } from './economy';

type GeneratorState = Record<GeneratorId, number>;

export type GameState = {
  kush: number;
  totalTapCount: number;
  generators: GeneratorState;
};

const baseGenerators = BALANCE.generators.reduce((acc, generator) => {
  acc[generator.id] = 0;
  return acc;
}, {} as GeneratorState);

export const initialGameState: GameState = {
  kush: 0,
  totalTapCount: 0,
  generators: baseGenerators
};

export const getPassiveIncomePerSecond = (state: GameState) => {
  return BALANCE.generators.reduce((sum, generator) => {
    return sum + getGeneratorProduction(generator.baseProduction, state.generators[generator.id]);
  }, 0);
};

export const canAffordGenerator = (state: GameState, generatorId: GeneratorId) => {
  const generator = BALANCE.generators.find((g) => g.id === generatorId);
  if (!generator) return false;

  const currentLevel = state.generators[generatorId];
  const nextCost = getGeneratorCost(generator.baseCost, currentLevel, BALANCE.generatorCostGrowth);
  return state.kush >= nextCost;
};
