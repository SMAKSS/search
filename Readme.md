# UUID

![npm](https://img.shields.io/npm/v/@smakss/search) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@smakss/search) ![NPM](https://img.shields.io/npm/l/@smakss/search) ![npm](https://img.shields.io/npm/dt/@smakss/search) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/search)

Searching through arrays or objects might be easy these days with array helpers like [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), but what if you have a nested array of object and want to search into every key of your object with a specific keyword? This might be hard or frustrating sometimes, this package will help you to achieve search a keyword through each object key, array elements and/or nested arrays. Also, this package uses ES6+ syntax so if you using older standards for writing JS code you may need a transpiler for it.

## How it works?

To install it you can simply do the following command:

```
npm i @smakss/search
or
yarn add @smakss/search
```

to include it with common js module you should do this:

```
var search = require('@smakss/search');
```

and to include it with ECMAscript module you can simply do this one:

```
import search from '@smakss/search';
```

then to use it within your application you can do it just like below:

The search function will accept 4 input parameter:

- `searchText` (`String`): The string that you want to look for in your element (It will match the whole string without regards to case sensitivity).
- `searchItems` (`Object|Array`): Element that you want to perform a search on it.
- `keys` (`Array`): Keys to include or exclude in your object items. If you exclude them it will exclude them from search and search won't perform on those specific keys. And if you include them search will only perform on those desired keys and it will ignore others.
- `include` (`Boolean`): A flag to determine whether the `keys` are included or excluded. 

## Examples of usage

**Passing an object:**
If the matching element was in object it will return the whole object.
```
const obj = { name: "John", lastName: "Doe" };

search({ searchText: "john", searchItems: array });

// Result: [{ lastName: "Doe", name: "John" }]
```

**Passing an array:**
```
const arr = [
  { name: "John", lastName: "Doe" },
  { name: "Joe", lastName: "Doe" }
];

search({ searchText: "john", searchItems: arr });

// Result: [{ lastName: "Doe", name: "John" }]
```

**Passing a nested array:**
```
const arr = [
  { name: "John", lastName: "Doe" },
  { name: "Joe", lastName: "Doe" },
  [{ name: "Jane", lastName: "Doe" }]
];

search({ searchText: "jane", searchItems: arr });

// Result: [{ lastName: "Doe", name: "Jane" }]
```

## Demo

You can check the [working demo](https://runkit.com/smakss/search) in runkit.