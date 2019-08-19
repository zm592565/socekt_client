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
                <Tabs :animated="false">
                    <TabPane label="登录" class="pt_16">
                        <Form ref="formInline" :model="formInline" :rules="ruleInline">
                            <FormItem prop="user">
                                <Input size="large" type="text" v-model="formInline.user" placeholder="Username">
                                    <i class="iconfont text_999 icon-wode1" slot="prepend"></i>
                                </Input>
                            </FormItem>
                            <FormItem prop="password">
                                <Input type="password" size="large" v-model="formInline.password" placeholder="Password">
                                    <i class="iconfont text_999 icon-jiesuo" slot="prepend"></i>
                                </Input>
                            </FormItem>
                            <FormItem prop="checkcode">
                                <Row>
                                    <Col span="16">
                                        <Input size="large" type="text" v-model="formInline.checkcode" placeholder="Code">
                                            <i class="iconfont text_999 icon-yanzhengma" slot="prepend"></i>
                                        </Input>
                                    </Col>
                                    <Col span="6" offset="1" v-show="codehtml">
                                        <div @click="getcode" class="checkcode_box" v-html="codehtml"></div>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem>
                                <Button class="mb_16" long size='large' type="primary" @click="login('formInline')">登录</Button>
                                <Button long size='large'>重置</Button>
                            </FormItem>
                        </Form>
                    </TabPane>
                    <TabPane label="注册">
                        
                    </TabPane>
                </Tabs>
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
            codehtml:null,
            formInline: {
                user: '',
                password: '',
                checkcode:'',
            },
            ruleInline: {
                user: [
                    { required: true, message: '请输入您的账号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入对应的密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                ],
                checkcode: [
                    { required: true, message: '输入验证码', trigger: 'blur' },
                    { type: 'string', min: 4, message: 'The code length cannot be less than 4 bits', trigger: 'blur' }
                ]
            }
        }
    },
    mounted(){
        this.getcode()
    },
    methods: {
        getcode(){
            this.$store.dispatch('Common/GETCHECK_CODE',{width:100,height:36})
            .then(res=>{
                this.codehtml=res;
            })
        },
        login(name){
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$store.dispatch('Common/TOLOGIN',{username:this.formInline.user,password:this.formInline.password,code:this.formInline.checkcode})
                    .then(res=>{
                        if(res){
                            iview.Message.success('登录成功');
                        }
                        this.$router.push({name:'home'})
                    })
                } else {
                    iview.Message.error('输入信息有误，请重新输入!');
                }
            })
            
        },
    } 
}
</script>

<style scope>
@import url('~assets/css/login.css');
</style>

