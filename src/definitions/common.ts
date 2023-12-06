export type ActionFunction<T> = (prev: T) => T;

export type Store<T> = {
  getState: () => T;
  setState: (action: T | ActionFunction<T>) => void;
  subscribe: (callback: VoidFunction) => VoidFunction;
};