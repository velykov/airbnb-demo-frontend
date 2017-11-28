export default props => {
  const min = props.minPrice;
  const max = props.maxPrice;
  if (props.startPrice > min || props.endPrice < max)
    return `$${props.startPrice} - $${props.endPrice}`;
  if (props.startPrice > min) return `$${props.startPrice}+`;
  if (props.endPrice < max) return `Up to $${props.endPrice}`;
  return `$${props.startPrice} — $${props.endPrice}+`;
};
