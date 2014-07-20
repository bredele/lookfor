var lookfor = require('lookfor');
var assert = require('assert');

function  create(str, el) {
	var li = document.createElement('li');
	li.className = 'searchable';
	li.setAttribute('data-search', str);
	el.appendChild(li);
	return li;
}

function displayed(el) {
	return window.getComputedStyle(el).display;
}


describe('Full text search', function() {

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

    assert.notEqual(displayed(red), 'none');
    assert.equal(displayed(blue), 'none');
    assert.notEqual(displayed(green), 'none');
  });
	
  it('should return a single result', function() {
    var search = lookfor();
    search('red');

    assert.notEqual(displayed(red), 'none');
    assert.equal(displayed(blue), 'none');
    assert.equal(displayed(green), 'none');
  });

});
