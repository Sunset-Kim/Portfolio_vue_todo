const addTodo = (state, newTodoItem) => {
    if (localStorage.getItem(newTodoItem)) {
      return
    }
    let date = new Date() 
    let obj = {
      todoItem: newTodoItem,
      completed: false,
      time: date.getTime(),
    }
    localStorage.setItem(newTodoItem, JSON.stringify(obj));
    state.todoList.push(obj);
}
const toggleComplete = (state,index) => {
    console.log(state);
    state.todoList[index].completed = !state.todoList[index].completed;
    localStorage.setItem(state.todoList[index].todoItem,JSON.stringify(state.todoList[index]));
  }
const deleteItem = (state, obj) => {
    console.log(state,obj);
    localStorage.removeItem(obj.item.todoItem);
    state.todoList.splice(obj.index,1);
}
const clearAll = (state) => {
    localStorage.clear();
    state.todoList = [];
}

export { addTodo, toggleComplete, deleteItem, clearAll };