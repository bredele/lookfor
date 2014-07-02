
/**
 * Expose 'lookfor'
 */

module.exports = function() {

	/**
	 * Stylesheet.
	 * 
	 * @type {Element}
	 * @api private
	 */
	
	var style = document.createElement('style');


	// append style 

	document.head.appendChild(style);


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
		// NOTE" classname and dataset should be configurable
		if(!value) return;
		style.innerHTML = ".searchable:not([data-search*=\'" + value + "']) { display: none; }";
	};

};

