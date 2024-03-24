import { defineStore } from 'pinia';

export const overlay1store = defineStore('overlay1', {
    state: () => ({
        test: "",
    }),
    
    persist: {
        storage: sessionStorage,
    },

    getters: {
        getTest() { return this.test }
    },

    actions: {
        setTest(test) {this.test = test }
    },
})