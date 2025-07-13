export function cleanQuery(obj: object): object {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value !== undefined)
  );
}