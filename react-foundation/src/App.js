// import React from "react";
// import ReactDOM from "react-dom";

// // react element
// // const title = (
// //     <h1>This is React Element</h1>
// // )
// const Title = () => (
//     <h1>This is React Element</h1>
// )

// //react component
// const HeaderComp = () => {
//     return (
//         <div>
//             {/* this is known as component composition */}
//             <Title />
//             {/* {title} */}
//             <h2>
//                 this is React Component
//             </h2>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<HeaderComp />)


//================================================================================================

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";




const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)