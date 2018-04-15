import Api from '@/services/Api'

export default{
    register(body){
      return Api().post('register',body)
    },
    login(body){
      return Api().post('login',body)
    }
}
