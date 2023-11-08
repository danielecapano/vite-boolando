<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Card from './components/Card.vue';


export default {
  components: {
    Header,
    Main,
  },
  data(){
    return {

    }
  },
  created() {
    
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
