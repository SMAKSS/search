'use strict';
function searchInKeys(searchItem, filtered, keys, include, regex) {
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

function searchInElements(searchItems, filtered, keys, include, regex) {
  if (Array.isArray(searchItems)) {
    searchItems.forEach((arr) => {
      Array.isArray(searchItems)
        ? searchInElements(arr, filtered, keys, include, regex)
        : searchInKeys(arr, filtered, keys, include, regex);
    });
  } else {
    searchInKeys(searchItems, filtered, keys, include, regex);
  }
}

function search({
  searchText = '',
  searchItems = [],
  keys = [],
  include = true
}) {
  const regex = new RegExp(searchText, 'i'),
    filtered = [];

  searchInElements(searchItems, filtered, keys, include, regex);
  return filtered;
}

module.exports = search;
