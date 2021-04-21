<template>
  <div id="app">
    <app-header></app-header>
    <app-input></app-input>
    <app-list></app-list>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './components/appHeader.vue'
import appInput from './components/appInput.vue'
import appList from './components/appList.vue'
import appFooter from './components/appFooter.vue'
import {store} from './store/store.js';

export default {
  name: 'App',
  components: {
    appHeader,
    appInput,
    appList,
    appFooter,
  },
  'store': store,
  
}
</script>

<style>

:root {
  --primary: #eea39a;
  --primary-dark: #ba746c;
  --primary-light: #ffd5cb;
  --secondary: #505c8b;
  --secondary-dark: #3f486d;
  --secondary-light: #d1e7ed;
  --tertiary : #d3a64c;
  --tertiary-light: #fff2d8;
  --txt-main: #333;
  --txt-sub: #666;
  --bg-primary: #f2f2f2;
}
#app {
  text-align: center;
  margin: 1rem auto;
  max-width: 450px;
  min-width: 350px;
  width: 80%;
  border-radius: 15px;
  min-width: 300px;
  overflow: hidden;
  background: var(--bg-primary);
  /* font-family: 'Noto Sans KR', sans-serif; */
  font-family: 'Nanum Gothic', sans-serif;
}
</style>
