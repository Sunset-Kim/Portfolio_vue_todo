<template>
  <div id="footer">
      <button v-on:click="clearAll" type="button" class="btn-clear">전체삭제</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll: function() {
      // this.$emit('clear')
      this.$store.commit('clearAll');
    }
  }
}
</script>

<style>
#footer {
 padding: .5rem 1rem;
}
.btn-clear {
  width: 100%;
  border-radius: 10px;
  padding: 0.5rem;
  background: var(--secondary);
  color: white;
  margin-bottom: 1rem;
  transition: background 0.2s;
}

.btn-clear:hover {
  background: var(--secondary-dark)
}
</style>