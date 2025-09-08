# A project where I test Vite-React

## Commands
- npm create vite@latest
- npm install
- npm run dev
- npm run build
- npm run preview 
- npm run build -- --mode pretest
    - running with pretest env
- npm install vite-plugin-remove-console -D
    - -D is for DEV
- npx vite-bundle-visualizer
- npm -D vitest

## Notes
Module bundle: grouping together .js css. png. files into one or multiple bunde.js's
It is faster for the browser to load one big files instead of many small.

Model bundle is using esbuild in dev, rollup in prod, and vite is developing their own model bundle, vite-rolldown.

In package.json: 
```json
"dependencies": {
    "npm:rolldown-vite@lastes"
}
```

Tree shaking - removing unused functions so that bundles are the smallest possible.

Static assets are copied from the public folder as default. `import viteLogo from '/vite.svg'`. Files from below can be copied as `./xxx`. Small images, like svg, will be added to the bundle.

Installed ESLint VS Code extention to get type error messages real time.

To test app on your mobile phone be on the same wifi and add `--host` to `"dev": "vite --host"` to the `package.json`'.

Glob imports: importing all images from folder. 

Importing css can be done by importing full css-files or modules.
```js
import '../assets/1.css'
import '../assets/2.css'
import colors from '../assets/3.module.css'
...
<p class=${colors.red}> This is colored by module css</p>
```
Modules has to be names `{module_name}.module.css` and can be used as example above.