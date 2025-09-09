# A project where I test Vite-React

## Course

I tok the course of Alex Dan on Udemy.

https://www.udemy.com/course/vite-for-devs/

https://github.com/alexhddev/vite-course

Enjoyed the course. Minimalistic and easy to follow allong approach.

Missing a `npm install -D @types/node' in the section 6 of the course in order to get the add watermark-to-image to work.

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
    - For simple project
- npm i -D vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom
    - For react project
- npm i -D sharp
    - A popular image library for node
- npm i -D @types/node
    - Had to install this package in addition to get WatermarkPlugin to work.
- npm i -D vite-plugin-inspect

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

`variable?`is making the variable optional in typescript. `...options` can be added to a list of arguments and is called spread values. If options exist they overwrite standard argument.

```ts
// default options
const options = {
    text: 'Sample Watermark',
    position: 'center',
    color: 'white',
    fontsize: 48,
    ...options // spead user options
}
```

