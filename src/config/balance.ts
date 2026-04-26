export const BALANCE = {
  clickPower: 1,
  generatorCostGrowth: 1.15,
  tickRateMs: 250,
  generators: [
    { id: 'plant', name: 'Plant', baseCost: 15, baseProduction: 0.2 },
    { id: 'farm', name: 'Farm', baseCost: 100, baseProduction: 1.2 },
    { id: 'lab', name: 'Lab', baseCost: 1100, baseProduction: 8 }
  ]
} as const;

export type GeneratorId = (typeof BALANCE.generators)[number]['id'];
