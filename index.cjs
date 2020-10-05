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
    if (Array.isArray(searchItem[key])) {
      searchItem[key].forEach((item) => {
        const matchedNoRepeat =
          Boolean(item.toString().match(regex)) &&
          !filtered.some((el) => Object.is(el, item));
        if (typeof item !== 'object' && matchedNoRepeat)
          filtered.push(searchItem);
        else if (typeof item === 'object') {
          Object.keys(item).forEach((itemKey) => {
            if (
              (itemKey.length > 0 ? includes : true) &&
              Boolean(item[itemKey].toString().match(regex)) &&
              !filtered.some((el) => Object.is(el, item))
            ) {
              filtered.push(searchItem);
            }
          });
        }
      });
    }
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
  include = true,
  exact = false
}) {
  const regex = exact
      ? new RegExp(`\^${searchText}\$`, 'i')
      : new RegExp(searchText, 'i'),
    filtered = [];

  SearchInElements(searchItems, filtered, keys, include, regex);
  return filtered;
}

module.exports = Search;
