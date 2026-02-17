export function calculatePercentageDifference(
  data: number[],
  activeIndex: number | null,
) {
  const PERCENTAGE_BASE: number = 100;

  const index = activeIndex ?? data.length - 1;
  const current = data[index];
  const prev = data[index - 1] ?? current;
  const diff = prev ? ((current - prev) / prev) * PERCENTAGE_BASE : 0;
  return {
    current,
    diff,
    index,
  };
}
