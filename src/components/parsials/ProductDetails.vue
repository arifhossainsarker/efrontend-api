<template>
 <div class="single-product-sec">
      <div class="container">
        <div class="row">
            <div class="col-md-6">
                <img :src="singleProduct.photo" class="card-img-top" alt="Product">
                <!-- {{product}} -->
            </div>
            <div class="col-md-6">
                <h2>{{singleProduct.name}}</h2>
                <h6>Price: ${{singleProduct.price}}</h6>
                <h6>Discount: {{singleProduct.discount}}%</h6>
                <h6>Total Price: ${{singleProduct.TotalPrice}}</h6>
                <h6>Rating: {{singleProduct.rating}} Stars</h6>
                <br>
                    <button type="button" class="btn btn-info">Add To Cart</button>
                <br>
                <br>
                <p>Description: {{singleProduct.description}}</p>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
// import axios from 'axios'
export default {
    
    // data(){
    //     return {
    //         product:''
    //     }
    // },
    
    mounted(){
        this.$store.dispatch("getProductById", this.$route.params.id)
    },
    computed:{
        singleProduct(){
            return this.$store.getters.getSingleProduct
        }
    },
    methods: {
        // fetchProduct(){
        //     var self = this
        //     axios.get('http://ebackend-api.test/api/products/'+this.$route.params.id).then(response=>{
        //         //console.log(response.data.data);
        //         self.product = response.data.data
        //     })
        // }
    }
}
</script>

<style>
    .single-product-sec{
        margin: 50px 0;
    }
</style>