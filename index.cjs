'use strict';
function SearchInKeys(searchItem, filtered, keys, include, regex) {
  if (
    typeof searchItem !== 'object' &&
    Boolean(searchItem.toString().match(regex)) &&
    !filtered.some((el) => Object.is(el, searchItem))
  )
    filtered.push(searchItem);
  Object.keys(searchItem).forEach((key) => {
    const includes = include ? keys.includes(key) : !keys.includes(key);
    if (
      (keys.length > 0 ? includes : true) &&
      Boolean(searchItem[key].toString().match(regex)) &&
      !filtered.some((el) => Object.is(el, searchItem))
    ) {
      filtered.push(searchItem);
    }
  });
}

function SearchInElements(searchItems, filtered, keys, include, regex) {
  if (Array.isArray(searchItems)) {
    searchItems.forEach((arr) => {
      Array.isArray(searchItems)
        ? SearchInElements(arr, filtered, keys, include, regex)
        : SearchInKeys(arr, filtered, keys, include, regex);
    });
  } else {
    SearchInKeys(searchItems, filtered, keys, include, regex);
  }
}

function Search({
  searchText = '',
  searchItems = [],
  keys = [],
  include = true
}) {
  const regex = new RegExp(searchText, 'i'),
    filtered = [];

  SearchInElements(searchItems, filtered, keys, include, regex);
  return filtered;
}

module.exports = Search;
