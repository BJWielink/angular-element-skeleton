# Angular elements skeleton

Often you might want to combine static pages with dynamic functionality. Dynamic functionality can
only be created by JavaScript in the browser. However writing JavaScript can be a chore, specifically
for managing state, reactivity and re-usability. Angular can help with the Elements API, however by
default Angular is meant to be used as a SPA. This skeleton uses AnalogJS to build and compile angular
without needing an index.html (SPA). Moreover, it has element preconfigured so that it can be used directly in any static page project.

## Usage

Components that will be used in the DOM will have to be registered inside the element-definitions.ts file.
The selector should not match the selector that Angular uses accoriding to the Angular documentation! So
for example `app-todo-list` should become something else like `x-todo-list` where x is any made up prefix.
Once this is done, you're all good to go and you can easily incorporate Angular in any project.

The only thing that should be done upfront is copying the boilerplate present in this git repo
to your project, after that you can add your own components in the `element-definitionts.ts`. Every page
that wants to use these elements should include the JavaScript:

```html
<script type="module" src="/dist/main.js"></script>
```

The main.js bundle is generated using either `pnpm run build`. During development you can use the `pnpm run watch`
command instead.

## Aditional notes

You might want to remove the .npmcrc file. I prefer to disable symbolic links because it does not play nicely
with wsl, hence I created the file. However it is by no means necessary if you run the application natively.
