import { ESortable } from "../enums/Sort";
import { TSortable, TSortableData } from "../types/Sort";

export const sortBy = (builtinType: TSortable, propAccessor?: string) => {
  let accessor: (p: any) => any;
  const traveller = (prop: any) => {
    let deepProp = prop;

    if (typeof propAccessor === 'undefined') {
      return prop;
    }
    else {
      let breadCrumbs = propAccessor!.split('.') ?? null;

      for (let p of breadCrumbs) {
        deepProp = deepProp[p];
      }
    }

    return deepProp;
  }

  switch (builtinType) {
    case ESortable.Date:
      accessor = (p: any) => {
        p = traveller(p);

        return p instanceof Date ? p.getTime() : new Date(p).getTime();
      }
      break;
    default:
      accessor = (p: any) => traveller(p);
  }

  return {
    ascending(a: TSortableData, b: TSortableData) {
      return builtinType === ESortable.String ?
        accessor(a).localeCompare(accessor(b)) :
        accessor(a) - accessor(b);
    },
    descending(a: TSortableData, b: TSortableData) {
      return builtinType === ESortable.String ?
        accessor(b).localeCompare(accessor(a)) :
        accessor(b) - accessor(a);
    }
  }
};
