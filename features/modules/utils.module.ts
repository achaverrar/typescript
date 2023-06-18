export const PI = 3.14;

export interface User {
  id: string;
  name: string;
}

export function generateId(): string {
  return Math.floor(Math.random() * 100).toString();
}
