export default function objectArrayToString<T>(
  array: T[],
  propertyName : string,
): string {
  let stringBuilded = '';

  array.forEach((value, index) => {
    stringBuilded += value[propertyName as keyof T];
    if (index !== array.length - 1) {
      stringBuilded += ', ';
    }
  });

  return stringBuilded;
}
