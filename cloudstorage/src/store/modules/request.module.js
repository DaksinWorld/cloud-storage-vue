import axios from '../../../axios/request'
/*
import store from '../index'
*/
let TOKEN_KEY = 'jwt-token'
let localID = 'localID'

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY),
            LOCAL_ID: localStorage.getItem(localID)
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        setUid(state, token) {
            state.token = token
            localStorage.setItem(localID, token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem(TOKEN_KEY)
            localStorage.removeItem(localID)
        },
    },
    actions: {
        async login({commit}, payload) {
            try {
                const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyADbm3hUL7qik8taoEvdlUWTWds2S4gF2c'
                const {data} = await axios.post(url, {...payload, returnSecureToken:true})
                console.log(data)
                commit('setToken', data.idToken)
                commit('setUid', data.localId)
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        uid(state) {
            return state.LOCAL_ID
        },
        isAuthenticated(_, getters) {
            return !!getters.token
        }
    }
}