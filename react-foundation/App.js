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
import ReactDOM from "react-dom";

// react element
// const title = (
//     <h1>This is React Element</h1>
// )
const Logo = () => (
    <a href="/" className="logo">
        <h1>Swagger Food</h1>
    </a>
)

//react component
const Header = () => {
    return (
        <div className="header">
            <>
                <Logo />
            </>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const Body = () => {
    return (
        <h1>Body</h1>
    )
}

const Footer = () => {
    return (
        <h1>Footer</h1>
    )
}
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