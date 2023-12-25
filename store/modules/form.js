import axios from 'axios'

const state = {
    cats: []
}
const getters = {
    getAllCats: state => state.cats

}
const mutations = {
    SET_ALL_CATS(state,cats){
        state.cats = cats
    }
}
const actions = {
    async GetAllCats({ commit }) {
        try {
            const res = await axios.get(`get_all_cats`, {
            });
            commit("SET_ALL_CATS", res.data.data);
        } catch (error) {
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}