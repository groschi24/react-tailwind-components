import React, { useEffect } from 'react';
import { BiSearch, BiTrash } from 'react-icons/bi';
import { Badge, Button, ButtonGroup, Dropdown, Level } from '..';
import {
  filterData,
  filterSearch,
  filterUnique,
  IFilters,
} from '../../utils/filter';
import {
  DOTS,
  getRangeList,
  IFeaturedItem,
  IPaginateData,
  paginate,
  SORT_TYPE,
} from '../../utils/pagination';
import { capitalizeFirstLetter } from '../../utils/text';
import { TextField } from '@wirecore/wirestyle-form';

interface ITable {
  header: string[];
  data: IPaginateData[];
}

interface ITableAction {
  callback?: (id: string) => void;
  callbackObj?: (item: any) => void;
  icon?: React.ReactNode;
  text?: React.ReactNode;
  disabled?: (id: string) => boolean;
  type: 'white' | 'light' | 'success' | 'danger' | 'warning' | 'info';
}

interface IProps {
  data: ITable;
  checkable?: boolean;
  filtersWhitelist?: string[];
  hideFilters?: boolean;
  handleDelete?: (id: string) => void;
  reachedEnd?: () => void;
  actions?: ITableAction[];
  actionsTitle?: string;
  featuredItem?: IFeaturedItem | undefined;
  defaultSortType?: SORT_TYPE;
  compact?: boolean;
}

