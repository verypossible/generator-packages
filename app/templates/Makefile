BIN=./node_modules/.bin

dev-alone:
	$(BIN)/webpack --config "webpack/dev.js" --watch
.PHONY: dev

dev:
	$(BIN)/webpack-dev-server --config "webpack/dev.js"
.PHONY: dev

prod:
	$(BIN)/webpack --config "webpack/prod.js"
.PHONY: prod

lint:
	$(BIN)/tslint -p './tsconfig.json' './packages/**/*.ts' './index.ts'
.PHONY: lint

tsc:
	$(BIN)/tsc --noEmit
.PHONY: tsc

jest:
	TZ=America/New_York $(BIN)/jest $(JEST_FILES)
.PHONY: jest

jest-ci:
	TZ=America/New_York $(BIN/jest) -w 1
.PHONY: jest-ci

jest-watch:
	$(BIN)/jest --watch $(JEST_FILES)
.PHONY: jest-watch

jest-update:
	$(BIN)/jest -u
.PHONY: jest-update

test: tsc lint jest
.PHONY: test

test-ci: tsc lint jest-ci
.PHONY: test

open:
	open http://localhost:8080/index
.PHONY: open
