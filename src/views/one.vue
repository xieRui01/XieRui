<template>
<div>
    <m></m>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="one-child1" class=city_name id="child1">
          <span>北京</span> <span><i class=fa fa-caret-down></i></span>
        </router-link>
        <div class="hot_switch">
          <router-link tag="div" to="one-child2" class="hot_item active">正在热映</router-link>
          <router-link tag="div" to="one-child3" class="hot_item active">即将上映</router-link>
        </div>
        <router-link tag="div" to="one-child4" class="search_entry">
          <i class="fa fa-search"></i>
        </router-link>
      </div>
    </div>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <foot></foot>
</div>
</template>
<script>
  import head from '../components/head.vue'
  import foot from '../components/foot.vue'
  import child1 from '../components/one-child1.vue'
  import child2 from '../components/one-child2.vue'
 import child3 from '../components/one-child1.vue'
  import child4 from '../components/one-child2.vue'
export default {
    name:'main1',
    components:{
        foot,
        m:head,
      
    }
}
</script>
<style>
*{
  padding:0;
  margin:0;
}

#content .movie_menu{
  z-index: 99;
   position: fixed;
  top: 6.9vh;
  left:0;
  background-color: white;
  width:100%;
  height:7vh;
  border-bottom:1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
}
.movie_menu .city_name{
  margin-left:20px;
  height:100%;
  line-height: 45px;
}
.movie_menu .city_name.router-link-active{
  color:#ef4238;
  border-bottom: 2px solid #ef4238;
  box-sizing: border-box;
}
.movie_menu .hot_switch{
  display: flex;
  height:100%;
  line-height:45px;
}
.movie_menu .hot_item{
  font-size: 15px;
  color:#666;
  width:80px;
  text-align:center;
  margin:0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.router-link-active{
  color:#ef4238;
  border-bottom: 2px solid #ef4238;
}
.movie_menu .search_entry{
  margin-right: 20px;
  height:100%;
  line-height:45px;
}
.movie_menu .search_entry.router-link-active{
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
  box-sizing: border-box;
}

/* .movie_menu .search_entry i{
  font-size: 24px;
  color:red;
} */

</style>