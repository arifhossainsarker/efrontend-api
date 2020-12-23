import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            product: [],
            cart: []
        }
    },

    getters:{
        getProducts(state){
            return state.product
        },

        getCart(state){
            return state.cart
        }
    },

    actions:{

    },

    mutations:{
        setProduct(state, payload){
            state.product = payload
        },

        addToCart(state, payload){
            state.cart.push(payload)
        }
    }
});

export default store;