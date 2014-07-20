var lookfor = require('lookfor');
var assert = require('assert');


describe('Full text search', function(){
	var list;
	beforeEach(function() {
		list = document.createElement('ul');
		document.body.appendChild(list);
		list.innerHTML = "<li class='search' data-search='btnred'></li>" +
      "<li class='search' data-search='dropdown'></li>" +
      "<li class='search' data-search='btngreen'></li>";
	});
	
  it('should perform simple search', function() {
    var search = lookfor();
    search.run('red');

    assert.equal(list.childElementCount, 1);
    assert.equal(list.firstChild.getAttribute('data-search'), 'btnred');
  });
});
