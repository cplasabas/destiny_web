<template>
  <div class="container">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="email" class="form-control"  placeholder="Username" v-model="username">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" placeholder="Password" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary" @click="login()">Login</button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods:{
    async login(){
      try{
        const response =  await AuthService.login({
          username:this.username,
          password:this.password
        })
        this.$store.dispatch('setToken', response.data.token)
      }catch (error){
        this.erorr = error.response.data.error
      }
    }
  }
}
</script>

<style>

</style>
