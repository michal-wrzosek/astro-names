export const filterHashKeysByArrayOfKeys = (hash, array) => Object.keys(hash).reduce((filteredHash, key) => {
  if (array.includes(key)) {
    filteredHash[key] = hash[key];
  }
  return filteredHash;
}, {});
