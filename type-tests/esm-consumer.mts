import search from '@smakss/search';

const result = search({
  searchText: 'Ada',
  searchItems: [{ name: 'Ada' }],
  keys: ['name']
});
const items: { name: string }[] = result;
void items;
