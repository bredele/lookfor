search
======

CSS query selector search engine (inspired by this [article](http://redotheweb.com/2013/05/15/client-side-full-text-search-in-css.html))


## Installation

with component:

    $ component install bredele/search

with nodejs:

    $ npm install search


## Usage


```js
var Search = require('search');
var search = new Search();
...
search.run('red');
...
```


```html
<div class="searchable" data-search="red"></div>
```

## Todo

- support IE8
- do standalone library
   

## License

  MIT
