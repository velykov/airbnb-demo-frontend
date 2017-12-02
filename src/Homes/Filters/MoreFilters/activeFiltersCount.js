export default (state, minPrice, maxPrice) => {
  return Object.keys(state).reduce((result, key) => {
    const value = state[key];
    const typeOf = typeof value;
    if (typeOf === "boolean") {
      result += value ? 1 : 0;
    } else if (typeOf === "number") {
      if (key === "startPrice") {
        result += value > minPrice ? 1 : 0;
      } else if (key === "endPrice") {
        result += value < maxPrice ? 1 : 0;
      } else result += value > 0 ? 1 : 0;
    } else if (typeOf === "object") {
      Object.keys(value).forEach(x => {
        const objRecord = value[x];
        result += objRecord && objRecord.value ? 1 : 0;
      });
    }
    return result;
  }, 0);
};
