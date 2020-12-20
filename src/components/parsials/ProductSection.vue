<template>
    <div class="container">
        <div class="row">

            <div class="mb-3 col-md-4" v-for="(item, index) in items" :key="index">
                <div class="card h-100">
                    <div class="d-flex justify-content-between position-absolute w-100">
                    <div class="label-new">
                        <span class="px-2 py-1 text-white bg-success small d-flex align-items-center">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span class="ml-1">New</span>
                        </span>
                    </div>
                    <div class="label-sale">
                        <span class="px-2 py-1 text-white bg-primary small d-flex align-items-center">
                        <i class="fa fa-tag" aria-hidden="true"></i>
                        <span class="ml-1">Sale</span>
                        </span>
                    </div>
                    </div>
                    <a href="#">
                    <img :src="item.photo" class="card-img-top" alt="Product">
                    </a>
                    <div class="px-2 pt-1 pb-2 card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                        <p class="h4 text-primary">${{item.TotalPrice}}</p>
                        </div>
                        <div>
                        <a href="#" class="text-secondary lead" data-toggle="tooltip" data-placement="left" title="Compare">
                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                        </a>
                        </div>
                    </div>
                    <p class="mb-2 text-warning d-flex align-items-center">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </p>
                    <p class="mb-0">
                        <strong>
                        <a href="{{item.number}}" class="text-secondary">{{item.name}}</a>
                        </strong>
                    </p>
                    <p class="mb-1">
                        <small>
                        <a href="#" class="text-secondary">Brands</a>
                        </small>
                    </p>
                    <div class="mb-3 d-flex justify-content-between">
                        <div>
                            <p class="mb-0 small"><b>Free Shipping</b></p>
                            <p class="mb-0 small"><b>Price: </b> ${{item.TotalPrice}}</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="px-0 col">
                            <button class="btn btn-outline-primary btn-block">
                                Add To Cart 
                                <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                            </button>
                        </div>
                       
                    </div>
                    </div>
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

        }
    },

    mounted(){
        this.fetchProduct();
    },

    computed: {
        items(){
            return this.$store.getters.getProducts
        }
    },

    methods: {
        fetchProduct(){
            var self = this;
            axios.get('http://ebackend-api.test/api/products').then(response=>{
                //console.log(response.data.data);
                self.$store.commit('setProduct', response.data.data)
            })
        }
    }
}
</script>

<style>
    .card{
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>