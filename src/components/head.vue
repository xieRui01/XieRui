<template>
   <div id="header">
       <p>{{title}}</p>
   </div>
</template>
<script>
export default {
    name:"tou",
    props:{
        title:{
            type:String,
            default:'神影电影'
        }
    }
}
</script>
<style>
*{
    padding:0;
    margin:0;
    /* font-size:100px; */
}
/* #header {
    position: fixed;
    top: 0;
    left: 0;
} */
#header p{
    z-index:99;
    color:white;
    font-size:20px;
    font-weight:bolder;
    text-align:center;
    width: 100%;
    background:#f03d37;
    padding:15px 0;
     position: fixed;
    top: 0;
    left: 0;
}
</style>