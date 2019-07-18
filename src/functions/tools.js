const commonTool={

  /*全局提示信息*/
  sendMessage:(content='',type=0,closable=false,onClose=function(){},duration=1.5,top=50)=>{
      var config={
        content,
        duration,
        onClose,
        closable,
        top
      }
      /*
      * 消息类型
      * params@{0:info,1:success,2:warning,3:error,4:loading}
      * */
      switch (type){
        case 0:
            iview.Message.info(config);
          break;
        case 1:
            iview.Message.success(config);
          break;
        case 2:
            iview.Message.warning(config);
          break;
        case 3:
            iview.Message.error(config);
          break;
        case 4:
            iview.Message.loading(config);
          break;

      }

  },

  /*销毁全局消息*/
  closeMessage(){
      iview.Message.destroy()
  }


}
export default commonTool
