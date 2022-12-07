export interface IPaginateObject {
  render: string | number | JSX.Element;
  value: string | number;
}

export interface IPaginateData {
  id: IPaginateObject;
  [key: string]: IPaginateObject;
}

export interface IPaginate {
  previousPage: number | null;
  nextPage: number | null;
  total: number;
  totalPages: number;
  items: IPaginateData[];
}

export interface IFeaturedItem {
  key: string;
  value: string | number;
}

export type SORT_TYPE = 'ASC' | 'DESC';

function dynamicSort(key: string, order: SORT_TYPE = 'ASC') {
  return function innerSort(a: IPaginateData, b: IPaginateData) {
    if (
      !Object.prototype.hasOwnProperty.call(a, key) ||
      !Object.prototype.hasOwnProperty.call(b, key)
    ) {
      return 0;
    }

    const varA = typeof a[key].value === 'string' ? a[key].value : a[key].value;
    const varB = typeof b[key].value === 'string' ? b[key].value : b[key].value;

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'DESC' ? comparison * -1 : comparison;
  };
}

export function paginate(
  items: IPaginateData[],
  page: number,
  perPage: number,
  sortBy: string,
  sortType: SORT_TYPE,
  featuredItem?: IFeaturedItem
): IPaginate {
  let data = sortBy
    ? items.sort(dynamicSort(sortBy.toLowerCase(), sortType))
    : items;

  if (featuredItem) {
    data = data.reduce((arr: IPaginateData[], element: IPaginateData) => {
      if (Object.prototype.hasOwnProperty.call(element, featuredItem.key)) {
        if (
          element[featuredItem.key].value.toString().toLowerCase() ===
          featuredItem.value.toString().toLowerCase()
        ) {
          return [element, ...arr];
        }
      }
      return [...arr, element];
    }, []);
  }

  const offset = perPage * (page - 1);
  const totalPages = Math.ceil(items.length / perPage);
  const paginatedItems = data.slice(offset, perPage * page);

  return {
    previousPage: page - 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    total: items.length,
    totalPages: totalPages,
    items: paginatedItems,
  };
}

export const SIBLING_COUNT = 1;
export const DOTS = '...';

function range(start: number, end: number): number[] {
  const length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
}

export function getRangeList(page: number, paginatedList: IPaginate): any {
  const totalPageNumbers = SIBLING_COUNT + 5;
  const currentPage = page + 1;

  if (totalPageNumbers >= paginatedList.totalPages) {
    return range(1, paginatedList.totalPages);
  }

  const leftSiblingIndex = Math.max(currentPage - SIBLING_COUNT, 1);
  const rightSiblingIndex = Math.min(
    currentPage + SIBLING_COUNT,
    paginatedList.totalPages
  );

  const shouldShowLeftDots = leftSiblingIndex > 1;
  const shouldShowRightDots = rightSiblingIndex < paginatedList.totalPages - 1;

  const firstPageIndex = 1;
  const lastPageIndex = paginatedList.totalPages;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 * SIBLING_COUNT;
    const leftRange = range(1, leftItemCount);

    return [...leftRange, DOTS, paginatedList.totalPages];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 * SIBLING_COUNT;
    const rightRange = range(
      paginatedList.totalPages - rightItemCount + 1,
      paginatedList.totalPages
    );
    return [firstPageIndex, DOTS, ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex);

    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }
}
