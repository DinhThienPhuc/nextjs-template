import {
  IObject,
  TFunction,
  TFunctionIterator,
  TTryCatchResult,
} from "_libs/utils/definations/types";

export const tryDo = async <T>(
  promise: Promise<T>,
): Promise<TTryCatchResult<T>> => {
  try {
    const result = await promise;
    return {
      error: null,
      result: result as T,
    };
  } catch (error) {
    return {
      error,
      result: null,
    };
  }
};

export const chunk = <T>(arr: T[], chunkSize = 1): T[][] => {
  const tmp = [...arr];
  if (chunkSize <= 0) {
    return [];
  }
  const cache = [];
  while (tmp.length) {
    cache.push(tmp.splice(0, chunkSize));
  }
  return cache;
};

export const compact = <T>(arr: T[]): T[] => {
  return arr.filter((x: T) => !!x);
};

export const difference = <T>(arr1: T[], arr2: T[]): T[] => {
  return arr1.filter((x: T) => !arr2.includes(x));
};

export const differenceBy = <T>(
  arr1: T[],
  arr2: T[],
  iteratee: TFunctionIterator,
): T[] => {
  if (typeof iteratee === "string") {
    const prop = iteratee;
    iteratee = <T>(item: T, _index?: number, _array?: T[]) => item?.[prop];
  }
  return arr1.filter((c) => !arr2.map(iteratee).includes(iteratee(c)));
};

export const drop = <T>(arr: T[], n = 1): T[] => {
  return arr.slice(n);
};

export const dropRight = <T>(arr: T[], n = 1): T[] => {
  return arr.slice(0, -n || arr.length);
};

export const findLastIndex = <T>(
  arr: T[],
  func: TFunction<boolean>,
): number => {
  const reverseIdx = [...arr].reverse().findIndex(func);
  return reverseIdx === -1 ? reverseIdx : arr.length - (reverseIdx + 1);
};

export const flattenDeep = (arr: unknown[]) => {
  return arr.flat(Infinity);
};

export const fromPairs = <T>(arr: T[][]): IObject<T> => {
  return Object.fromEntries(arr);
};

export const parseJSON = <T>(jsonString: string | null): T | null => {
  try {
    return jsonString === "undefined" ? null : JSON.parse(jsonString ?? "");
  } catch (error) {
    return null;
  }
};

export const doNothing = () => {
  return undefined;
};
