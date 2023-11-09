<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
// import Card from './components/Card.vue';
import axios from 'axios';
import { store } from './store'


export default {
  components: {
    Header,
    Main,
  },
  data(){
    return {
      store: store,
    }
  },
  created() {
    axios.get('http://localhost:3000/products')
    .then(res => {
      const products = res.data
      this.store.products = products
      // console.log(this.store);
    })
  }
}
</script>

<template>
  <Header />
  <Main />
  
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
