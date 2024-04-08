console.log('vue email list')
const { createApp } = Vue

  createApp({
    data() {
      return {
        emailList:[],
        n:''
      }
    },
    methods:{
        randomEmail(){
            for(let i = 0; i < this.n; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) =>{
                const response = result.data.response;
                this.emailList.push(response)
             })
            }
            this.emailList = []
            
        }
    },
    created(){
        this.randomEmail(this.n)
        console.log(this.emailList)
    }
    
  }).mount('#app')