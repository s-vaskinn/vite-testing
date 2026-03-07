# A project where I test Vite-React

## Course

I tok the course of Alex Dan on Udemy.

https://www.udemy.com/course/vite-for-devs/

https://github.com/alexhddev/vite-course

Enjoyed the course. Minimalistic and easy to follow allong approach.

Missing a `npm install -D @types/node' in the section 6 of the course in order to get the add watermark-to-image to work.

cool-math
React-app
simple-js

Then I took the course of Brad Traversy.

https://www.udemy.com/course/modern-react-from-the-beginning/

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
- json-server --watch db.json --port 8000
- run npm json-server
- npm i framer-motion
- npm i react-markdown
- npm i -D @tailwindcss/typography

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

TanStack fetching, syncing updating data on API much easier. Maybe look into it.

Recommended extensions
- Simple React Snippet
    - sfc + enter -> gives functions
- Es7+ React/Redux to make snippets. But above is working more often.
- Prettier - C 
    - Makes code prettier. "->' etc
- JavaScript (ES6)
- dotenv
    - gives syntax highlighting

useState Hook:
`const [value, setValue] = useState(initialValue);`
setValue is a special function that set the value. useState sets the initial state. Carefull with .push and ++ since React cannot detect those changes.

Controlled inputs:
React manages the input value through state.
Like useState, OnChange

Uncontrolled inputs:
The DOM manages the input value.
Access via useRef.

Context:
When you want to share data, themes, states and instead of passing props through many levels one may use context.

1. Create context
`const MyContext = React.createContext();`
2. Provide a value
```
 <MyContext.Provider value={someValue}>
  <App />
</MyContext.Provider>
```
3. Consume the value
`const value = useContext(MyContext);`


Shopping cart ui:
`npm install json-server --save-dev`
`json-server --watch db.json --port 3001`

Frendly dev:
```ts
type user = {
    name: string;
    email: string;
    age?: number; // ? means optional
}
```

` let name: string = "Sindre" `
Can not overwrite to number as in python.

This is how to set type of object:
```ts
function printUser( {age, name}: {name:string, age:number} ){
    console.log(`Name: ${name} and Age: ${age}`)
}
```

One may run this to have generic function types:
```ts
function identity<T>(value: T):T{
    return value
}
```
It will make functions like .toUpperCase() and toFixed() work on the function result.


During client-side hydration, React indeed runs JavaScript to transform the static HTML into a dynamic web application by adding interactivity. This process enhances user experience by allowing the web page to respond to user inputs and updates without requiring a full page reload.
