# hangul-romanization

Romanizes Hangul (Korean) characters. The library converts using the [Revised Romanization of Korean](https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean) romanization system.

## Installing

```bash
npm install --save hangul-romanization
```

## Usage

```
var hangulRomanization = require('hangul-romanization');

var romanization = hangulRomanization.convert('행복');
console.log(romanization); // 'haengbok'
```

## Building

```bash
npm run build
```
