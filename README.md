# Mask.js

## How to use?

```sh
yarn add mask.js
# or
npm install mask.js
```

```js
const { mask } = require('mask.js');

mask('12345678', '#####-###');
// 12345-678

mask('98765432110', '###.###.###-##');
// 987.654.321-10
```
