<script>
import axios from 'axios';
import Logo from '../../assets/kit.png';
export default {
  data() {
    return {
      iin: '',
      focus: false,
      iin_error: false,
      code_error: false,
      visible_pin: false,
      loading: false,
      isRegister: false,
      input_one: false,
      loadingDone: false,
      error_code_match: false,
      code: ['', '', '', ''],
      oldCode: '',
    };
  },
  methods: {
    checkPin() {
      const serverIp = import.meta.env.VITE_SERVER_IP;
      const codeString = this.code.join('');
      if(this.isRegister && !this.input_one) {
        this.input_one = true;
        this.oldCode = codeString;
        this.$refs[`input${0}`].value = '';
        this.$refs[`input${1}`].value = '';
        this.$refs[`input${2}`].value = '';
        this.$refs[`input${3}`].value = '';
        this.code = ['', '', '', ''];

        return;
      }

      if(this.isRegister && this.input_one) {
        if(this.oldCode != codeString) {
        this.error_code_match = true;
        this.input_one = false;
        this.$refs[`input${0}`].value = '';
        this.$refs[`input${1}`].value = '';
        this.$refs[`input${2}`].value = '';
        this.$refs[`input${3}`].value = '';
        this.code = ['', '', '', ''];
        return;
        } 
      }
      if(this.isRegister) {
        axios.post(serverIp + "/api/v2/auth/generateCode", {
           iin: this.iin,
           pin: codeString
       }).then( t => {
        localStorage.setItem('token', t.data.token);
        this.$router.push({name: 'tickets'})
       }).catch(e => this.code_error = true)
      } else {
        axios.post(serverIp + "/api/v2/auth/login/pin", {
           iin: this.iin,
           pinCode: codeString
       }).then(t => {
        localStorage.setItem('token', t.data.token);
        this.$router.push({name: 'tickets'})
       }).catch(e => {
        this.$refs[`input${0}`].value = '';
        this.$refs[`input${1}`].value = '';
        this.$refs[`input${2}`].value = '';
        this.$refs[`input${3}`].value = '';
        this.code = ['', '', '', ''];
        this.code_error = true;
      })
      }
    },
    onBlur() {
     if(this.iin.length <= 0) {
     this.focus = false;
     }
    },
    moveFocus(index, event) {
      this.error_code_match = false;

      const inputValue = event.target.value;
      const filteredInput = inputValue.replace(/[^0-9]/g, '');
      this.code[index] = filteredInput;
  
      if (filteredInput !== inputValue) {
         event.target.value = filteredInput;
      }
      
      if(this.code_error) this.code_error = false;
      
      if (filteredInput && index < this.code.length - 1 ) {
        console.log('Next input:', index + 1);
        this.$refs[`input${index + 1}`].focus(); 
      } 
      else if (!filteredInput && index > 0 ) {
        console.log('Previous input:', index - 1);
        this.$refs[`input${index - 1}`].focus(); 
      }
    },

    checkIIN() {
  const serverIp = import.meta.env.VITE_SERVER_IP;
  this.loading = true;
   axios.post(serverIp + "/api/v2/auth/check/register", {
   iin: this.iin
  }).then(t => {
      this.visible_pin = true;
      this.loadingDone = true;
      this.loading = false;
      this.isRegister = t.data == "No";
      if(this.isRegister)this.input_one = false;
      this.loading = false;
      setTimeout(() => {
          this.loadingDone = false;
        }, 2000);
    }).catch(error => {
      this.iin_error = true;
      this.iin = "";
      this.focus = false;
      this.loadingDone = true;
      this.loading = false;
      setTimeout(() => {
          this.loadingDone = false;
        }, 2000);
    });
    this.isRegister = true;
   

},
    checkIin() {
      this.iin = this.iin.replace(/[^0-9]/g, ''); 
      this.focus = this.iin.length > 0;
      if(this.iin_error) this.iin_error = false;
    },
  },
  mounted() {
    const serverIp = import.meta.env.VITE_SERVER_IP;
    axios.post(serverIp + '/api/v2/ticket/check', {}, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
     }).then(response => {
        console.log(response)
        this.$router.push({name: 'tickets'})
      }).catch(c => localStorage.removeItem('item'));
  }
};
</script>

