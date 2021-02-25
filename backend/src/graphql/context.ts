export interface Context {
  example: string
}

export function createContext(): Context {
  return { example: "" }
}
