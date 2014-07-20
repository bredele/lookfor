
/**
 * Expose 'lookfor'
 */

module.exports = function(el) {

	/**
	 * Stylesheet.
	 * 
	 * @type {Element}
	 * @api private
	 */
	
	var style = document.createElement('style');


	// append style 

	(el || document.head).appendChild(style);


	/**
	 * Hide every dom element which 
	 * doesn't contain the passed
	 * value.
	 *
	 * Examples:
	 *
	 *   search('red');
	 *   
	 * @return {String} value
	 * @api public
	 */
	
	return function(value) {
		var query = ".searchable:not([data-search*=\'" + value + "']) { display: none; }";
		// NOTE" classname and dataset should be configurable
		if(!value) query = '';
		style.innerHTML = query;
	};

};

