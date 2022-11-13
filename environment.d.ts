declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ACCESS_TOKEN: string;
    }
  }
}

export {};
