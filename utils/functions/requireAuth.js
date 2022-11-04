import React from "react";
import {useSelector} from "react-redux";
import {_getMe} from "../../redux";
import Router from "next/router";
import dynamic from "next/dynamic";

function RequireAuth({children}) {

    const access = useSelector(_getMe)

    if (!access) {
        Router.replace("/login")
    }
    return children;
}

export default dynamic(() => Promise.resolve(RequireAuth), {
    ssr: false
})
