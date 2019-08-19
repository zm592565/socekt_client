<template>
  <div class="uchat-user-box">
    <div class="uchat-nation-row">
        <div class="user-face">
            <Badge dot>
                <Avatar :src="face?face:''" />
            </Badge>
        </div>
        <div class="nation_middle">
            <span @click="checkedNav(0)" :class="['iconfont f_12',{active:leftItemactive==0}]">&#xe605;</span>
            <span @click="checkedNav(1)" :class="['iconfont f_12',{active:leftItemactive==1}]">&#xe6e2;</span>
            <span @click="checkedNav(2)" :class="['iconfont f_12',{active:leftItemactive==2}]">&#xe626;</span>
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
                        <div id="wrapper" :style="{height:chathistoryheight+'px'}" >
                            <template v-if="leftItemactive===0">
                                <p class="list_title_area bt-b">聊天记录</p>
                                <ul v-if="histroyinfo">
                                    <li v-for="(item,index) in histroyinfo" :key="index">
                                        <Avatar shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"/>
                                        <div class="user-info">
                                            <div class="user-data">
                                                <p>{{item.username}}</p>
                                                <span>{{item|showTime}}</span>
                                            </div> 
                                            <div class="chat-summary">
                                                {{item.message.length?item.message[item.message.length-1].message:''}}
                                            </div>  
                                        </div>
                                    </li>
                                </ul>
                            </template>
                            <template v-if="leftItemactive===1">
                                <div class="addressBook">
                                    <p class="list_title_area bt-b">好友</p>
                                    <dl @click="getUserChat(item.id,item.username)" v-for="(item,index) in followuser" :key="index">
                                        <dt><Avatar style="background-color: #87d068" icon="ios-person" /></dt>
                                        <dd>{{item.username}}</dd>
                                    </dl>
                                </div>
                            </template>
                            <template v-if="leftItemactive===2">
                                <div>暂无</div>
                            </template>   
                        </div>
                 </EasyScrollbar>
            </div>
            
            <div class="chat-converse">
                <div v-if="talkinfo" class="converse-header" ref='converseheader'>
                    <p>{{talkinfo.talkusername?talkinfo.talkusername:''}}</p>
                    <Dropdown>
                        <a href="javascript:void(0)">
                            <i class="iconfont f_24 text_999 mr_20 icon-gengduo"></i>
                        </a>
                        <DropdownMenu slot="list" style="display:none">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div v-if="talkinfo" class="send-list" ref="sendlist">
                    <EasyScrollbar :barOption="opt">
                        <div ref="chew_box" class="chew_box" :style="{'height':sendlistheight+'px'}">
                            <div class="chew_list_box" v-if="histroyinfo">
                                <dl :class="{'mine_chat':item.send==userid}" v-for="(item,index) in histroyinfo[talkinfo.talkid].message" :key="index">
                                    <dt>1</dt>
                                    <dd>
                                        <div class="user_chat_content">
                                           {{item.message}}
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </EasyScrollbar>
                </div>
                <div v-if="talkinfo" class="send-user-area" ref="senduserarea">
                    <div class="send-user-tools">
                        <div id="emoji" class="emoji" @click.stop="emojiactive=!emojiactive">
                            <svg style="color: #999;fill: currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4692" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><path d="M520.76544 767.05792c-99.14368 0-180.30592-73.65632-193.78176-169.09312l-49.22368 0c13.78304 122.624 116.61312 218.29632 242.91328 218.29632S749.81376 720.5888 763.5968 597.9648l-49.0496 0C701.0816 693.4016 619.90912 767.05792 520.76544 767.05792zM512 0C229.23264 0 0 229.2224 0 512c0 282.75712 229.23264 512 512 512 282.76736 0 512-229.24288 512-512C1024 229.2224 794.76736 0 512 0zM511.95904 972.78976C257.46432 972.78976 51.1488 766.48448 51.1488 512c0-254.49472 206.30528-460.81024 460.81024-460.81024 254.48448 0 460.8 206.30528 460.8 460.81024C972.75904 766.48448 766.44352 972.78976 511.95904 972.78976zM655.57504 456.92928c31.06816 0 56.24832-25.1904 56.24832-56.24832 0-31.06816-25.18016-56.24832-56.24832-56.24832-31.06816 0-56.25856 25.18016-56.25856 56.24832C599.31648 431.73888 624.49664 456.92928 655.57504 456.92928zM362.73152 456.92928c31.06816 0 56.24832-25.1904 56.24832-56.24832 0-31.06816-25.1904-56.24832-56.24832-56.24832-31.0784 0-56.25856 25.18016-56.25856 56.24832C306.47296 431.73888 331.65312 456.92928 362.73152 456.92928z" p-id="4693"></path></svg>
                            <div :class="['emoji_layer',{'emoji_active':emojiactive}]">
                                <span v-for="(item,index) in emoji" :key="index">{{item}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="commit-world-area">
                        <textarea v-model="message"></textarea>
                    </div>
                    <div class="commit-submit">
                        <Button @click="send" shape="circle">发送(Enter)</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
     <Modal v-model="modal1" title="提示" ok-text='允许' cancel-text='拒绝'  @on-ok="allowLogin" @on-cancel="refuse">
        <p>{{`系统监测到您的账号在${modalmessage.ip}登录,请确认！`}}</p>
    </Modal>

  </div>
 
</template>
<script>
import {emoji} from '@/api/emoji'
const { mapState, mapActions } = Vuex.createNamespacedHelpers('Chat');
export default {
    name:'chat',
    data(){
        return{
            emoji,
            modal1:false,//是否有异地登录
            modalmessage:{
                tips:'',
                ip:'',
                socketid:null
            },
            leftItemactive:0,
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
            },
            socket:null,
            userid:null,
            followuser:[],
            followuserPagination:{
                loading:true,
                pagesize:20,
                page:1
            },
            message:'',/* 发送信息 */
            talkinfo:null,/* 点对点和群聊聊天框默认用户 */
            histroyinfo:{},/* 聊天记录列表 */
        }
    },
    created(){
        this.getfollouser();
        //进行登录连接
        const socket = io(`ws://127.0.0.1:3000/chat/index`);
        var userid=this.$store.state.userinfo.userid;
        this.userid=userid;
        socket.on('connect',function(){
            socket.emit('login',{'userid':userid})
        })
        this.socket=socket;
    },
    mounted(){
        var _self=this;
        document.addEventListener('click',function(e){
           _self.emojiactive=false;
           e.stopPropagation();
        },false);
        this.chathistoryheight=this.$refs.chathistory.clientHeight;
        if(this.$refs.sendlist){
            this.sendlistheight=this.$refs.sendlist.clientHeight;
        }
        window.onresize=function(){
            _self.chathistoryheight=_self.$refs.chathistory.clientHeight;
            if(_self.$refs.sendlist){
                _self.sendlistheight=_self.$refs.sendlist.clientHeight;
            }
        }
        this.socket.on('disconnect',()=>{
            this.$router.push({path:'/login'})
        })

        //是否有异地登录
        this.socket.on('Repeatlogin',msg=>{
            this.$set(this.modalmessage,'tips',msg.msg);
            this.$set(this.modalmessage,'ip',msg.lastip);
            this.$set(this.modalmessage,'socketid',msg.loginsocket)
            this.modal1=true;
        })

        //拒绝异地登录
        this.socket.on('refuselogin',data=>{
            iview.Message.warning('很遗憾,您的登录请求被拒绝了');
            //退出当前登录
            this.$store.state.userinfo=null;
            this.$store.state.token=null;
            this.$router.push({path:'/login'})
        })
    },
    computed: {
        face:function(){
            return this.$store.state.userinfo.avatar
        }
    },
    filters:{
        showTime(item){
            var back='';
            if(item.message.length){
               back= item.message[item.message.length-1].time;
            }
            return back
        }
    },
    methods:{
        /* 允许异地登录 */
        allowLogin(){
            //退出当前登录
            this.$store.state.userinfo=null;
            this.$store.state.token=null;
            this.refuse(true)
            this.$router.push({path:'/login'})
        },
        /* 拒绝异地登录 */
        refuse(isallow=false,socketid=''){
            var _self=this;
            this.socket.emit('refuse',{
                allow:isallow,
                userid:_self.userid,
                socketid:_self.modalmessage.socketid,
                allowip:_self.modalmessage.ip
            })
            this.modal1=false;
        },
        getfollouser(){
            //拉取好友信息
           return this.$store.dispatch('Chat/GETFOLLOW',{userid:this.$store.state.userinfo.userid,pagesize:this.followuserPagination.pagesize,page:this.followuserPagination.page})
            .then(res=>{
                if(res){
                    this.followuser=this.followuser.concat(res.info)
                    this.$set(this.followuserPagination,'page',this.followuserPagination.page++)  
                }
            })
        },
        /* 点击通讯录好友聊天 ,使用type来区分发送的方式  传给后台
            {chat@单对单聊、group@群聊}，
            get_id：群id或者用户id
        */
        getUserChat(get_id,username,type='chat'){
            if(!this.talkinfo){
                this.talkinfo={
                    'talkid':get_id,
                    'talkusername':username,
                    type
                };
            }else{
                this.$set(this.talkinfo,'talkid',get_id);
                this.$set(this.talkinfo,'talkusername',username);
                this.$set(this.talkinfo,'type',type);
            }
            if(!this.histroyinfo[get_id]) this.$set(this.histroyinfo,get_id,{username:username,message:[]}); 
            this.message='';
            this.$nextTick(()=>{
                if(this.$refs.sendlist)this.sendlistheight=this.$refs.sendlist.clientHeight;
            })

            /* 打开聊天记录面板 */
            this.checkedNav(0)
        },
        send(){
            var message=this.message;
            if(this.socket&&this.socket.connected){
                this.socket.removeAllListeners();
                var send=this.userid;
                var data=Object.assign({},this.talkinfo,{message,send,time:this.$functions.getFormatterTime()})
                this.histroyinfo[this.talkinfo['talkid']].message=this.histroyinfo[this.talkinfo['talkid']].message.concat(data)
                this.socket.emit('send',data)
                this.message='';
                this.socket.on('message',msg=>{
                    console.info(msg,'back')
                this.histroyinfo[this.talkinfo['talkid']].message= this.histroyinfo[this.talkinfo['talkid']].message.concat(msg)
                })
            }else{
                iview.Message.warning('很遗憾,服务器连接失败！');
            }
        },
        /* 左侧导航切换 */
        checkedNav(index){
            this.leftItemactive=index;
        }
    }
}
</script>

<style scoped>
@import url("~assets/css/index_home.css");
</style>

