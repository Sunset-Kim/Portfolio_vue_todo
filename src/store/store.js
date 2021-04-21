import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
  
  fetch() {
    const arr = [];
    for(let i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i) == 'loglevel:webpack-dev-server') {
        continue;
      } else {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); 
      }
    }
    arr.sort((a,b) => a.time - b.time);
    return arr;
  }
}

import * as mutations from './../modules/mutations.js'

export const store = new Vuex.Store({
    state: {
      message: '',
      todoList: storage.fetch(),
    },
    mutations: mutations,
    // mutations: {
    //   addTodo: function(state, newTodoItem) {
    //     if (localStorage.getItem(newTodoItem)) {
    //       return
    //     }
    //     let date = new Date() 
    //     let obj = {
    //       todoItem: newTodoItem,
    //       completed: false,
    //       time: date.getTime(),
    //     }
    //     localStorage.setItem(newTodoItem, JSON.stringify(obj));
    //     state.todoList.push(obj);
    //   },
    //   toggleComplete: function(state,index) {
    //     console.log(state);
    //     state.todoList[index].completed = !state.todoList[index].completed;
    //     localStorage.setItem(state.todoList[index].todoItem,JSON.stringify(state.todoList[index]));
    //   },
    //   deleteItem: function(state, obj) {
    //     console.log(state,obj);
    //     localStorage.removeItem(obj.item.todoItem);
    //     state.todoList.splice(obj.index,1);
    //   },
    //   clearAll: function(state) {
    //     console.log('clear');
    //     localStorage.clear();
    //     state.todoList = [];
    //   }
    // }
  })