<template>
  <div class="cont">
     <div class="input" :class="{'loading': loading,
                                 'loading_done': loadingDone
     }
      ">
        <p class="write_iin">{{loading ? "Минутку..." : (visible_pin ? (isRegister ? (!input_one ? "Придумайте PIN" : "Подтвердите PIN") : "Введите PIN") : "Введите ИИН")}}</p>
        <p class="to_next">{{loading ? "Отправляем запрос" : "Чтобы продолжить" }}</p>
        <input type="numeric" :class="{'iin_input_hide': visible_pin || loading}" v-model="iin" class="input_iin" name="iin" oninput="this.value=this.value.replace(/[^0-9]/g, '')" :maxlength="12"  @input="checkIin" @blur="onBlur"/>
        <p :class="{
      'iin_input_text_focus': focus,
      'iin_input_text_blur': !focus,
      'iin_input_hide': visible_pin || loading,
       }"
       class="iin_input_text">ИИН</p>


       <div class="div-container">
        <input
        type="numeric"
        class="code_input" 
        :class="{'code_invisible': !visible_pin || loading}"  
        :maxlength="1" 
        v-model="code[0]" 
        @input="moveFocus(0, $event)"
        ref="input0"
    />
    <input 
      class="code_input" 
      type="numeric"
      :class="{'code_invisible': !visible_pin || loading}" 
      :maxlength="1" 
      v-model="code[1]" 
      @input="moveFocus(1, $event)"
      ref="input1"
    />
    <input 
      class="code_input" 
      type="numeric"
      :class="{'code_invisible_2': !visible_pin || loading}" 
      :maxlength="1" 
      v-model="code[2]" 
      @input="moveFocus(2, $event)"
      ref="input2"
    />
    <input 
      class="code_input" 
      type="numeric"
      :class="{'code_invisible_2': !visible_pin || loading}" 
      :maxlength="1" 
      v-model="code[3]" 
      @input="moveFocus(3, $event)"
      ref="input3"
    />
      </div>

      <div v-if="loading" class="loading_1"></div>
      <div v-if="loading" class="loading_2"></div>
      <div v-if="loading" class="loading_3"></div>
      <div v-if="loading" class="loading_4"></div>
       
      <button @click="!visible_pin ? checkIIN() : checkPin()" :disabled="(iin.length < 12 && !visible_pin) || (visible_pin && (code[0].length == 0 || code[1].length == 0 || code[2].length == 0 || code[3].length == 0))" 
      :class="{'button-active': (iin.length >= 12 && !visible_pin) || (visible_pin && (code[0].length > 0 && code[1].length > 0 && code[2].length > 0 && code[3].length > 0)),
               'button-hide': loading,
               'button-visible': loadingDone,
      }
      , {'error-color': iin_error || code_error || error_code_match}" class="next">{{error_code_match ? "PIN Не Совпадает" : code_error ? "Неверный PIN" : iin_error ? "Неверный ИИН" : "Продолжить"}}</button>
     </div>
     
  </div>
</template>

<style scoped lang="scss">

@keyframes loading {
  0% {
    width: 330px;
    top: 10%;
    height: 270px;
  }
  50% {
    width: 350px;
    top: 8%;
    height: 290px;
  }
  100% {
    width: 260px;
    height: 230px;
    top: 15%;
  }
}

@keyframes loading_anim {
  0% {
    height: 15px;
    top: 115px;
    opacity: 1;
  }
  50% {
    height: 40px;
    top: 95px;
  }
  100% {
    height: 15px;
    top: 115px;
  }
}

@keyframes loading_done {
  0% {
    width: 260px;
    height: 230px;
    top: 15%;
  }
  100% {
    width: 330px;
    top: 10%;
    height: 270px;
  }
}

@keyframes button_visible {
  0% {
    transform: translate(-50%,70px);
  }
  50% {
    transform: translate(-50%,-20px);
  }
  100% {
    transform: translate(-50%,0px);

  }
}

