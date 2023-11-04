import { SearchItem } from './types';
import { addUniqueMatch, isKeyIncluded } from './utils';

/**
 * Searches for matches within an object based on a regex pattern.
 * If a match is found within the specified keys, it adds the object to the results.
 *
 * @param {SearchItem} object - The object to search within.
 * @param {string[]} keys - The keys to include or exclude in the search.
 * @param {boolean} include - Whether to include or exclude the specified keys in the search.
 * @param {RegExp} regex - The regex pattern to match against the object values.
 * @param {SearchItem[]} results - The array to store matching objects.
 *
 * @example
 * // Define an object to search
 * const person = { name: "John", lastName: "Doe" };
 * const results = [];
 *
 * // Search within the object for the name 'John'
 * searchWithinObject(person, ['name'], true, /John/i, results);
 *
 * // results will contain the person object
 * console.log(results); // [{ name: "John", lastName: "Doe" }]
 */
export function searchWithinObject(
  object: SearchItem,
  keys: string[],
  include: boolean,
  regex: RegExp,
  results: SearchItem[]
): void {
  for (const key of Object.keys(object)) {
    if (isKeyIncluded(key, keys, include) && regex.test(String(object[key]))) {
      addUniqueMatch(results, object);
      break;
    }
  }
}

/**
 * Recursively searches through items for matches based on a regex pattern.
 * It handles both arrays and individual objects.
 *
 * @param {SearchItem | SearchItem[]} items - The items to search through. Can be a single item or an array of items.
 * @param {string[]} keys - The keys to include or exclude in the search.
 * @param {boolean} include - Whether to include or exclude the specified keys in the search.
 * @param {RegExp} regex - The regex pattern to match against item values.
 * @param {SearchItem[]} results - The array to store matching items.
 *
 * @example
 * // Define a list of objects to search
 * const people = [
 *   { name: "John", lastName: "Doe" },
 *   { name: "Jane", lastName: "Doe" },
 * ];
 * const searchResults = [];
 *
 * // Recursively search for the term 'doe' in the list of people
 * recursiveSearch(people, ['lastName'], true, /doe/i, searchResults);
 *
 * // searchResults will contain both person objects
 * console.log(searchResults); // [{ name: "John", lastName: "Doe" }, { name: "Jane", lastName: "Doe" }]
 */
export function recursiveSearch(
  items: SearchItem | SearchItem[],
  keys: string[],
  include: boolean,
  regex: RegExp,
  results: SearchItem[]
): void {
  if (Array.isArray(items)) {
    for (const item of items) {
      recursiveSearch(item, keys, include, regex, results);
    }
  } else if (typeof items === 'object' && items !== null) {
    searchWithinObject(items, keys, include, regex, results);
  } else if (regex.test(String(items))) {
    addUniqueMatch(results, [items]);
  }
}
