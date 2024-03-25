import { defineStore } from 'pinia';

export const useTestStore = defineStore('test', {
    state: () => ({
        test: "loading",
    }),
    
    persist: {
        storage: sessionStorage,
    },

    getters: {
        getStoreTest() { return this.test },
    },

    actions: {
        setTest(test) {this.test = test },
    },
})