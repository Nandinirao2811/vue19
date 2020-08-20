<template>
<div class="adminprofile">
<h1> {{msg}} </h1>
<form class="container">
            
                <router-link to="/neworder" exact> UNDELIVERED ORDERS </router-link>
       <br>
                <router-link to="/orderhistory" exact> UPDATE ORDER STATUS</router-link>
  <br>
                <router-link to="/commissionreport" exact> COMMISSION REPORT </router-link>
  <br>
                <button type="button" v-on:click="logout()">ADMIN LOG-OUT</button>
             
</form>
</div>
</template>
<script>

export default {
    name:'adminprofile',
    data: function(){
        return{
            msg:"Hi Admin, Bloom Gift cards welcomes you",
            up:"userName"
        }
    },
    methods:{
        logout(){
             this.$router.push({path:'/admin'})
            console.log("Admin Logging Off")
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
  
  
}
button:hover {
  opacity:1;
}
</style>