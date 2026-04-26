export const getGeneratorCost = (baseCost: number, level: number, growth = 1.15) => {
  return Math.floor(baseCost * Math.pow(growth, level));
};

export const getGeneratorProduction = (baseProduction: number, level: number, multiplier = 1) => {
  return baseProduction * level * multiplier;
};
