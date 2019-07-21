<template>
  <div class="uchat-user-box">
    <div class="uchat-nation-row">
        <div class="user-face">
            <Badge dot>
                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            </Badge>
        </div>
        <div class="nation_middle">
            <span class="iconfont f_12 active">&#xe605;</span>
            <span class="iconfont f_12">&#xe6e2;</span>
            <span class="iconfont f_12">&#xe626;</span>
        </div>
    </div>
    <div class='uchat-content-row'>
        <div class="content-row-header" style="display:none">
            <div class="header-search">
                <i class="iconfont f_12 text_333 ml_8">&#xe63a;</i>
                <input type="text" placeholder="search...">
            </div>
            <div class="header-user-item">
                <Dropdown>
                    <a href="javascript:void(0)">
                        <Badge dot>
                            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                        </Badge>
                        <span class="f_12 text_333 pl_10">浮生一日</span>
                        <i class="iconfont f_12 text_333 ml_8 icon-xiangxiajiantou"></i>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>驴打滚</DropdownItem>
                        <DropdownItem>炸酱面</DropdownItem>
                        <DropdownItem disabled>豆汁儿</DropdownItem>
                        <DropdownItem>冰糖葫芦</DropdownItem>
                        <DropdownItem divided>北京烤鸭</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
        <div class="handle-content-area">
            <div class="chat-history" ref="chathistory">
                     <EasyScrollbar :barOption="opt">
                         <div id="wrapper" :style="{height:chathistoryheight+'px'}">
                            <ul>
                                <li>
                                    <Avatar shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"/>
                                    <div class="user-info">
                                        <div class="user-data">
                                            <p>浮生一日</p>
                                            <span>19/07/10</span>
                                        </div> 
                                        <div class="chat-summary">
                                            明天请你吃饭如何?
                                        </div>  
                                    </div>
                                </li>
                                <li class="active">
                                    <Avatar shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"/>
                                    <div class="user-info">
                                        <div class="user-data">
                                            <p>浮生一日</p>
                                            <span>19/07/10</span>
                                        </div> 
                                        <div class="chat-summary">
                                            明天请你吃饭如何?
                                        </div>  
                                    </div>
                                </li>
                                <li v-for="item in 10" :key="item">
                                    <Avatar shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"/>
                                    <div class="user-info">
                                        <div class="user-data">
                                            <p>浮生一日</p>
                                            <span>19/07/10</span>
                                        </div> 
                                        <div class="chat-summary">
                                            明天请你吃饭如何?
                                        </div>  
                                    </div>
                                </li>
                            </ul>
                        </div>
                 </EasyScrollbar>
            </div>
            <div class="chat-converse">
                <div class="converse-header" ref='converseheader'>
                    <p>浮生一日</p>
                    <Dropdown>
                        <a href="javascript:void(0)">
                            <i class="iconfont f_24 text_999 mr_20 icon-gengduo"></i>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem divided>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div class="send-list" ref="sendlist">
                    <EasyScrollbar :barOption="opt">
                        <div :style="{'height':sendlistheight+'px'}">
                            <div style="height:900px;">dsadsa</div>
                        </div>
                    </EasyScrollbar>
                </div>
                <div class="send-user-area" ref="senduserarea">
                    <div class="send-user-tools">
                        <div id="emoji" class="emoji" @click.stop="emojiactive=!emojiactive">
                            <svg style="color: #999;fill: currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4692" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><path d="M520.76544 767.05792c-99.14368 0-180.30592-73.65632-193.78176-169.09312l-49.22368 0c13.78304 122.624 116.61312 218.29632 242.91328 218.29632S749.81376 720.5888 763.5968 597.9648l-49.0496 0C701.0816 693.4016 619.90912 767.05792 520.76544 767.05792zM512 0C229.23264 0 0 229.2224 0 512c0 282.75712 229.23264 512 512 512 282.76736 0 512-229.24288 512-512C1024 229.2224 794.76736 0 512 0zM511.95904 972.78976C257.46432 972.78976 51.1488 766.48448 51.1488 512c0-254.49472 206.30528-460.81024 460.81024-460.81024 254.48448 0 460.8 206.30528 460.8 460.81024C972.75904 766.48448 766.44352 972.78976 511.95904 972.78976zM655.57504 456.92928c31.06816 0 56.24832-25.1904 56.24832-56.24832 0-31.06816-25.18016-56.24832-56.24832-56.24832-31.06816 0-56.25856 25.18016-56.25856 56.24832C599.31648 431.73888 624.49664 456.92928 655.57504 456.92928zM362.73152 456.92928c31.06816 0 56.24832-25.1904 56.24832-56.24832 0-31.06816-25.1904-56.24832-56.24832-56.24832-31.0784 0-56.25856 25.18016-56.25856 56.24832C306.47296 431.73888 331.65312 456.92928 362.73152 456.92928z" p-id="4693"></path></svg>
                            <div :class="['emoji_layer',{'emoji_active':emojiactive}]">
                                <span v-for="(item,index) in emoji" :key="index">{{item}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="commit-world-area">
                        <textarea></textarea>
                    </div>
                    <div class="commit-submit">
                        <Button shape="circle">发送(Enter)</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {emoji} from '@/api/emoji'
export default {
    name:'chat',
    data(){
        return{
            value6:'',
            emoji,
            emojiactive:false,
            chathistoryheight:0,
            sendlistheight:0,
            opt:{
                barColor:"#00",   //滚动条颜色
                barWidth:4,           //滚动条宽度
                railColor:"#eee",     //导轨颜色
                barMarginRight:0,     //垂直滚动条距离整个容器右侧距离单位（px）
                barMaginBottom:0,     //水平滚动条距离底部距离单位（px)
                barOpacityMin:0.3,      //滚动条非激活状态下的透明度
                zIndex:"auto",        //滚动条z-Index
                autohidemode:true,     //自动隐藏模式
                horizrailenabled:false,//是否显示水平滚动条
            }

        }
    },
    mounted(){
        var _self=this;
        document.addEventListener('click',function(e){
           _self.emojiactive=false;
           e.stopPropagation();
        },false);
        this.sendlistheight=this.$refs.sendlist.clientHeight;
        this.chathistoryheight=this.$refs.chathistory.clientHeight;
        window.onresize=function(){
            _self.chathistoryheight=_self.$refs.chathistory.clientHeight;
            _self.sendlistheight=_self.$refs.sendlist.clientHeight;
            console.info(_self.sendlistheight)
        }
    },
    methods:{

    }
}
</script>

<style scoped>
@import url("~assets/css/index_home.css");
</style>

