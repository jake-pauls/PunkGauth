<template>
  <div class="hello">
     <b-img v-bind="mainProps" src="./GirlDrum.jpg" fluid alt="Responsive image" class="homeImg"></b-img>
     <h1 class="logoTL">Punk Gauth</h1>
     <b-nav pills class="nav">
       <b-nav-item id="btn2">Marketplace</b-nav-item>
       <b-nav-item id="btn3">Library</b-nav-item>
       </b-nav>
       <div style="position: relative">
       <div class="d-flex justify-content-center">
         <h1 class="header" v-bind="mainProps"> <span class="logo">Punk Gauth</span> <span class="description">revolutionizes the music industry with the power of NFTs.</span></h1>
         <div style="position: absolute" class="buttons">
      <button class="btn btn-primary" @click="$router.push('marketplace')">Learn More</button>
      <button>Start Browsing</button>
      </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
      }
    }
  },
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logoTL{
  position: absolute;
width: 134px;
height: 49px;
left: 40px;
top: 30px;
font-family: Digestive;
font-style: normal;
font-weight: normal;
font-size: 60px;
line-height: 49px;
/* identical to box height */
/* BG White */
color: #F8F8F8;
}
.btn{
  top:500px;
}
.nav{
  /* Navigation Bar */
/* Auto Layout */
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px;
position: absolute;
width: 500px;
height: 44px;
left: 900px;
top: 30px;
}
.navText{
  font-family: "Poppins";
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 81%;
/* identical to box height, or 14px */
text-align: center;
/* Black */
color: #1F1F1F;
  
}
.header{
  /* Main Header Introduction */
position: absolute;
width: 55%;
margin-top: 20%;
line-height: 125%;
text-align: center;
color: #FFF964;
}
.logo {
font-family: "Digestive";
font-style: normal;
font-weight: 400;
font-size: 90px;
line-height: 112.5px;
}
.description{
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 70px; 
  line-height: 87.5px; 
}
button{
  justify-content: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.homeImg {
   transform: scaleX(-1);
   position: absolute;
width: 100%;
top: -720px;
border-radius: 0px;
}
.buttons {
  margin-top: 50%;
  margin-left: 50%;
}
</style>