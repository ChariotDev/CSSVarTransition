# CSSVarTransition
RGB transitions for CSS Variables

## Install
```
> Terminal
npm install --save cssvartransition
```

## Function
```
async function transitionRGB(variable, target, seconds = 1000, steps = 10)
```

**variable:** 
* String (Required),
* name of root CSS Variable.

**target:** 
* List of integers (Required), 
* [red, green, blue] between 0 - 255.

**duration:** 
* Integer,
* milliseconds i.e. 3000 = 3 seconds,
* defaults to 1000.

**steps:**
* Integer,
* number of times the variable is updated during transition,
* ( i.e. 5) lower = more accurate transition, higher ( i.e. 20 ) is smoother,
* defaults to 10.

## Use example

```html
<!-- /index.html -->

<p>Hello World</p>
```

```css
/* /Style.css */

:root {
  --color-1: 176, 5, 192;
  }
  
 p {
  background-color: rgb( var(--color-1) );
 }
 ```
 
 ```js
 # /main.js
  
 import transitionRGB from "cssvartransition";
 
 await transitionRGB( '--color-1', [ 210, 52, 243 ] );
 ```

 ## Demo

 https://imgur.com/a/O2cofry
