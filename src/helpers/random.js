export const random = () => Math.random();
export const normalizeFloat = (float, fixed = 6) => parseFloat(parseFloat(float).toFixed(fixed));


export const randomNumberFromRangePureFunc = (a, b, { random }) => a + Math.round(random() * (b - a));
export const randomNumberFromRange = (a, b) => randomNumberFromRangePureFunc(a, b, { random });


export const randomFloatFromRangePureFunc = (a, b, { random }) => a + normalizeFloat(random() * (b - a));
export const randomFloatFromRange = (a, b) => randomFloatFromRangePureFunc(a, b, { random });


export const randomElementFromHashWithWeightsPureFunc = (hash, { randomFloatFromRange }) => {
  // weights should be a float between 0 and 1
  const weightsSum = Object.keys(hash).reduce((sum, letter) => sum + hash[letter], 0);
  const randomValue = randomFloatFromRange(0, weightsSum);
  let currentValue = 0;
  
  return Object.keys(hash).sort().find((letter) => {
    currentValue += hash[letter];
    return randomValue <= currentValue;
  });
};
export const randomElementFromHashWithWeights = (hash) => {
  return randomElementFromHashWithWeightsPureFunc(hash, { randomFloatFromRange });
};
