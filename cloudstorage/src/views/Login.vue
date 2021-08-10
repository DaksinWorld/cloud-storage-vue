<template>
  <div class="middle">
    <form @submit.prevent="onSubmit">
      <div class="head">
        Authorization
      </div>
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button type="submit">Login</button>
      <h3>Don't have an account? Registration</h3>
      <h3>Forgot your password?</h3>
    </form>
  </div>
</template>

<script>
import {onBeforeMount, onMounted, ref} from "vue";
import {useLoginForm} from "../../use/login.form";
import {useRouter} from 'vue-router'

export default {
  setup() {
    let email = ref()
    let password = ref()
    const router = useRouter()

    onBeforeMount(() => {
      document.body.className = 'none'
    })

    onMounted(() => {
      if(localStorage.getItem('jwt-token') && localStorage.getItem('localID')){
        router.push('/')
      }
    })

    return {
      password,
      email,
      ...useLoginForm()
    }
  }
}
</script>

<style lang="scss" scoped>
  .middle {
    width: 768px;
    margin: 50px auto;
    form {
      width: 100%;
      background: white;
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      border: 1px solid black;
      justify-items: center;
      align-items: center;
      padding-bottom: 20px;
      .head {
        height: 50px;
        width: 100%;
        background: #42C787;
        color: white;
        text-align: center;
        padding: 20px 0;
        font-size: 24px;
        font-family: Raleway;
        border-radius: 12px 12px 0 0;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      input {
        width: 90%;
        height: 60px;
        font-size: 20px;
        font-weight: 500;
        font-family: Raleway;
        outline: none;
        border: none;
        background-color: white;
        margin: 20px;
        border-radius: 2px;
        padding: 10px;
        border-bottom: 1px solid black;
      }
      input::placeholder{
        color: black;
      }
      h3 {
        margin: 7px;
        color: #3dd08a;
        font-size: 20px;
        font-weight: 600;
        font-family: Raleway;
      }
      button{
        outline: none;
        background-color: #3dd08a;
        color: white;
        width: 92%;
        border-radius: 5px;
        border: none;
        padding: 15px 10px;
        margin: 20px;
        font-size: 20px ;
        font-weight: 600;
        font-family: Raleway;
      }
    }
  }
</style>