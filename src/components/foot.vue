<template>
<div id="footer">
    <ul>
        <router-link tag="li" to="/one">
        <i class="fa fa-film"></i><br>电影
        </router-link>
         <router-link tag="li" to="/two">
        <i class="fa fa-youtube-square"></i><br>影院
        </router-link>
         <router-link tag="li" to="/three">
        <i class="fa fa-user-circle"></i><br>我的
        </router-link>
    </ul>
</div>
</template>
<script>
export default {
    name:"foot"
}
</script>
<style scoped>
*{

    padding:0;
    margin:0;
}
#footer{
    width:100%;
    padding:10px 0;
    background:white;
    border-top:2px solid #ebe8e3;
    position:fixed;
    left:0;
    bottom:0;
}
#footer ul li{
    text-align:center;

    font-size:16px;
    list-style:none;
    margin-left:70px;
    float:left;

}
#footer li.active{
    color:#f03d37;
}
#footer li.router-link-active{
    color:#f03d37;
}
#footer ul i{
    margin-bottom:0.04rem;
    font-size:31px;
}

</style>