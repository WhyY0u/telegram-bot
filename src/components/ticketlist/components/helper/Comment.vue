<style>
 .background_comment {
    box-sizing: border-box;
    border-left: 1px solid rgba(166, 129, 86, 0.3);
    border-right: 1px solid rgba(166, 129, 86, 0.3);
    border-radius: 20px 0px 20px 20px;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    top: 0px;
    left: 50%;
    width: 85%;
    height: auto;
    min-height: 130px;
    transform: translate(-50%);
    padding-bottom: 40px;
    margin-bottom: 25px;
    overflow: hide;

    .answer {
        position: relative;
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 15px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0px;
        left: 15px;
        top: 15px;
    }
    .comment {
        position: relative;
        top: 20px;
        left: 16px;
        color: rgba(255, 255, 255, 0.51);
        font-family: Inter;
        font-size: 14px;
        font-weight: 300;
        line-height: 18px;
        letter-spacing: 0px;
        text-align: left;
        padding-right: 30px;
        word-wrap: break-word;
    }
    .from {
        position: relative;
        color: rgba(166, 129, 86, 0.63);
        font-family: Inter;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: end;
        top: 30px;
        padding-right: 10px;
        
    }
 }
</style>

<script>
  export default {
    props: {
        comment: {
            type: String
        },
        from: {
            type: String,
        }
    }
  }
</script>

<template>
    <div class="background_comment">
        <p class="answer">Ответ от Администрации</p>
        <p class="comment">{{ comment }}</p>
        <p class="from">{{ from }}</p>
       
    </div>
</template>