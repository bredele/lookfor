
/**
 * Expose 'search'
 */

module.exports = Search;


/**
 * Search constructor.
 * @param {String} namespace
 * @api public
 */

function Search(namespace){
  this.namespace = namespace || "search";
  this.style = document.createElement('style');
  document.head.appendChild(this.style);
}


/**
 * Run search.
 * @param {String} value
 * @param {string} className
 * @api public
 */

Search.prototype.run = function(value, className) {
  var searchable = className || 'searchable';
  var query = "";
  if(value) {
    query = "." + searchable + ":not([data-search*=\'" + value + "']) { display: none; }";
  }
  this.style.innerHTML = query;
};