import { SearchItem } from './types';
import { searchInArray, searchInObject } from './search-functions';
import { matchesRegex, addIfUnique } from './utils';

/**
 * The SearchOptions interface represents the structure for search configuration.
 */
interface SearchOptions {
  searchText: string;
  searchItems: SearchItem[];
  keys: string[];
  include: boolean;
  exact: boolean;
}

/**
 * Performs a search on an array of items or nested arrays/objects and returns the matched items.
 *
 * @param {Partial<SearchOptions<T>>} options - An object containing search parameters.
 * @param {string} options.searchText - The text to search for.
 * @param {Array<SearchItem<T>>} options.searchItems - The items to search through.
 * @param {string[]} options.keys - Specific keys to include or exclude in the search.
 * @param {boolean} options.include - Flag to determine if the keys should be included or excluded.
 * @param {boolean} options.exact - Flag to determine if the search should be for an exact match.
 * @returns {Array<SearchItem<T>>} A filtered array of items that match the search criteria.
 * @template T - The generic type parameter for the items being searched.
 *
 * @example
 * // Assuming a predefined SearchItem type
 * const items = [{ name: 'John Doe' }, { name: 'Jane Doe' }];
 * const results = search({
 *   searchText: 'Jane',
 *   searchItems: items,
 *   keys: ['name'],
 *   include: true,
 *   exact: false
 * });
 * // results will be [{ name: 'Jane Doe' }]
 */

function search({
  searchText = '',
  searchItems = [],
  keys = [],
  include = true,
  exact = false
}: Partial<SearchOptions>): SearchItem[] {
  const regex = exact
    ? new RegExp(`^${searchText}$`, 'i')
    : new RegExp(searchText, 'i');
  const filtered: SearchItem[] = [];

  searchItems.forEach((item) => {
    if (typeof item === 'string') {
      if (matchesRegex(item, regex)) {
        addIfUnique(filtered, item);
      }
    } else if (Array.isArray(item)) {
      searchInArray(item, filtered, keys, include, regex);
    } else if (typeof item === 'object' && item !== null) {
      searchInObject(item, filtered, keys, include, regex);
    }
  });

  return filtered;
}

export default search;
