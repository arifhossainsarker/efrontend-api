<template>
 <div class="single-product-sec">
      <div class="container">
        <div class="row">
            <div class="col-md-6">
                <img :src="product.photo" class="card-img-top" alt="Product">
                <!-- {{product}} -->
            </div>
            <div class="col-md-6">
                <h2>{{product.name}}</h2>
                <h6>Price: ${{product.price}}</h6>
                <h6>Discount: {{product.discount}}%</h6>
                <h6>Total Price: ${{product.TotalPrice}}</h6>
                <h6>Rating: {{product.rating}} Stars</h6>
                <br>
                    <button type="button" class="btn btn-info">Add To Cart</button>
                <br>
                <br>
                <p>Description: {{product.description}}</p>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
    
    data(){
        return {
            product:''
        }
    },
    mounted(){
        this.fetchProduct()
    },
    computed:{

    },
    methods: {
        fetchProduct(){
            var self = this
            axios.get('http://ebackend-api.test/api/products/'+this.$route.params.id).then(response=>{
                //console.log(response.data.data);
                self.product = response.data.data
            })
        }
    }
}
</script>

<style>
    .single-product-sec{
        margin: 50px 0;
    }
</style>