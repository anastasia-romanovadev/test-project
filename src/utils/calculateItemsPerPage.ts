export const calculateItemsPerPage = (
  containerWidth: number,
  cardWidth: number,
  gap: number
): number => {
  const columns = Math.floor(containerWidth / (cardWidth + gap));
  return Math.max(columns, 1);
};
