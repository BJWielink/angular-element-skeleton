# Angular elements skeleton

Often you might want to combine static pages with dynamic functionality. Dynamic functionality can
only be created by JavaScript in the browser. However writing JavaScript can be a chore, specifically
for managing state, reactivity and re-usability. Angular can help with the Elements API, however by
default Angular is meant to be used as a SPA. This skeleton uses AnalogJS to build and compile angular
without needing an index.html (SPA). Moreover, it has element preconfigured so that it can be used directly in any static page project.

## Aditional notes

You might want to remove the .npmcrc file. I prefer to disable symbolic links because it does not play nicely
with wsl, hence I created the file. However it is by no means necessary if you run the application natively.
