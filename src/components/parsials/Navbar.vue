<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#"><img src="../../assets/logo.png" style="height: 40px;" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="mr-auto navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Products</a>
        </li>
         <li class="nav-item active">
          <a class="nav-link" href="#">Contact</a>
        </li>
        
      </ul>
      <ul class="navbar-right">
        <li v-on:click="hoverCart = !hoverCart"><a href="#" id="cart"><i class="fa fa-shopping-cart"></i> Cart <span class="badge">{{products.length}}</span></a></li>
      </ul> <!--end navbar-right -->
      <form class="my-2 form-inline my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" @keyup="Realsearch" v-model="keyword">
        <button class="my-2 btn btn-outline-success my-sm-0" type="submit" @click.prevent="Realsearch">Search</button>
      </form>
    </div>
  </nav>
  <div v-if="hoverCart" class="container">
    <div class="shopping-cart">
    <div class="shopping-cart-header">
      <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">{{products.length}}</span>
      <div class="shopping-cart-total">
        <span class="lighter-text">Total:</span>
        <span class="main-color-text">${{Totalprice}}</span>
      </div>
    </div> <!--end shopping-cart-header -->
    
    <ul class="shopping-cart-items">
      <li class="clearfix" v-for="(product, index) in products" :key="index">
        <img :src="product.photo" alt="item1" style="height:30px; weight:30px;"/>
        <button type="button" class="remove-btn" @click="removeItem(index)">X</button>
        <span class="item-name">{{ product.name }}</span>
        <span class="item-price">${{ product.TotalPrice }}</span>
        <span class="item-quantity">Quantity: 01</span>
      </li>
    </ul>

    <a href="#" class="button">Checkout</a>
  </div> <!--end shopping-cart -->
  </div>
</template>

<script>

export default {
  data(){
    return{
      keyword: '',
      hoverCart: false
    }
  },
  computed:{
    products(){
      return this.$store.getters.getCart
    },

    Totalprice(){
      var total = 0
      this.products.forEach(product => {
        total += parseFloat(product.TotalPrice)
      });
      return total
    }
  },

  methods: {
    removeItem(index){
      this.$store.commit('revomeCart', index)
    },

    Realsearch(){
      this.$store.dispatch('productSearch', +this.keyword)
    }

  
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);
*, *:before, *:after {
  box-sizing: border-box;
}
.remove-btn{
    float: right;
    height: 27px;
    width: 20px;
    padding: 0;
    border: 0px solid;
    background: #22e2d0;
}
.lighter-text {
  color: #ABB0BE;
}
.main-color-text {
  color: #6394F8;
}
nav {
  padding: 20px 0 40px 0;
  background: #F8F8F8;
  font-size: 16px;
}
nav .navbar-left {
  float: left;
}
nav .navbar-right {
  float: right;
  margin-right: 45px;
}
nav ul li {
  display: inline;
  padding-left: 20px;
}
nav ul li a {
  color: #fff;
  text-decoration: none;
}
nav ul li a:hover {
  color: rgb(255, 255, 255);
}
.container {
  margin: auto;
  width: 80%;
}
.badge {
  background-color: #6394F8;
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: 3px 7px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
}
.shopping-cart {
    background: #ddd;
    width: 320px;
    border-radius: 3px;
    padding: 20px;
    position: absolute;
    z-index: 999;
    margin-left: 42%;
}
.shopping-cart .shopping-cart-header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}
.shopping-cart .shopping-cart-header .shopping-cart-total {
  float: right;
}
.shopping-cart .shopping-cart-items {
  padding-top: 20px;
}
.shopping-cart .shopping-cart-items li {
  margin-bottom: 18px;
}
.shopping-cart .shopping-cart-items img {
  float: left;
  margin-right: 12px;
}
.shopping-cart .shopping-cart-items .item-name {
  display: block;
  padding-top: 10px;
  font-size: 16px;
}
.shopping-cart .shopping-cart-items .item-price {
  color: #6394F8;
  margin-right: 8px;
}
.shopping-cart .shopping-cart-items .item-quantity {
  color: #ABB0BE;
}
.shopping-cart:after {
  bottom: 100%;
  left: 89%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: white;
  border-width: 8px;
  margin-left: -8px;
}
.cart-icon {
  color: #515783;
  font-size: 24px;
  margin-right: 7px;
  float: left;
}
.button {
  background: #6394F8;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;
}
.button:hover {
  background: #729ef9;
}
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

</style>