<template>
     <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show"><img src="../assets/images/007.png" alt=""></div>
                <div class="info_list">
                    <h2>机械师2：复活</h2>      
                <p>观众评<span class=person>8.9</span></p>
                <p>主演：格兰特.鲍尔,艾米.斯马特，博伊德.肯斯特纳</p>
                <p>未来三十天内上映</p>
                </div>
                <div class=btn_pres>预售</div>
            </li>
            <li>
                <div class="pic_show"><img src="../assets/images/008.png" alt=""></div>
                <div class="info_list">
                    <h2>机械师2：复活</h2>             
                <p>观众评<span class=person>8.9</span></p>
                <p>主演：格兰特.鲍尔,艾米.斯马特，博伊德.肯斯特纳</p>
                <p>未来三十天内上映</p>
                   </div>
                <div class=btn_pres>预售</div>
            </li>
            <li>
                <div class="pic_show"><img src="../assets/images/009.png" alt=""></div>
                <div class="info_list">
                    <h2>机械师2：复活</h2>         
                <p>观众评<span class=person>8.9</span></p>
                <p>主演：格兰特.鲍尔,艾米.斯马特，博伊德.肯斯特纳</p>
                <p>未来三十天内上映</p>
                 </div>
                <div class=btn_pres>预售</div>
            </li>
            <li>
                <div class="pic_show"><img src="../assets/images/010.png" alt=""></div>
                <div class="info_list">
                    <h2>机械师2：复活</h2>               
                <p>观众评<span class=person>8.9</span></p>
                <p>主演：格兰特.鲍尔,艾米.斯马特，博伊德.肯斯特纳</p>
                <p>未来三十天内上映</p>
                </div>
                <div class=btn_pres>预售</div>
            </li>
            <li>
                <div class="pic_show"><img src="../assets/images/011.png" alt=""></div>
                <div class="info_list">
                    <h2>机械师2：复活</h2>
                <p>观众评<span class=person>8.9</span></p>
                <p>主演：格兰特.鲍尔,艾米.斯马特，博伊德.肯斯特纳</p>
                <p>未来三十天内上映</p>
                 </div>
                <div class=btn_pres>预售</div>
            </li>
            <li>
                <div class="pic_show"><img src="../assets/images/012.png" alt=""></div>
                <div class="info_list">
                    <h2>机械师2：复活</h2>
                <p>观众评<span class=person>8.9</span></p>
                <p>主演：格兰特.鲍尔,艾米.斯马特，博伊德.肯斯特纳</p>
                <p>未来三十天内上映</p>
                </div>
                <div class=btn_pres>预售</div>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    name:"child3"
}
</script>
<style>
.movie_body{
    flex:1;
    height: 750px;
    margin-top: 120px;
    overflow: auto;
}
.movie_body ul{
    margin:0 12px;
    overflow: hidden;
}
.movie_body ul li{
    margin-top:12px;
    display: flex;
    align-items:center;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 10px;
}
.movie_body .pic_show{
    width:64px;
    height:90px;
}
.movie_body .pic_show img{
    width:100%;
}
.movie_body .info_list{
    margin-left:10px;
    flex:1;
    position: relative;
}
.movie_body .info_list h2{
    font-size: 17px;
    line-height: 24px;
    width:150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie_body .info_list p{
    font-size: 13px;
    color:#666;
    line-height: 22px;
    width:200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

}
.movie_body .info_list .person{
    margin-left: 10px;
    font-weight: 700;
    color:#faaf00;
    font-size:15px;
}
.movie_body .info_list img{
    width:50px;
    position:absoulte;
    right:10px;
    top:5px;
}
.movie_body .btn_pres{
    width:47px;
    height:27px;
    line-height: 28px;
    text-align: center;
    background-color: #7fb3d6;
    color:#fff;
    border-radius: 4px;
    font-size:12px;
    cursor: pointer;

}
.movie_body .btn-pres{
    background-color: #3c9fe6;
}
    
</style>