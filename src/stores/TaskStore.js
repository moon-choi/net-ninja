import { defineStore } from 'pinia'

//return value is usually a function itself. 
//when you invoke it, typical naming convention is useSomething.

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {id: 1, title: 'buy some milk', isFav: false},
      {id: 2, title: 'play Gloomhaven', isFav: true},
    ],
    name: 'Yoshi',

  }) //return an object.
})