import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            product: []
        }
    },

    getters:{
        getProducts(state){
            return state.product
        }
    },

    actions:{

    },

    mutations:{
        setProduct(state, payload){
            state.product = payload
        }
    }
});

export default store;