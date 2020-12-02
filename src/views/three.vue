<template>
<div>
    <m title="我的神影"></m>
    <three-cont></three-cont>
    <foot></foot>
</div>
   
</template>
<script>
  import head from '../components/head.vue'
  import foot from '../components/foot.vue'
  import threeCont from "../components/cont-three.vue"
export default {
    name:'three',
    components:{
        foot,
        m:head,
        threeCont
    }
}
</script>
<style scoped>
*{
  padding:0;
  margin:0;
}
div{
  margin-top: 70px;
}

</style>