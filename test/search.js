var lookfor = require('lookfor');
var assert = require('assert');

function  create(str, el) {
	var li = document.createElement('li');
	li.className = 'searchable';
	li.setAttribute('data-search', str);
	el.appendChild(li);
	return li;
}

describe('Full text search', function(){
	var list, red, blue, green;
	beforeEach(function() {
		list = document.createElement('ul');
		document.body.appendChild(list);

		red = create('btnred', list);
		blue = create('dropblue', list);
		green = create('btngreen', list);
	});

	
  it('should return multiple results', function() {
    var search = lookfor();
    search('btn');

    assert.notEqual(window.getComputedStyle(red).display, 'none');
    assert.equal(window.getComputedStyle(blue).display, 'none');
    assert.notEqual(window.getComputedStyle(green).display, 'none');
  });
	
  it('should return a single result', function() {
    var search = lookfor();
    search('red');

    assert.notEqual(window.getComputedStyle(red).display, 'none');
    assert.equal(window.getComputedStyle(blue).display, 'none');
    assert.equal(window.getComputedStyle(green).display, 'none');
  });


});
