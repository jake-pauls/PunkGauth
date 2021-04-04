<template>
  <div class="hello">
<div id="header">

    <div id="c1">
      <h1 class="logoTL">Punk Gauth</h1>
    </div>

    <div id="c2">
      <b-nav pills class="nav">
        <div @click="$router.push('marketplace')" id="btn"><b-button>Browse</b-button></div>
        <div id="btn">Marketplace</div>
        <div id="btn">Library</div>
      </b-nav>
    </div>

</div>

  <div class="hero">
    <div class="herotextcontainer">
      <h1 class="herotext" v-bind="mainProps"> <span class="logo">Punk Gauth</span> <span class="description">revolutionizes the music industry with the power of NFTs.</span></h1>
      <div class="buttons">
        <button class="button">Learn More</button>
        <button class="button rightbutton"  @click="$router.push('marketplace')">Start Browsing</button>
      </div>
    </div>
    <div class="gradient"></div>

  <div class="sectionone">
    <div class="sectiononecontent">
      <div class="sectiontitle">A fair pay for your art.</div>
      <b-img v-bind="mainProps" src="./Blocks.svg" fluid alt="Responsive image" class="sectionimage"></b-img>
      <div class="sectiondescription">Punk Gauth enables artists to dynamically establish market share of their work through cryptocurrency authentication based on Ethereum.</div>
    </div>
  </div>

  <div class="sectiontwo">
    <div class="sectiontwocontent">
      <div class="sectiontwotext">
        <div class="sectiontwotitle">A fair pay for your art.</div>
        <div class="sectiontwodescription">NFTs (Non fungible tokens) provide a marketplace for assets such as digital art, game items, concert tickets, real estate, and more.
        <br><br>
        These new tokens allow digital artists to monetize their work by providing proof of ownership, regardless of how many people download and use the images.</div>
      </div>

      <b-img v-bind="mainProps" src="./Gift.svg" fluid alt="Responsive image" class="sectiontwoimage"></b-img>

      
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

/* Header Styling Start */
#header{
    margin-top: 10px;
    overflow:auto;
    position: absolute;
    width: 100%;
    height: 75px;
}
#c1{
   float:left;
   margin-left: 40px;
}
#c2{
    float:right;
    margin-top: 16px;
    margin-right: 40px;
}
.nav{
  font-family: Poppins;
  font-size: 17px;
  font-weight: 600;
  color: #F8F8F8;
}
#btn{
  margin-left: 50px;
  z-index: 4;
}
.logoTL{
width: 134px;
height: 49px;
font-family: Digestive;
font-style: normal;
font-weight: normal;
font-size: 60px;
color: #F8F8F8;
}
/* Header Ends Here */

.hero {
  width: 100vw;
  height:952px;
  background-image: url("../../public/GirlDrum.jpg");
  background-size: cover;
  background-position: 30%;
}
.gradient{
  position: absolute;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  width: 100%;
  height: 536px;
  top: 417px;
  z-index: 0;
}
.herotextcontainer{
  padding: 270px 0;
  text-align: center;
  position: absolute;
  z-index: 1;
}
.herotext{
  color: #FFF964;
  width: 70%;
  margin: 0 auto;
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
.buttons{
  margin-top: 30px;
}
.button{
  font-family: Poppins;
  font-size: 17px;
  font-weight: 400;
  padding: 15px 30px;
  color: #1F1F1F;
  background-color: #41F09C;
  border-radius: 100px;
  border: none;
}
.rightbutton{
  background-color: #FFF964;
  margin-left: 20px;
}
/* Hero Ends Here */

.ellipseyellow{
  z-index: 10;
  position: absolute;
  top: 730px;
  left: -430px;
}
.ellipsered{
  z-index: 10;
  position: absolute;
  top: 730px;
  left: -430px;
}
.starteal{
  z-index: 10;
  position: absolute;
}


.sectionone{
  position: absolute;
  top: 952px;
  width: 100%;
  height: 1000px;
  background: white;
  z-index: 10;
}
.sectiononecontent{
  text-align: center;
  z-index: 11;
}
.sectiontitle{
  font-family: Poppins;
  font-weight: 600;
  font-size: 40px;
  margin-top: 168px;
  margin-bottom: -124px;
}
.sectionimage{
  width: 928px;
  height: 696px;
}
.sectiondescription{
  font-family: Poppins;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  width: 631px;
  margin: 0 auto;
  margin-top: -80px;
}

.sectiontwo{
  width: 100%;
  height: 10px;
  position: absolute;
  top: 2252px;
  height: 800px;
  overflow: hidden;
}
.sectiontwoimage{
  position: absolute;
  top:  0px;
  right: -20%;
  width: 928px;
  height: 696px;
}
.sectiontwotext{
  display: flex;
  flex-direction: column;
  margin-left: 10%;
}
.sectiontwotitle{
  font-family: Poppins;
  font-weight: 600;
  font-size: 40px;
  padding-bottom: 50px;
}
.sectiontwotext{
  font-family: Poppins;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  width: 531px;
}

</style>
