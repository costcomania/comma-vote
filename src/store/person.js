import { createStore } from 'vuex'

const state = {
    studentId: "",
    clubname: "",
    username: "",
}

const getters = {

}

const actions = {
    changeStudentId({ commit }, name) {
        commit(PERSON.SET_NAME, name);
    }
}

const mutations = {
    [PERSON.SET_NAME](state, name) {
        state.name = name;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}