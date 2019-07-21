<template>
    <div class="uchart-login">
        <div class="uchat-content">
            <Carousel v-model="value1" class='swiper_box' arrow='never' autoplay loop>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="~assets/img/login_banner.jpg" alt="">
                    </div>
                </CarouselItem>
            </Carousel>
            

        </div>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
            value1: 0
        }
    },
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

