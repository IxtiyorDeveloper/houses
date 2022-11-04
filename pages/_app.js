import '../styles/globals.css'
import {Provider} from "react-redux";
import {store} from "store"
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import {ToastContainer} from "react-toastify";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

function MyApp({Component, pageProps}) {
    const progress = new ProgressBar({
        size: 4,
        color: "#2E3192",
        className: "bar-of-progress",
        delay: 100,
    });
    Router.events.on("routeChangeStart", progress.start);
    Router.events.on("routeChangeComplete", progress.finish);
    Router.events.on("routeChangeError", progress.finish);
    return <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer/>
    </Provider>
}

export default MyApp
