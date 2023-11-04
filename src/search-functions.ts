import { SearchItem } from './types';
import { addIfUnique, matchesRegex, shouldIncludeKey } from './utils';

/**
 * Searches through the properties of an object and adds matches to a filtered list.
 * If a property value is an array, it will recursively search through the array as well.
 *
 * @param {SearchItem<T>} obj - The object to search through.
 * @param {SearchItem<T>[]} filtered - The list to add matched items to.
 * @param {string[]} keys - The keys to search within.
 * @param {boolean} include - Whether to include or exclude the specified keys in the search.
 * @param {RegExp} regex - The regular expression to match against the property values.
 * @template T - The generic type parameter for the items being searched.
 *
 * @example
 * const obj = { name: 'John', age: 30 };
 * const filtered = [];
 * searchInObject(obj, filtered, ['name'], true, /John/);
 * // filtered now contains [{ name: 'John', age: 30 }]
 */
export function searchInObject(
  obj: SearchItem,
  filtered: SearchItem[],
  keys: string[],
  include: boolean,
  regex: RegExp
): void {
  for (const [key, value] of Object.entries(obj)) {
    if (shouldIncludeKey(key, keys, include)) {
      if (typeof value === 'string' && matchesRegex(value, regex)) {
        addIfUnique(filtered, obj);
      } else if (Array.isArray(value)) {
        searchInArray(value, filtered, keys, include, regex);
      }
    }
  }
}

/**
 * Searches through an array of items, adding matches to a filtered list.
 * If an item is an array itself, it will recursively search through that array as well.
 *
 * @param {Array<SearchItem<T>>} arr - The array to search through.
 * @param {SearchItem<T>[]} filtered - The list to add matched items to.
 * @param {string[]} keys - The keys to search within if the items are objects.
 * @param {boolean} include - Whether to include or exclude the specified keys in the search.
 * @param {RegExp} regex - The regular expression to match against the item values.
 * @template T - The generic type parameter for the items being searched.
 *
 * @example
 * const items = [{ name: 'John' }, { name: 'Jane' }];
 * const filtered = [];
 * searchInArray(items, filtered, ['name'], true, /Jane/);
 * // filtered now contains [{ name: 'Jane' }]
 */
export function searchInArray(
  arr: SearchItem[],
  filtered: SearchItem[],
  keys: string[],
  include: boolean,
  regex: RegExp
): void {
  for (const item of arr) {
    if (typeof item === 'string' && matchesRegex(item, regex)) {
      addIfUnique(filtered, item);
    } else if (Array.isArray(item)) {
      searchInArray(item, filtered, keys, include, regex);
    } else if (typeof item === 'object' && item !== null) {
      searchInObject(item, filtered, keys, include, regex);
    }
  }
}
