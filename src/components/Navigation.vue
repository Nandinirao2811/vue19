<template>

    <div class="topnav">
    <a class="active" > <img alt="B logo" src="../assets/Picture2.png"> </a>
   
 <a>  <i class="fa fa-home"><router-link to="/" exact>BLOOM GIFT CARDS </router-link> </i>  </a>

<a>  <router-link to="/register" exact>REGISTER</router-link> </a>
<a>  <router-link to="/login" exact>LOG-IN</router-link> </a>
<a>  <router-link to="/admin" exact>ADMIN</router-link> </a>
        <!-- <ul>
            <li>
                <router-link to="/" exact>Home </router-link>
                <br>
                <router-link to="/register" exact>Register</router-link>
              
                <router-link to="/login" exact>Log In</router-link>
              
                 <router-link to="/admin" exact> Admin</router-link>
                 
                
        
            </li>
        </ul> -->
    </div>
</template>

<script>
export default {
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
.topnav {
  background-color:#009999 ;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: black;
  text-align: center;
  padding: 10px 12px;
  text-decoration: none;
  font-size: 15px;
 
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color:#009999 ;
 color: white;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #009999;
  color: white;
}



</style>