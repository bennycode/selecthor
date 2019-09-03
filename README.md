# SelecTHOR ⚡⚒️

> Choose your data the way Thor's hammer chose Thor.

Select JSON data with a query language inspired by SQL.

## ❯ Features

- **Easy-to-use.** Selecthor's API is dead simple, [easy to use](#-usage) and easy to replace (if you ever want to).
- **Typed.** Selecthor is written [100% in TypeScript](./src/index.ts), so there is no need to install typings from an external source.
- **Tested.** Don't be surprised when using Selecthor, it ships with [100% code coverage](./src/index.test.ts).
- **Documented.** Modern documentation lives in code. That's why [Selecthor](./src/index.ts) contains TSDoc comments where needed.
- **Compatible.** Node.js, Browsers? [Run Selecthor](https://runkit.com/npm/selecthor) on the platform of your choice!
- **Independent.** Don't be afraid of big lock files. Selecthor uses [zero dependencies](https://www.npmjs.com/package/selecthor?activeTab=dependencies).

## ❯ Installation

```bash
npm install selecthor
```

```bash
yarn add selecthor
```

## ❯ Usage

```javascript
const { selecthor } = require("selecthor");

const data = {
  animals: [
    {
      legs: 2,
      name: "Chimp",
      speed: {
        kph: 45,
        mph: 27.96
      }
    },
    {
      legs: 4,
      name: "Greyhound",
      speed: {
        kph: 72.42,
        mph: 45
      }
    },
    {
      legs: 4,
      name: "Polar Bear",
      speed: {
        kph: 40,
        mph: 24.85
      }
    }
  ]
};

const query = "SELECT name FROM animals WHERE speed.kph < 70";
const selection = selecthor(data, query);

console.log(JSON.stringify(selection)); // [{"name":"Chimp"},{"name":"Polar Bear"}]
```
