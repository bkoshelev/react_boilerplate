lint:
	npx prettier --write src/**/*.{js,jsx}
	npx stylelint src/**/*.{js,jsx} --fix
	npx eslint -c .eslintrc.js src/**/*.{js,jsx} --fix
build:
	npx webpack --config webpack.config.js --mode production