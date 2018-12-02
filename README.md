# `Webpack 4` - простая сборка проекта
source [Webpack 4 - простая сборка проекта](https://www.youtube.com/watch?v=MRlBKfGktwI&t=2476s)
#

```bash
npm init
npm instal webpack --save-dev
npm instal webpack-cli --save-dev
```

# `webpack default settins`
`./src/index.js` to `dist/main.js`
```js
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    }
};
```


# `import export`
```js
function avg(/* ... */) {/* ... */};
export default avg;

import avg from './some.js';
```


# `mode` development production
`development` - направленна на укорение сборки. 

Sets process.env.NODE_ENV on DefinePlugin to value development. Enables NamedChunksPlugin and NamedModulesPlugin.

`production` - все направленно на итоговую минификацию кода. 

Sets process.env.NODE_ENV on DefinePlugin to value production. Enables FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin and UglifyJsPlugin.
```json
"scripts": {
    "dev": "webpack --mode=development",
    "build": "webpack --mode=production"
}
```
```js
options.mode
```


# `Live Reload`
```bash
npm instal webpack-dev-server --save-dev
```
## package.json
```json
"scripts": {
    "dev": "webpack-dev-server --mode=development --open"
}
```

# `webpack.config.js`
-> The output directory as **absolute path** (required).

### Получить абсолютный путь из относительного
```bash
npm i path --save-dev
```
```js
const path = require('path');

path.resolve(__dirname, './dist')
// resolve динамически конкатенирует "абсолютный путь" из "__dirname" и "указанного относительного"
```
`__dirname` абсолютный путь к текущей папке


# `babel`
```bash
npm i babel-core
      babel-loader
      babel-preset-env      # постоянно обновляющиеся настройки по переводу перегонки с новогостандарта в старый
      babel-preset-stage-3  # уровень перегонки
```

# `css`
```bash
npm i style-loader  # добавляет стили в <head>
      css-loader    
```

Можно импортировать стили в js файл `import './css/style.css';`, при этом сами стилили будут собраны вебпаком в js
и в браузере вставлены в head


# `webpack extract text plagin`

```bash
npm i extract-text-webpack-plugin@next --save-dev
```
