import { SearchItem, SearchOptions } from './types';
import { recursiveSearch } from './search-functions';

/**
 * Searches for items within a collection that match the given search text.
 *
 * @param {Partial<SearchOptions>} options - The search parameters including searchText, searchItems, keys to search in,
 *                                           whether to include keys and if the search is exact.
 * @template T - The type of the items to search through, extending SearchItem.
 * @returns {T[]} The matched items as an array.
 *
 * @example
 * // Define a list of objects to search
 * const people = [
 *   { name: "John", lastName: "Doe" },
 *   { name: "Jane", lastName: "Smith" },
 * ];
 *
 * // Options for searching
 * const options = {
 *   searchText: "doe",
 *   searchItems: people,
 *   keys: ['lastName'],
 *   include: true,
 *   exact: false
 * };
 *
 * // Perform the search
 * const found = search(options);
 *
 * // found will contain the object with lastName 'Doe'
 * console.log(found); // [{ name: "John", lastName: "Doe" }]
 */
function search<T extends SearchItem = SearchItem>({
  searchText = '',
  searchItems = [],
  keys = [],
  include = true,
  exact = false
}: Partial<SearchOptions<T>>): T[] {
  const regex = new RegExp(exact ? `^${searchText}$` : searchText, 'i');
  const results: T[] = [];

  const preparedItems: T[] = Array.isArray(searchItems)
    ? searchItems
    : [searchItems];
  const preparedKeys: string[] =
    keys.length > 0 ? keys : Object.keys(preparedItems[0] || {});

  recursiveSearch(preparedItems, preparedKeys, include, regex, results);

  return results;
}

export default search;
