<template>
    <div class=city_body>
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li>北京</li>
                    <li>上海</li>
                    <li>天津</li>
                    <li>合肥</li>
                    <li>郑州</li>
                </ul>
            </div>
            <br>
            <br>
            <br>
            <br>
            <div class="city_sort">
                <div>
                    <h2>A</h2>
                    <ul>
                        <li>阿克苏</li>
                        <li>安康</li>
                        <li>安庆</li>
                    </ul>
                </div>
                 <div>
                    <h2>B</h2>
                    <ul>
                        <li>白山</li>
                        <li>白城</li>
                        <li>宝鸡</li>
                    </ul>
                </div>
                   <div>
                    <h2>C</h2>
                    <ul>
                        <li>沧州</li>
                        <li>长春</li>
                        <li>昌吉</li>
                    </ul>
                </div>
                   <div>
                    <h2>D</h2>
                    <ul>
                        <li>大理</li>
                        <li>大连</li>
                        <li>大庆</li>
                    </ul>
                </div>
                   <div>
                    <h2>E</h2>
                    <ul>
                        <li>鄂尔多斯</li>
                        <li>恩施</li>
                        <li>鄂州</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'one-child1'
}
</script>
<style scoped>
.city_body{
        margin-top:110px;
        display:flex;
        width:100%;
        
      
    }
    .city_list{
           height: 970px;
    }
    .city_body .city_list{
        flex:1;
        overflow:auto;
        background-color:#fff5f0;
    }
    .city_body .city_list::-webkit-scrollbar{
        background-color: transparent;
        width:0;
    }
    .city_body .city_hot{
     
        margin-top:20px;
    }
    .city_body .city_hot h2{
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background:#f0f0f0;
        font-weight: normal;
    }
    .city_body .city_hot ul li{
        list-style: none;
        float:left;
        background:#fff;
        width:28%;
        height:33px;
        margin-top:15px;
        margin-left:3%;
        padding:0 4px;
        border:1px solid #e6e6e6;
        line-height:33px;
        text-align: center;
        box-sizing:border-box;
    }
    .city_body .city_sort div{
        margin-top:20px;

    }
    .city_body .city_sort h2{
        padding-left:20px;
        line-height:30px;
        font-size:14px;
        background-color: #f0f0f0;
        font-weight:normal;
    }
    .city_body .city_sort ul{
        padding-left:10px;
        margin-top:10px;
    }
    .city_body .city_sort ul li{
        list-style: none;
        line-height: 30px;
    }
    .city_body .city_index{
        background-color: white;
        height: 82vh;
        position: fixed;
        left: 94.5%;
        top:14vh;
        width:20px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        border-left: 1px solid #e6e6e6;
    }
    .city_index ul li{
        margin-top:60%;
        list-style: none;
    }
</style>
