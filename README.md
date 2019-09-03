# SelecTHOR ⚡⚒️

> Choose your data the way Thor's hammer chose Thor.

Query language for data in JSON.

```javascript
const selecthor = require("selecthor").default;

const data = {
  users: [
    {
      name: "Benny"
    },
    {
      name: "Sarah"
    }
  ],
  items: [
    {
      name: "Ski"
    },
    {
      name: "Wakeboard"
    }
  ]
};

const query = "select * from users";
const selection = selecthor(data, query);

console.log(JSON.stringify(selection)); // [{"name":"Benny"},{"name":"Sarah"}]
```
