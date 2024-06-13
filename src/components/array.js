export const bigArray = new Array(20000000).fill(0).map((_, index) => {
  return {
    id: index,
    isSelected: index === 19999999,
  };
});
