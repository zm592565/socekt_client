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
            <div class="uchat-right-box">
                <ul class="uchat-right-header-tab">
                    <li v-for="(item,index) in headerTab" :key="index" @click="active=index" :class="{'active':active==index}">{{item}}</li>
                </ul>
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                    <FormItem prop="user">
                        <Input type="text" v-model="formTop.input1" placeholder="Username">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
            value1: 0,
            active:0,
            headerTab:['密码登录','短信登录'],
            formTop: {
                    input1: '',
                    input2: '',
                    input3: ''
                }
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

