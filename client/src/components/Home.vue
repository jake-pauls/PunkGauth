<template>
  <div class="hello">
     <b-img v-bind="mainProps" src="./GirlDrum.jpg" fluid alt="Responsive image" class="homeImg"></b-img>
     <h1 class="logoTL">Punk Gauth</h1>
     <h1 class="header"> <span class="logo">Punk Gauth</span> <span class="description">revolutionizes the music industry with the power of NFTs.</span></h1>
     <b-nav pills class="nav">
       <b-nav-item id="btn1">Browse</b-nav-item>
       <b-nav-item id="btn2">Marketplace</b-nav-item>
       <b-nav-item id="btn3">Library</b-nav-item>
       <b-nav-item active><span id="navText">Sign in</span></b-nav-item>
       <div vs>
      <button class="btn btn-primary">Learn More</button>
      <button>Start Browsing</button>
       </div>
     </b-nav>

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
width: 931px;
height: 278px;
left: 255px;
top: 298px;
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
   top: -524px;
}
</style>
