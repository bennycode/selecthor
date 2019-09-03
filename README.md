# SelecTHOR ⚡⚒️

> Choose your data the way Thor's hammer chose Thor.

Query language inspired by SQL to select JSON data.

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

const query = "select name from animals where speed.kph < 70";
const selection = selecthor(data, query);

console.log(JSON.stringify(selection)); // [{"name":"Chimp"},{"name":"Polar Bear"}]
```
