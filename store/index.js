import {configureStore} from "@reduxjs/toolkit"

import reducer from "./slices"

export * from "./slices"

export const store = configureStore({
    reducer
})
