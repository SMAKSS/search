# Search

![npm](https://img.shields.io/npm/v/@smakss/search) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@smakss/search) ![NPM](https://img.shields.io/npm/l/@smakss/search) ![npm](https://img.shields.io/npm/dt/@smakss/search) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/search)

Searching through arrays or objects might be easy these days with array helpers like [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) or libraries like [_lodash](https://www.npmjs.com/package/lodash), but what if you want a lighter library and have a nested array of object and want to search into every key of your object with a specific keyword? This might be hard or frustrating sometimes, this package will help you to achieve search a keyword through each object key, array elements and/or nested arrays. Also, this package uses ES6+ syntax so if you using older standards for writing JS code you may need a transpiler for it.

## How it works?

To install it you can simply do the following command:

```bash
npm i @smakss/search
or
yarn add @smakss/search
```

to include it with common js module you should do this:

```js
var Search = require('@smakss/search');
```

and to include it with ECMAscript module you can simply do this one:

```js
import Search from '@smakss/search';
```

then to use it within your application you can do it just like below:

The search function will accept 4 input parameter:

- `searchText` (`String`): The string that you want to look for in your element (It will match the whole string without regards to case sensitivity).
- `searchItems` (`Object|Array`): Element that you want to perform a search on it.
- `keys` (`Array`): Keys to include or exclude in your object items. If you exclude them it will exclude them from search and search won't perform on those specific keys. And if you include them search will only perform on those desired keys and it will ignore others.
- `include` (`Boolean`): A flag to determine whether the `keys` are included or excluded. It will be `True` by default, which means the keys will be included.
- `exact` (`Boolean`): A flag to determine whether the you are exactly looking for `searchText` string or not. It will be `False` by default, which means it will not looking for exact `searchText`. e. g. Let's say `searchText` is `5` so it will match all numbers where they include `5` *(`5`, `15`, `25`, ...)* otherwise it will only match `5` alone. This feature is only available in `v1.0.6+`.

## Examples of usage

### Passing an object

If the matching element was in object it will return the whole object:

```js
const obj = { name: "John", lastName: "Doe" };

Search({ searchText: "john", searchItems: obj });

// Result: [{ lastName: "Doe", name: "John" }]
```

### Passing an array

```js
const arr = [
  { name: "John", lastName: "Doe" },
  { name: "Joe", lastName: "Doe" }
];

Search({ searchText: "john", searchItems: arr });

// Result: [{ lastName: "Doe", name: "John" }]
```

### Passing a nested array

```js
const arr = [
  { name: "John", lastName: "Doe" },
  { name: "Joe", lastName: "Doe" },
  [{ name: "Jane", lastName: "Doe" }]
];

Search({ searchText: "jane", searchItems: arr });

// Result: [{ lastName: "Doe", name: "Jane" }]
```

### Passing a nested array with including keys

```js
const arr = [
  { name: "John", lastName: "Doe" },
  { name: "Joe", lastName: "Doe" },
  [{ name: "Jane", lastName: "Doe" }]
];

Search({ searchText: "jane", searchItems: arr, keys: ['name'] });

// Result: [{ lastName: "Doe", name: "Jane" }]
```

### Passing a nested array with excluding keys

```js
const arr = [
  { name: "John", lastName: "Doe" },
  { name: "Joe", lastName: "Doe" },
  [{ name: "Jane", lastName: "Doe" }]
];

Search({ searchText: "jane", searchItems: arr, keys: ['name'], include: false });

// Result: []
```
<sub>The result will be an empty array because we exclude the `name` key from the search so nothing will be matched with the provided params.</sub>

### Passing a nested array with exact search 

<sub>(Only available in `v1.0.6+`)</sub>

```js
const arr = [
  { name: "John", lastName: "Doe" },
  { name: "Janet", lastName: "Doe" },
  [{ name: "Jane", lastName: "Doe" }]
];

Search({ searchText: "jane", searchItems: arr, exact: true });

// Result: [{ name: "Jane", lastName: "Doe" }]
```

<sub>It will only match Jane and not Janet.</sub>

## Demo

You can check the [working demo](https://runkit.com/smakss/5f738b7f464579001bfda2d0) in runkit.