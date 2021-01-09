import { TEnum } from "../types/_";

export const gaussianSum = <T extends TEnum<T>>(E: T): number => {
  let length = Object.keys(E).filter(Number.isNaN).length;

  return length * (length + 1) / 2 + 1;
}

export const inferGaussianMember = <T extends TEnum<T>>(
  EState: T,
  sum: number,
  state: number,
): boolean => {
  let values = Object.values(EState).filter(Number.isNaN);

  while (sum > 0) {
    let greatest = Number(values.pop());

    if ((sum - greatest) > 0) {
      if (greatest === state) {
        return true;
      }
      sum -= greatest;
    } else if (greatest === state) {
      return false;
    }
  }

  throw new Error('Unreachable Code reached');
}
