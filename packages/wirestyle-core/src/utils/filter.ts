import { IPaginateData } from './pagination';

export interface IFilters {
  [key: string]: {
    name: string;
    value: string;
  };
}

export function filterUnique(
  a: IPaginateData[],
  param: string
): IPaginateData[] {
  const test = a
    .filter(function (item, pos, array) {
      return (
        array
          .map(function (mapItem) {
            return mapItem[param] ? mapItem[param].value : false;
          })
          .indexOf(item[param] ? item[param].value : false) === pos
      );
    })
    .sort((a, b) => {
      if (
        Object.prototype.hasOwnProperty.call(a, param) &&
        Object.prototype.hasOwnProperty.call(a, param) &&
        a[param].value > b[param].value
      ) {
        return 1;
      }

      return -1;
    });

  return test;
}

export function filterData(
  a: IPaginateData[],
  filters: IFilters
): IPaginateData[] {
  let filtered: IPaginateData[] = a;

  Object.keys(filters).forEach((key: string) => {
    filtered = filtered.filter((x) =>
      filters[key].value.toLowerCase() !== filters[key].name.toLowerCase()
        ? x[key].value.toString().toLowerCase() ===
          filters[key].value.toLowerCase()
        : true
    );
  });

  return filtered;
}

export function filterSearch(
  a: IPaginateData[],
  search: string
): IPaginateData[] {
  let filtered: IPaginateData[] = [];

  if (search.length < 2) {
    return a;
  }

  filtered = a.filter((item) => {
    let result = false;

    for (const key in item) {
      if (item[key].value) {
        const s = item[key].value.toString().toLowerCase();
        const compare = search.toLowerCase();

        if (!result) {
          result = s.indexOf(compare) > -1;
        }
      }
    }

    return result;
  });

  return filtered;
}
