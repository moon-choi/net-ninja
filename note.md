# Why should I use Pinia?
Pinia is a store library for Vue, it allows you to share a state across components/pages. If you are familiar with the Composition API, you might be thinking you can already share a global state with a simple export const state = reactive({}). This is true for single page applications but exposes your application to security vulnerabilities if it is server side rendered. But even in small single page applications, you get a lot from using Pinia:

1. Devtools support
2. A timeline to track actions, mutations
3. Stores appear in components where they are used
4. Time travel and easier debugging
5. Hot module replacement
6. Modify your stores without reloading your page
7. Keep any existing state while developing
8. Plugins: extend Pinia features with plugins
9. Proper TypeScript support or autocompletion for JS users
10. Server Side Rendering Support

https://pinia.vuejs.org/introduction.html#why-should-i-use-pinia