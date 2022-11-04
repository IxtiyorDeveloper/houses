import {createSelector, createSlice} from "@reduxjs/toolkit"
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
    isLoading: false
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
                action.payload.username.replace(/\+/g, '')
                    .replace(/\s/g, '')
                    .replace(/-/g, '').replace(/[{()}]/g, '').toString() === "998991234567"
                &&
                action.payload.password === "12345"
            ) {
                setCookie("user", JSON.stringify(action?.payload))
                state.user = JSON.stringify(action?.payload)
                toast.success("Muvaffaqiyatli kirildi!")
                state.isLoading = false
                action.payload.router.push("/object")
            } else {
                state.isLoading = false
                toast.error("Notog'ri login yoki parol!")
            }
        },
        reset: (state, action) => {
            setCookie("reset_unique", JSON.stringify(action?.payload?.uniqueId))
            state.reset_unique = JSON.stringify(action?.payload?.uniqueId)
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        logout: (authStore) => {
            removeCookie("access_token")
            removeCookie("refresh_token")
            removeCookie("user")
            authStore.user = null
        },
    },
})

export const {login, logout, reset,setLoading} = authSlice.actions
export default authSlice.reducer

// Selectors
export const _getMe = createSelector(
    (store) => store.auth,
    authStore => authStore.user
)
export const _getLoading = createSelector(
    (store) => store.auth,
    authStore => authStore.isLoading
)