function Table(props: IProps): JSX.Element {
  const [selectedPageSize, setSelectedPageSize] = React.useState<string>('10');
  const [page, setPage] = React.useState<number>(0);
  const [sortId, setSortId] = React.useState<string>('');
  const [sortType, setSortType] = React.useState<SORT_TYPE>('ASC');
  const [filters, setFilters] = React.useState<IFilters>({});
  const [search, setSearch] = React.useState<string>('');

  const initFilters = (check = true) => {
    let filterNames = props.data.header;

    if (props.filtersWhitelist) {
      filterNames = filterNames.filter(
        (filter) =>
          props.filtersWhitelist &&
          props.filtersWhitelist
            .map((n) => n.toLowerCase())
            .indexOf(filter.toLowerCase()) !== -1
      );
    }

    if ((Object.keys(filters).length < 1 || !check) && filterNames.length > 0) {
      const entry: IFilters = {};

      for (let i = 0; i < filterNames.length; i++) {
        entry[filterNames[i].toLowerCase()] = {
          name: filterNames[i],
          value: filterNames[i].toLowerCase(),
        };
      }

      setFilters(entry);
    }
  };

  useEffect(() => {
    initFilters();

    if (props.defaultSortType) {
      setSortType(props.defaultSortType);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (sortId === '') {
      setSortId(props.data.header[0]);
    }
  }, [setSortId, sortId, props]);

  const handleSort = (header: string) => {
    if (sortId === header) {
      setSortType(sortType === 'ASC' ? 'DESC' : 'ASC');
    } else {
      setSortType('ASC');
      setSortId(header);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilter = (key: string, value: string) => {
    setFilters({ ...filters, [key]: { name: key, value: value } });
  };

  let filteredData = filterData(props.data.data, filters);
  filteredData = filterSearch(filteredData, search);

  const paginatedList = paginate(
    filteredData,
    page + 1,
    parseInt(selectedPageSize),
    sortId,
    sortType,
    props.featuredItem
  );

  useEffect(() => {
    if (paginatedList.items.length === 0) {
      setPage(0);
    }
  }, [paginatedList]);

  useEffect(() => {
    if (page >= paginatedList.totalPages - 2) {
      props.reachedEnd && props.reachedEnd();
    }

    if (parseInt(selectedPageSize) >= paginatedList.total) {
      props.reachedEnd && props.reachedEnd();
    }
  }, [page, selectedPageSize]);

  const rangeList: (string | number)[] | undefined = getRangeList(
    page,
    paginatedList
  );

  return (
    <div className='bg-white dark:bg-gray-900 lg:bg-transparent lg:overflow-x-scroll overflow-hidden'>
      {!props.hideFilters && !props.compact && (
        <div className='bg-white p-3 dark:bg-gray-900'>
          <Level>
            <TextField
              placeholder='Search...'
              icon={<BiSearch className='w-6 h-6' />}
              value={search}
              onChange={(e) => handleSearch(e)}
              className='w-full'
            />

            <div className='block lg:inline-flex w-full gap-2 justify-between items-center'>
              {Object.keys(filters).length > 0 ? (
                <React.Fragment>
                  <small className='mt-1.5'>Filters: </small>
                  {Object.keys(filters).map((filter: string, i: number) => {
                    return (
                      <Dropdown
                        key={i}
                        data={[
                          { title: capitalizeFirstLetter(filter) },
                          ...filterUnique(props.data.data, filter).map(
                            (item) => {
                              return {
                                title: item[filter]
                                  ? item[filter].value.toString()
                                  : '',
                              };
                            }
                          ),
                        ]}
                        selectedValue={{
                          title: capitalizeFirstLetter(filters[filter].value),
                        }}
                        onChange={(value: any) =>
                          handleFilter(filter, value.title)
                        }
                      />
                    );
                  })}
                </React.Fragment>
              ) : (
                false
              )}
            </div>
          </Level>
        </div>
      )}

      {search.length > 1 ||
      Object.values(filters).find(
        (a) => a.value.toLowerCase() !== a.name.toLowerCase()
      ) ? (
        <div className='bg-white p-3 dark:bg-gray-900'>
          <Level>
            <div className='mt-3 block lg:inline-flex w-full justify-center items-center gap-2'>
              <small className='block mt-px'>Active Filters:</small>
              {search !== '' && (
                <Badge type='info' small>
                  Search: {search}
                </Badge>
              )}
              {Object.keys(filters).map((key: string, i: number) => {
                if (filters[key].value.toLowerCase() !== key.toLowerCase()) {
                  return (
                    <Badge key={i} type='info' small>
                      {capitalizeFirstLetter(filters[key].name)}:{' '}
                      {filters[key].value}
                    </Badge>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <Button
              color='danger'
              icon={<BiTrash size={18} />}
              compact
              onClick={() => {
                setSearch('');
                initFilters(false);
              }}
            >
              Clear
            </Button>
          </Level>
        </div>
      ) : (
        false
      )}

      <div className='bg-white p-3 dark:bg-gray-900 lg:hidden'>
        <small className='mt-1.5'>Sorting: </small>
        <div className='w-full block'>
          <Dropdown
            data={props.data.header.map((title: string) => {
              return { title: title };
            })}
            selectedValue={{ title: sortId }}
            onChange={(value: any) => setSortId(value.title)}
          />
          <Dropdown
            data={[{ title: 'ASC' }, { title: 'DESC' }]}
            selectedValue={{ title: sortType }}
            onChange={(value: any) => setSortType(value.title as SORT_TYPE)}
          />
        </div>
      </div>

      <div className='bg-white p-3 dark:bg-gray-900'>
        <Level>
          <small className='mt-1.5'>
            Showing {filteredData.length > 1 ? page * 10 + 1 : 0} -{' '}
            {filteredData.length > (page + 1) * 10
              ? (page + 1) * 10
              : filteredData.length}{' '}
            of {filteredData.length} results
          </small>

          <div className='flex justify-center items-center gap-3'>
            <small className='mt-1.5'>Results per page:</small>
            <Dropdown
              data={[
                { title: '10' },
                { title: '25' },
                { title: '50' },
                { title: '100' },
              ]}
              selectedValue={{ title: selectedPageSize }}
              onChange={(value: any) => setSelectedPageSize(value.title)}
            />
          </div>
        </Level>
      </div>

      <table>
        <thead>
          <tr>
            {props.data.header.map((header: string, i: number) => (
              <th
                key={i}
                className='border-b border-t border-solid border-gray-200 dark:border-gray-700'
              >
                <span
                  className={`inline-flex justify-center items-center gap-1 cursor-pointer select-none`}
                  onClick={() => handleSort(header)}
                >
                  {header}
                  {sortType === 'ASC' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className={`h-4 w-4 ${
                        sortId === header ? '' : 'opacity-0'
                      }`}
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={3}
                        d='M5 15l7-7 7 7'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className={`h-4 w-4 ${
                        sortId === header ? '' : 'opacity-0'
                      }`}
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={3}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  )}
                </span>
              </th>
            ))}
            <th className='border-b border-t border-solid border-gray-200 dark:border-gray-700'>
              {props.actionsTitle}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedList.items.map((item: IPaginateData, index: number) => {
            return (
              <tr key={`${item.id}-${index}`}>
                {props.data.header.map((key: string, i: number) => {
                  if (item[key.toLowerCase()]) {
                    return (
                      <td key={`${key}-${i}`} data-label={key}>
                        {item[key.toLowerCase()].render}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        key={`${key}-${i}`}
                        data-label={props.data.header[i]}
                      ></td>
                    );
                  }
                })}

                <td className='action-cell' data-label={props.actionsTitle}>
                  <ButtonGroup type='justify-start lg:justify-end' noWrap>
                    {props.handleDelete ? (
                      <Button
                        color='danger'
                        icon={<BiTrash size={18} />}
                        size='xs'
                        onClick={() =>
                          props.handleDelete
                            ? props.handleDelete(item.id.value.toString())
                            : false
                        }
                      />
                    ) : (
                      <></>
                    )}

                    {props.actions &&
                      props.actions.map((action: ITableAction, i: number) => (
                        <Button
                          key={i}
                          color={action.type}
                          icon={action.icon}
                          onClick={() =>
                            (action.disabled
                              ? !action.disabled(item.id.value.toString())
                              : true) && action.callbackObj
                              ? action.callbackObj(item)
                              : action.callback
                              ? action.callback(item.id.value.toString())
                              : null
                          }
                          size='xs'
                          disabled={
                            action.disabled &&
                            action.disabled(item.id.value.toString())
                          }
                        >
                          {action.text}
                        </Button>
                      ))}
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {paginatedList.totalPages > 1 && (
        <div className='table-pagination'>
          <Level>
            <ButtonGroup>
              <Button
                color='light'
                size='xs'
                outline
                onClick={() =>
                  paginatedList.previousPage ? setPage(page - 1) : null
                }
                disabled={paginatedList.previousPage ? false : true}
              >
                {'<'}
              </Button>

              {rangeList &&
                rangeList.map((pageNumber: number | string, i: number) => {
                  if (pageNumber === DOTS) {
                    return (
                      <Button
                        color='light'
                        key={`${pageNumber}-${i}`}
                        size='xs'
                        outline
                        className='opacity-50 pointer-events-none'
                      >
                        ...
                      </Button>
                    );
                  }

                  return (
                    <Button
                      color='light'
                      key={`${pageNumber}-${i}`}
                      outline={
                        page !==
                        (typeof pageNumber === 'number'
                          ? pageNumber - 1
                          : parseInt(pageNumber))
                      }
                      size='xs'
                      onClick={() =>
                        setPage(
                          typeof pageNumber === 'number'
                            ? pageNumber - 1
                            : parseInt(pageNumber)
                        )
                      }
                    >
                      {pageNumber}
                    </Button>
                  );
                })}

              <Button
                color='light'
                size='xs'
                outline
                onClick={() =>
                  paginatedList.nextPage ? setPage(page + 1) : null
                }
                disabled={paginatedList.nextPage ? false : true}
              >
                {'>'}
              </Button>
            </ButtonGroup>
            <small>
              Page {page + 1} of {paginatedList.totalPages}
            </small>
          </Level>
        </div>
      )}
    </div>
  );
}

export default Table;
