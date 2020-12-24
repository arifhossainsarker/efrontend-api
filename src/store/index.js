import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state(){
        return {
            product: [],
            cart: [],
            single_product: []
        }
    },

    getters:{
        getProducts(state){
            return state.product
        },

        getCart(state){
            return state.cart
        },

        getSingleProduct(state){
            return state.single_product
        }

    },

    actions:{
        allProducts(context){
            axios.get('http://ebackend-api.test/api/products')
                    .then(response=>{
                        context.commit('setProduct', response.data.data)
                    })
        },

        getProductById(context, payload){
            axios.get('http://ebackend-api.test/api/products/'+payload)
                    .then(response=>{
                        context.commit('singleProduct', response.data.data)
                    })
        },

        productSearch(context, payload){
            axios.get('http://ebackend-api.test/api/search?s='+payload)
                    .then(response=>{
                        context.commit('search_product', response.data.data)
                    })
        }
    },

    mutations:{
        setProduct(state, payload){
            state.product = payload
        },

        addToCart(state, payload){
            state.cart.push(payload)
        },

        revomeCart(state, payload){
            state.cart.splice(payload, 1)
        },

        singleProduct(state, payload){
            state.single_product = payload
        },

        search_product(state, payload){
            state.product = payload
        }
    }
});

export default store;