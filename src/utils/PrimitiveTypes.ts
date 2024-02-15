export type PrimitiveTypes = string | number;

export function isPrimitiveType(value: unknown): value is PrimitiveTypes {
  return typeof value === 'string' || typeof value === 'number';
}
