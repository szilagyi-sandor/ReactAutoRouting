export interface NestableObject<T> {
  children?: Record<string, T>;
}
