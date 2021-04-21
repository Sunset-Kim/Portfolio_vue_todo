<template>
<transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <button class="modal-default-button" @click="$emit('close')">
              OK
            </button>
          </div>

        </div>
      </div>
    </div>
  </transition>
  
</template>

<script>
export default {

}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

.modal-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 300px;
  border-radius: 25px;
  margin: 0px auto;
  padding: 1rem 2rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: var(--primary);
}

.modal-body {
  padding: 1rem;
  margin: 20px 0;
}
.modal-default-button {
  padding: 0.2rem 0.5rem;
  background: var(--primary);
  color: white;
  border-radius: 5px;
  transition: 0.2s;
}
.modal-default-button:hover {
  background: var(--primary-light);
}
</style>