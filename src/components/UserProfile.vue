<template>
<div class="userprofile">
<h1> {{msg}} </h1>
<form class="container">
            
                <router-link to="/neworder" exact> NEW ORDER </router-link>
       
                <router-link to="/orderhistory" exact> ORDER HISTORY </router-link> 

                <button type="button" v-on:click="logout()"> LOG-OUT </button>
             
</form>
</div>
</template>

<script>
export default {
    name:'userprofile',
    data: function(){
        return{
            msg:"Dear User, Bloom Gift cards welcomes you",
            up:"userName"
        }
    },
    methods:{
        logout(){
             this.$router.push({path:'/login'})
            console.log("User Logging Off")
        }
    }
   
}


</script>

<style scoped>

.router-link-active{
    background-color: lightgrey;
    color: red;
}

li{
    display: inline-block;
    margin: 10px;
    padding: 10px;

}


ul{
    list-style-type: none;

}

.container {
  padding: 16px;
  
}
input[type=text] {
  width: 25%;
  padding: 10px;
  margin: 5px 0 22px 0;
 /* display: inline-block; */
  border: none;
  background: #ebebe0;
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
  margin-left:30%;
  
}
button:hover {
  opacity:1;
}
</style>