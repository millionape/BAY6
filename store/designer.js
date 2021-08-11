// import axios from '@nuxtjs/axios';
const state = () => ( {
    navbarImageToolShow: false
});

const mutations = {
    'SET_IMAGETOOL_STATE'(state, payload){
        console.log("mutations has been called! paylaod=",payload)
        state.navbarImageToolShow = payload
    }
};

const actions = {
    showImageTool({ commit }, payload){
        commit('SET_IMAGETOOL_STATE', payload)
    }
};

const getters = {
    isImageToolShow(state){
        return state.navbarImageToolShow
    },
};

export default{
    state, mutations, actions, getters
};