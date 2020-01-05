<template>
    <v-row no-gutters>
      <v-col cols="6" >
        <v-card height="100%" width="100%" tile color="#000000" >
          <div class="rw-container">
    <div class="rw-box">
        <div class="rw-title">
            <span class="rw-block"></span>
            <h1>RW Zone<span></span></h1>
        </div>
        <div class="rw-role">
            <div class="rw-block"></div>
            <p>Connect your future</p>
        </div>
    </div>
</div>
   <v-row  align="center"
    justify="center">
      <v-icon color=white>mdi-github-circle</v-icon>
    <div class="mx-2"></div>
    <v-icon color="primary">mdi-qqchat</v-icon>
    <div class="mx-2"></div>
    <v-icon color="indigo">mdi-wechat</v-icon>
    <div class="mx-2"></div>
  </v-row>
          </v-card>
      </v-col>
<v-col cols="6">
             <v-card tile  height="100%" width="100%" no-gutters>
                    <v-container
        class="fill-height"
        fluid
      >
       <v-row
          align="center"
          justify="center"
        >
               <v-col cols="8" offset-md='2'>
                <v-toolbar-title class="display-1 text-center font-weight-black mb-5">
                    <span class="indigo--text">RW </span>
                    <span class="pink--text">Zone</span>
                    <span class="orange--text">.</span>
             </v-toolbar-title>
               <p class="overline text-center">enjoy coding enjoy job</p>
                 <v-divider></v-divider>
               <v-text-field
                  v-model="userName"
                  label="用户名"
                  placeholder="请输入用户名"
                  prepend-icon="face"
                  dense
                  class="mt-10 mb-3"
                ></v-text-field>
                <v-text-field
                  prepend-icon="lock"
                  dense
                  v-model="password"
                  label="密码"
                  placeholder="请输入账号密码"
                  required
                  class="mb-3"
                ></v-text-field>

               <div class="text-center mb-8">
                <v-btn :loading="loading"  color="black" dark @click="checkLogin()">登陆<v-icon right color="primary">mdi-send-check</v-icon>
</v-btn>

              </div>
                <v-btn
                color="dark"
                to="/auth/register"
                text
                class="float-left"
                outlined
              >注册账号</v-btn>
                 <v-spacer></v-spacer>
              <v-btn
                to="/auth/register"
                text
                class="float-right"
                outlined
              >忘记密码？</v-btn>
         </v-col>

             </v-row>
</v-container>
  </v-card>

          </v-col>
    </v-row>
</template>

