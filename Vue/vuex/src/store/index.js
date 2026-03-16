import { createStore } from "vuex";


const store = createStore({
    state() {
        return {
            count: 0,
        }
    },
    mutations: {
        increment(state, payload) {
            let data = payload
            console.log(data);
            state.count++;
        },
        decrement(state, payload) {
            state.count--;
        }
    },
    actions:{
        increment(context, payload) {
                context.commit("increment", payload);

        },
        decrement(context) {
            context.commit("decrement");
        }
    }

})

export default store;