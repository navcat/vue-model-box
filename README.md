# Overview
vue-model-box is a mobile model box plugin for vue.js.

# Installation
First, install `vue-model-box` from npm:
```bash
$ npm install vue-model-box
```

Then use it:
```Javascript
// ES6 mudule
import ModelBox from 'vue-model-box';

// CommonJS
const ModelBox = require('vue-model-box').default;
```

# Usage
Open an ModelBox:
```Javascript
ModelBox.open();
```

Open an ModelBox with a string:
```Javascript
ModelBox.open('Loading...');
```

Open an ModelBox with an object:
```Javascript
ModelBox.open({ text:'Loading...', spinnerType: 'fading-circle' });
```

Then close it:
```Javascript
ModelBox.close();
```

# API
| Option      | Description    | Value                                                       | Default |
|-------------|----------------|-------------------------------------------------------------|---------|
| text        | model-box text | String                                                      |         |
| spinnerType | spinner type   | 'snake', 'fading-circle', 'double-bounce', 'triple-bounce'  | 'snake' |

# License
MIT
