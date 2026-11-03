import search = require('@smakss/search');

const result = search.default({
  searchText: 'Ada',
  searchItems: [{ name: 'Ada' }],
  keys: ['name']
});
const items: { name: string }[] = result;
void items;
