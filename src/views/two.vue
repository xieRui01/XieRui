<template>
<div id="two">
    <m  title="神影影院"></m>
    <two-cont></two-cont>
    <foot></foot>
</div>
   
</template>
<script>
  import head from '../components/head.vue'
  import foot from '../components/foot.vue'
  import twoCont from '../components/cont-two.vue'
export default {
    name:'two',
    components:{
        foot,
        m:head,
        twoCont
    }
}
</script>
<style scoped>
*{
  padding:0;
  margin:0;
}
#two{
  margin-top: 55px;
}

</style>