<script>
export default {
  data() {
    return {
      materialImage: require("@/assets/rwplus.png"),
      userName: "",
      password: "",
      loading: false
    };
  },
  methods: {
    checkLogin() {
      this.loading = true;
      this.$store
        .dispatch("auth/login", {
          name: this.userName,
          password: this.password
        })
        .then(response => {
          console.log(response.data.data.token)
          if (response.data.data.token !== undefined) {
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem("user", JSON.stringify(response.data));
            // this.$store.commit("auth/SET_USER", response.data);
            this.$store.commit("auth/SET_USER", this.userName);
            this.$store.commit("auth/SET_LOGGED", true);
          }else{
            console.log("无法查询到用户")
            this.$store.commit("snackbar/setSnackbar", {
              show: true,
              message: "请输入正确的用户名！",
              color: "black",
              top: true
            });
          }
          setTimeout(() => {
            this.loading = false;
            this.$router.push("/about");
          }, 1000);
        })
        .catch(error => {
          this.loading = false;
          if (error.response.status === 401) {
            this.$store.commit("snackbar/setSnackbar", {
              show: true,
              message: this.$t("auth.wrongCredentials"),
              color: "error",
              top: true
            });
          } else if (error.response.status === 404) {
            this.$store.commit("snackbar/setSnackbar", {
              show: true,
              message: "页面未找到",
              color: "error",
              top: true
            });
          } else {
            this.$store.commit("snackbar/setSnackbar", {
              show: true,
              message: "服务器异常请稍后尝试",
              color: "error",
              top: true
            });
          }
        });
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap');

.rw-container {
  width: 100%;
  height: 90%;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;

  .rw-box {
    width: 250px;
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .rw-title {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 50px;

      .rw-block {
        width: 0%;
        height: inherit;
        background: #ffb510;
        position: absolute;
        animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        display: flex;
      }

      h1 {
        font-family: 'Poppins';
        color: #fff;
        font-size: 32px;
        -webkit-animation: mainFadeIn 2s forwards;
        -o-animation: mainFadeIn 2s forwards;
        animation: mainFadeIn 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: relative;

        span {
          width:0px;
          height: 0px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;

          background: #ffb510;
          -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;
          animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
          animation-delay: 2s;
          margin-left: 5px;
          margin-top: -10px;
          position: absolute;
          bottom: 13px;
          right: -12px;

        }
      }
    }

    .rw-role {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      margin-top: -10px;

      .rw-block {
        width: 0%;
        height: inherit;
        background: #e91e63;
        position: absolute;
        animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        animation-delay: 2s;
        display: flex;
      }

      p {
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
         font-weight: 400;
        font-family: 'Lato';
        color: #ffffff;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 5px;
      }
    }
  }
}





@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #e9d856;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }
   65% {
      width: 7px;
    height: 7px;
      bottom: 0px;
      width: 15px
   }
   80% {
      width: 10px;
    height: 10px;
      bottom: 20px
   }
  100% {
    width: 7px;
    height: 7px;
    background: #e9d856;
    border: 0px solid #222;
    bottom: 13px;

  }
}

@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}


@keyframes top {
  0% {
    opacity: 0;
     bottom: -80px
  }
  100% {
    opacity: 1;
     bottom: 0px

  }
}

@keyframes icon {
  0% {
    opacity: 0;
     transform: scale(0.0);
  }
   50% {
      opacity: 1;
     transform: scale(1.3) rotate(-02deg);
   }
  100% {
    opacity: 1;
     bottom: 0px;
  }
}@import url('https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap');

.rw-container {
  width: 100%;
  height: 90%;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;

  .rw-box {
    width: 250px;
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .rw-title {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 50px;

      .rw-block {
        width: 0%;
        height: inherit;
        background: #ffb510;
        position: absolute;
        animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        display: flex;
      }

      h1 {
        font-family: 'Poppins';
        color: #fff;
        font-size: 32px;
        -webkit-animation: mainFadeIn 2s forwards;
        -o-animation: mainFadeIn 2s forwards;
        animation: mainFadeIn 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: relative;

        span {
          width:0px;
          height: 0px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;

          background: #ffb510;
          -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;
          animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
          animation-delay: 2s;
          margin-left: 5px;
          margin-top: -10px;
          position: absolute;
          bottom: 13px;
          right: -12px;

        }
      }
    }

    .rw-role {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      margin-top: -10px;

      .rw-block {
        width: 0%;
        height: inherit;
        background: #e91e63;
        position: absolute;
        animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        animation-delay: 2s;
        display: flex;
      }

      p {
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
         font-weight: 400;
        font-family: 'Lato';
        color: #ffffff;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 5px;
      }
    }
  }
}





@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #e9d856;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }
   65% {
      width: 7px;
    height: 7px;
      bottom: 0px;
      width: 15px
   }
   80% {
      width: 10px;
    height: 10px;
      bottom: 20px
   }
  100% {
    width: 7px;
    height: 7px;
    background: #e9d856;
    border: 0px solid #222;
    bottom: 13px;

  }
}

@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}


@keyframes top {
  0% {
    opacity: 0;
     bottom: -80px
  }
  100% {
    opacity: 1;
     bottom: 0px

  }
}

@keyframes icon {
  0% {
    opacity: 0;
     transform: scale(0.0);
  }
   50% {
      opacity: 1;
     transform: scale(1.3) rotate(-02deg);
   }
  100% {
    opacity: 1;
     bottom: 0px;
  }
}
</style>