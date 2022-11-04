import {createSlice, createSelector} from "@reduxjs/toolkit"
import {getCookie, removeCookie, setCookie} from "utils/cookie"
import {toast} from "react-toastify";

const loadUser = () => {
    try {
        const serializedUser = getCookie("user")
        if (!serializedUser) return null
        return JSON.parse(serializedUser)
    } catch (e) {
        return null
    }
}

const initialState = {
    user: loadUser(),
    reset_unique: ""
}

/**
 * Actions and Reducers
 */
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
          if (
              action.payload.username.slice(0,1)
              .replace(/\s/g, '')
              .replace(/-/g, '').replace(/[{()}]/g, '') === "991234567"
              &&
              action.payload.password === "12345"
          ){
              setCookie("user", JSON.stringify(action?.payload))
              state.user = JSON.stringify(action?.payload)
             toast.success("Muvaffaqiyatli kirildi!")
          }
          else {
              toast.error("Notog'ri login yoki parol!")
          }
        },
        reset: (state, action) => {
            setCookie("reset_unique", JSON.stringify(action?.payload?.uniqueId))
            state.reset_unique = JSON.stringify(action?.payload?.uniqueId)
        },
        logout: (authStore) => {
            removeCookie("access_token")
            removeCookie("refresh_token")
            removeCookie("user")
            authStore.user = null
        },
    },
})

export const {login, logout,reset} = authSlice.actions
export default authSlice.reducer

// Selectors
export const _getMe = createSelector(
    (store) => store.auth,
    authStore => authStore.user
)
export const _getUnique = createSelector(
    (store) => store.auth,
    authStore => authStore.reset_unique
)
