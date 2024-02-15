export default function objectArrayToString<T>(
  array: T[],
  propertyName : string,
): string {
  return array.map((obj) => obj[propertyName as keyof T]).join(', ');
}
