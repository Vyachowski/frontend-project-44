install:
	npm ci
brain-games:
	bin/brain-games.js
brain-calc:
	bin/brain-calc.js
brain-even:
	bin/brain-even.js
brain-gcd:
	bin/brain-gcd.js
brain-prime:
	bin/brain-prime.js
brain-progression:
	bin/brain-progression.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .