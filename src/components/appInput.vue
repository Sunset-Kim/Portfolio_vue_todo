<template>
  <div id="input-group">
      <form v-on:submit="addTodo" action="">
          <input ref="todoInput" v-model="todoItem" type="text">
          <button type="submit">등록</button>
      </form>
      <modal v-if="showModal" @close="showModal = false">
          <h3 slot="header">입력오류</h3>
          <p slot="body">
              입력창에 아무것도 입력되지 않았습니다
          </p>
        
      </modal>
  </div>
  
</template>

<script>
import Modal from  './common/modal.vue'

export default {
    data: function() {
      return {
          todoItem: '',
          showModal: false,
      }  
    },
    components: {
        Modal,
    },
    methods: {
        addTodo: function(e){
            e.preventDefault();
            if(this.todoItem === '') {
                this.showModal = true;
                this.$refs.todoInput.blur();
            } else {
                this.$store.commit('addTodo', this.todoItem);
                // this.$emit('addTodo', this.todoItem);
                this.todoItem = '';
            }
        }
    },

}
</script>

<style scoped>
    #input-group {
        margin-bottom: 2rem;
    }
    #input-group input {
        box-sizing: border-box;
        height: 35px;
        width: 200px;
        padding-left: 2rem;
        border-radius: 10px 0 0 10px;
        vertical-align: middle;
        box-shadow: 3px 3px 5px rgba(0,0,0,0.15);
		transition: 0.2s;
    }
	#input-group input:hover {
		background: var(--primary-light);
	}
    #input-group button {
        height: 35px;
        padding: 0 10px;
        vertical-align: middle;
        border-radius: 0 10px 10px 0;
        background: var(--primary);
        box-shadow: 3px 3px 5px rgba(0,0,0,0.15);
		transition: 0.2s;
    }
	#input-group button:hover {
		background: var(--primary-dark);
    }
</style>