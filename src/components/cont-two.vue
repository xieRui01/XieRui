<template>
    <div id="main">
        <div id="content">
            <div class=cinema_menu>
                <div class="city_switch">
                    全城 <i class="fa fa-caret-down"></i>
                </div>
                <div class="city_switch">
                    品牌 <i class="fa fa-caret-down"></i>
                </div>
                <div class="city_switch">
                    特色 <i class="fa fa-caret-down"></i>
                </div>
            </div>
        </div> 
        <ci-list></ci-list>      
    </div>
</template>
<script>
    import CiList from '../components/CiList.vue'
export default {
    name:'contTWO',
    components:{
        CiList,
    }
    
}
</script>
<style scope>
*{
    padding: 0;
    margin:0;
}
#content .cinema_menu{
   
    width:100%;
    height:45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background:white;
}
.city_switch{
 font-size: 18px;
}
    
</style>