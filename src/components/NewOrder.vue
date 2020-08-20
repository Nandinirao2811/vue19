<template>
<div class="neworder">
<span>
<h2> {{msg}} </h2>
</span>
<!-- <div>
    <label :for="id"> setting {{id}}</label>
    <input :id="id" type="text" />
  </div> -->
<form class="container">
<label> <b>Date : </b> </label> 
<input type="date" v-model="neworder.date" >
<br>
<label> <b> Receipent First Name : </b> </label> 
<input type="text"  v-model.lazy="neworder.recFN">
<br>
<label> <b> Receipent Last Name : </b> </label> 
<input type="text" v-model.lazy="neworder.recLN">
<br>
<label> <b> Gift Card Value (Rs) : </b> </label> 
<input type="number" v-model.lazy="neworder.gcv">
<br>
<label> <b> Commission Amount : </b> </label> 
<input type="number" @click="TotalComm" v-model.lazy="neworder.comAmt">
<br>
<label> <b> Receipent Mobile No : </b> </label> 
<input type="number" v-model.lazy="neworder.recMob">
<br>
<label> <b> Receipent Address : </b> </label> 
<input type="text" v-model.lazy="neworder.addr">
<br>

<button type="button" v-on:click="PlaceOrder()"> Place Order </button>
<br>
<button type="button" v-on:click="previous()"> Previous </button>  
<br>
</form>
</div>

</template>

<script>
export default {
    name:'neworder',
    data:function(){
        return{
            msg:"Place Order Here",
            id:null,
            neworder:{
                "date": "",
                "recFN":"",
                "recLN":"",
                "gcv":"",
                "comAmt":"",
                "recMob":"",
                "addr":""
            },
            error:[]
        }
    },

    methods:{
        PlaceOrder: function(){
           let valPlaceOrder = this.ValidatePO()
      if(localStorage){
          localStorage.setItem("neworder"+this.neworder.id, JSON.stringify(this.neworder))
      }
      if(valPlaceOrder){
          this.$http.post('http://localhost:3000/neworder', this.neworder)
          .then(res=>{
              console.log(res)
          },err=>{
              console.log(err)
          })
      }
    },
    ValidatePO: function(){
       console.log("Placing new Order")
       if(this.neworder.id == 0){
       this.error.push("Id must be non zero")
       return false
     }

     return true
    },
     previous:function(){
          this.$router.push({path:'/userprofile'})
          console.log("previous page")
      },
      TotalComm(){
          
          this.neworder.comAmt = this.neworder.gcv * 5 / 100
      }

    }
}
</script>
<style scoped>

input[type=text] , input[type=date],input[type=number]{
  width: 25%;
  padding: 10px;
  margin: 5px 0 22px 0;
 /* display: inline-block; */
  border: none;
  background: #33cccc;
   float:center;
  align-content: left;
}

button {
  background-color:rgb(90, 176, 216);
  color: white;
  padding: 10px;
  margin: 5px 0 22px 0;
  border: none;
  cursor: pointer;
  width: 18%;
  opacity: 0.9;
  
}
button:hover {
  opacity:1;
}
.container {
  padding: 16px;
  
}

.mandatory{color:#660000;}

</style>