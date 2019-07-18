<template>
    <div class="uchart-login">
        <div class="uchat-content">
            <button @click="send">发射</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'login',
    methods: {
        send(){
            var chat = io.connect('http://127.0.0.1:3000/chat');
            chat.on('connect',function(socket){
                chat.emit('send','aa'); 
                chat.on('message',data=>{
                    console.info(data)
                })
                chat.on('disconnect', function(){ 
                    alert('用户掉线1111')
                });
            })
            // chat.on('disconnect', function () {
            //     alert('用户掉线')
            // });
        }
    },
}
</script>

<style scope>
@import url('~assets/css/login.css');
</style>

