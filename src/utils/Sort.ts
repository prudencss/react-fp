import { TSortable } from "../types/Sort";

export const sortBy = (propAccessor: string | null, builtinType: Date | Number | String) => {
  let accessor: (p: any) => any;
  const traveller = (prop: any) => {
    if (!propAccessor) {
      return prop;
    }

    let deepProp = prop;
    let breadCrumbs = propAccessor.split('.');

    for (let p of breadCrumbs) {
      deepProp = deepProp[p];
    }

    return deepProp;
  }

  switch (builtinType) {
    case typeof Date:
      accessor = (p: any) => {
        p = traveller(p);

        return p instanceof Date ? p.getTime() : new Date(p).getTime();
      }
      break;
    default:
      accessor = (p: any) => traveller(p);
  }

  return {
    ascending(a: TSortable, b: TSortable) {
      return builtinType === typeof String ?
        accessor(a).localeCompare(accessor(b)) :
        accessor(a) - accessor(b);
    },
    descending(a: TSortable, b: TSortable) {
      return builtinType === typeof String ?
        accessor(b).localeCompare(accessor(a)) :
        accessor(b) - accessor(a);
    }
  }
};
