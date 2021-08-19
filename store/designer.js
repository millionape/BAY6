// import axios from '@nuxtjs/axios';
const state = () => ( {
    navbarImageToolShow: false,
    isContactShow: true,
    isProductShow: true,
    isCategoryShow: true,
});

const mutations = {
    'SET_IMAGETOOL_STATE'(state, payload){
        console.log("mutations has been called! paylaod=",payload)
        state.navbarImageToolShow = payload
    },
    'SET_CONTACT_SHOW'(state, payload){
        console.log("mutations has been called! paylaod=",payload)
        state.isContactShow = payload
    },
    'SET_PRODUCT_SHOW'(state, payload){
        console.log("mutations has been called! paylaod=",payload)
        state.isProductShow = payload
    },
    'SET_CATEGORY_SHOW'(state, payload){
        console.log("mutations has been called! paylaod=",payload)
        state.isCategoryShow = payload
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
    isContactShow(state){
        return state.isContactShow
    },
    isCategoryShow(state){
        return state.isCategoryShow
    },
    isProductShow(state){
        return state.isProductShow
    },
};

export default{
    state, mutations, actions, getters
};