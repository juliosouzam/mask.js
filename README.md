# Masked.js

## How to use?

```sh
yarn add masked.js
# or
npm install masked.js
```

```js
const { mask } = require('masked.js');

mask('12345678', '#####-###');
// 12345-678

mask('98765432110', '###.###.###-##');
// 987.654.321-10
```