@keyframes button-hide {
  0% {
    transform: translate(-50%,0px);
  }
  50% {
    transform: translate(-50%,-20px);
  }
  100% {
    transform: translate(-50%,70px);

  }
}
.cont {
    width: 100%;
    height: 100%;

    .input {
        position: relative;
        width: 330px;
        left: 50%;
        transform: translate(-50%);
        height: 270px;
        top: 10%;
        box-sizing: border-box;
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 29px;
     

        box-shadow: 0px 10px 4px 0px rgba(0, 0, 0, 0.5);
        background: rgba(0, 0, 0, 0.5);
        overflow: hidden;

        @supports (--css: variables) and (backdrop-filter: blur(1px)) {
              backdrop-filter: blur(10px); 
        }

        @supports (-moz-backdrop-filter: blur(1px)) {
            -moz-backdrop-filter: blur(44px)
        }
       

        .write_iin {
            position: relative;
            color: rgb(255, 255, 255);
            font-family: Inter;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0px;
            text-align: center;
            top: 18px;
        }
        .to_next {
            position: relative;
            text-align: center;
            color: rgba(255, 255, 255, 0.34);
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0px;
            top: 18px;
          }
        .input_iin {
            position: relative;
            box-sizing: border-box;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            width: 90%;
            left: 5%;
            height: 48px;
            backdrop-filter: blur(12px);
            background: rgba(0, 0, 0, 0.45);
            top: 45px;
            color: rgba(255, 255, 255, 0.47);
            font-size: 19px;
            padding: 5px;
            font-family: Inter;
            font-weight: 400;
            transition: transform 0.35s, opacity 0.35s ease;
            &:focus {
                outline: none;
                
            }
        }
        .iin_input_text {
          position: absolute;
          font-family: Inter;
          font-weight: 400;
          transition:  transform 0.35s, opacity 0.35s, top 0.3s, left 0.3s, color 0.3s, font-size 0.3s ease;
          user-select: none;
        }
        .iin_input_text_blur {
          position: absolute;
          top: 100px;
          left: 30px;
          color: rgba(255, 255, 255, 0.2);
          font-size: 16px;
        }
        .iin_input_text_focus {
          position: absolute;
          top: 68px;
          left: 22px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.1);
        }
        .next {
            cursor: pointer;
            position: absolute;
            box-sizing: border-box;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            background: rgba(0, 0, 0, 0.24);
            top: 175px;
            font-size: 16px;
            width: 180px;
            height: 48px;
            left: 50%;
            transform: translateX(-50%);
            color: rgb(255, 255, 255);
            font-family: Inter;
            transition: background-color 0.5s, box-shadow 0.5s ease;
            font-weight: 600;
        }
        .button-active {
            background-color: rgb(0, 69, 166);
            box-shadow: 0px 0px 15px rgba(0, 69, 166, 1);
        }
        .button-hide {
          animation: button-hide 0.5s forwards ease;
        }
        .button-visible {
          animation: button_visible 0.5s forwards ease;
        }
        .error-color {
          background-color: rgb(168, 8, 8);
          box-shadow: 0px 0px 15px rgb(168, 8, 8);
        }

        .loading_1 {
          position: absolute;
          border-radius: 3px;
          box-shadow: 0px 0px 9px 0px rgb(166, 129, 86);
          background: rgb(166, 129, 86);
          width: 10px;
          opacity: 0;
          animation: loading_anim 0.75s 0.5s infinite ease;
          left: 70px;
          height: 15px;
          top: 115px;
        }
        .loading_2 {
          position: absolute;
          border-radius: 3px;
          box-shadow: 0px 0px 9px 0px rgb(166, 129, 86);
          background: rgb(166, 129, 86);
          width: 10px;
          opacity: 0;
          animation: loading_anim 0.75s 0.8s infinite ease;
          left: 100px;
          height: 15px;
          top: 115px;
        }
        .loading_3 {
          position: absolute;
          border-radius: 3px;
          box-shadow: 0px 0px 9px 0px rgb(166, 129, 86);
          background: rgb(166, 129, 86);
          width: 10px;
          opacity: 0;
          animation: loading_anim 0.75s 1.1s infinite ease;
          left: 130px;
          height: 15px;
          top: 115px;
        }
        .loading_4 {
          position: absolute;
          border-radius: 3px;
          box-shadow: 0px 0px 9px 0px rgb(166, 129, 86);
          background: rgb(166, 129, 86);
          width: 10px;
          transition: opacity 0.5s ease;
          opacity: 0;
          animation: loading_anim 0.75s 1.4s infinite ease;
          left: 160px;
          height: 15px;
          top: 115px;
        }

       
        .iin_input_hide {
          opacity: 0;
          transform: translateY(10px);
          user-select: none;
          pointer-events: none; 
        }
        .div-container {
          position: absolute;
          display: flex;
          left: 25px;
          gap: 20px;
          top: 40px;

          .code_input {
            position: relative;
            box-sizing: border-box;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            backdrop-filter: blur(12px);
            background: rgba(0, 0, 0, 0.45);
            top: 45px;
            color: rgba(255, 255, 255, 0.47);
            font-size: 23px;
            padding: 17px;
            font-family: Inter;
            font-weight: 700;
            height: 50px;
            width: 50px;
            transition: transform 0.5s ease;
            &:focus {
              outline: none;
            }
          }
        .code_invisible {
          transform: translateX(-190px);
        }
        .code_invisible_2 {
          transform: translateX(190px);
        }
     }
        
    }

    .loading {
      animation: loading 0.5s forwards ease;
    }
    .loading_done {
        animation: loading_done 0.5s forwards ease;
    }
}
</style>
