
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

lookfor.js: components
	@component build --standalone lookfor --name lookfor --out .

clean:
	rm -fr build components template.js

.PHONY: clean
