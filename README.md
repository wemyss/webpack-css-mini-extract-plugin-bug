# Webpack MiniCssExtractPlugin experimentalUseImportModule bug

## Description
When using `MiniCssExtractPlugin` with css modules and typescript packages, there can be an issue where the modules have a dependency that never completes processing as it cannot be picked up - i.e. `_activeTasks === _parallelism` in webpack `Compilation.js`.

This is ok for smaller projects, where the default `parallelism` of 100 will hide the bug, but with many packages in large projects you can run into the issue consistently.


## Steps to reproduce
1. Clone repo and install dependencies
2. Run `yarn test`, notice that it will never complete (stalls at 28%)
3. Take a look at `webpack.config.js`, you can toggle either `parallelism` or `experimentalUseImportModule` and re-run `yarn test` and notice it works.
4. Run `yarn clean` to remove the output and rebuild if necessary.
