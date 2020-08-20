<template>
<div class="OrderHistory">

 <h1> {{msg}} </h1>
<!-- <button v-on:click="GetOrdHistory">Get Order History Data</button> -->
    <!-- <div>{{neworder}}</div> -->
   
    <form class="container">
   <div >
   <table id="history">
   <thead>
   <tr>
            <th> Order Id</th>
             <th> Recipient Name </th>
             <th> Ordered Date </th>
             <th> Gift Card Value (Rs) </th>
             <th> Commission Amount (5%) </th> 
             <th> Delivery Status </th>  
   </tr>
   </thead>
   <tbody v-for="getorders in neworder" :key="getorders.id">
   <tr>
        <td> {{getorders.id}} </td>
          <td> {{getorders.recFN}} {{getorders.recLN}} </td>
            <td> {{getorders.date}} </td>
              <td> INR {{getorders.gcv}} </td>
                <td> INR {{getorders.comAmt}} </td>
                
   </tr>
   </tbody>
   
   </table>
      <button type="button" v-on:click="previous()"> Previous </button>  
<br>
        </div>
        
        </form>
</div>
</template>
<script>

export default {
    name:'orderhistory',
    data: function(){
       return{
           msg:'Here is your Order historys',
           neworder:[]
       }
    },
    methods:{
        GetOrdHistory: function(){
            this.$http.get('http://localhost:3000/neworder')
            .then(res=> {
                console.log(res.data)
                this.neworder = res.data
            }, err=> {
                console.log(err)
            })
        },
         previous:function(){
          this.$router.push({path:'/userprofile'})
          console.log("previous page")
      }
      

    },
    
    created:function(){
    this.GetOrdHistory()
  }
    
  
}
</script>

<style scoped>
#history {

  border-collapse: collapse;
  width: 100%;
}

#history td, #history th {
  border: 1px solid #ddd;
  padding: 8px;
}

#history tr:nth-child(even){background-color: #f2f2f2;}

#history tr:hover {background-color: #ddd;}

#history th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #666699;
  color: white;
}
.container {
  padding: 16px;
  
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