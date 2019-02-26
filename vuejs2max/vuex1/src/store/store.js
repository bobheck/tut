import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0,
        value2: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        },
        value: state => {
            return state.value;
        },
        value2: state => {
            return state.value2;
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        },
        updateValue2: (state, payload) => {
            state.value2 = payload;
        },

    },
    actions: {
        increment:  (context, payload) => {
            context.commit('increment', payload)
        },
        decrement: (context, payload) => {
            context.commit('decrement', payload);
        },
        asyncIncrement: (context, payload) => {
            setTimeout(() => {
                context.commit('increment', payload.by)
            }, payload.duration);
        },
        asyncDecrement: (context, payload) => {
            setTimeout(() => {
                context.commit('decrement', payload.by)
            }, payload.duration);
        },
        updateValue: (context, payload) => {
            context.commit('updateValue', payload);
        },
        updateValue2: (context, payload) => {
            context.commit('updateValue2', payload);
        },

    }
});
