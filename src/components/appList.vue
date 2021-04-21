<template>
  <div id="list">
      <!-- <ul class="todo-item-list"> -->
        <transition-group name="todo" tag="ul">
          <li v-bind:class={completed:item.completed} v-for="(item, index) in $store.state.todoList" v-bind:key="item.todoItem" class="todo-item">
            <button v-on:click="toggleComplete(index)" class="btn btn-completed">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </button>
              <div class="todo-content">
                <div class="todo-content-sub">
                   {{new Date(item.time).getMonth() + 1}}월{{(new Date(item.time).getDate())}}일
                </div>
                <div class="todo-content-main">
                  {{item.todoItem}}
                </div>
              </div>
              
              <!--  -->
            <button v-on:click="deleteItem(item,index)" class="btn btn-delete">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </li>
        </transition-group>
      <!-- </ul> -->
  </div>
</template>

<script>
export default {
    computed: {
        
    },
    methods: {
        toggleComplete: function(index) {
            this.$store.commit("toggleComplete",index);
            // this.$emit("complete",index);
        },
        deleteItem: function(item, index) {
            // this.$emit("delete",item,index)
            this.$store.commit('deleteItem',{'item': item, 'index':index})
                    }
    },
}
</script>

<style>
#list {
  padding: 0 1rem;
  min-height: 500px;
  scroll-behavior: smooth;
}
#list::-webkit-scrollbar {
  display: none;
}
.todo-item {
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0.2rem;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 30px 0 30px 0;
  background: white;
}
.todo-item .todo-content {
  width: 100%;
  text-align: left;
  padding-left: 1rem;
}
.todo-content-sub {
  font-size: 14px;
  font-style: italic;
  color: var(--txt-sub);
  margin-bottom: 0.2rem;
}
.todo-item .todo-content-main {
  font-size: 20px;
  font-size: bold;
}
.todo-item.completed .todo-content-main {
  color: var(--txt-sub);
  text-decoration: line-through;
}
.todo-item.completed .btn-completed {
  color: var(--txt-sub);
}
.todo-item .btn{
    width: 50px;
    font-size: 24px;
}
.todo-item .btn-completed {
    float: left;
    color: var(--primary);
    transition: 0.2s;
}
.todo-item .btn-completed:hover,
.todo-item .btn-delete:hover {
    color: var(--primary-light);
}
.todo-item .btn-delete {
    float: right;
    color: var(--primary);
    transition: 0.2s;
}

/* transform */
.todo-enter-active, .todo-leave-active {
  transition: all 1s;
}
.todo-enter, .todo-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>