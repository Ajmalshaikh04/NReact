import { useState } from "react"

const authentication = () => {
    return true
}


const Logo = () => (
    <a href="/" className="logo">
        <h1>Swagger Food</h1>
    </a>
)
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
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
            {
                isLoggedIn ? <button onClick={() => {
                    setIsLoggedIn(false)
                }}>LogOut</button> : <button onClick={() => {
                    setIsLoggedIn(true)
                }}>LogIn</button>
            }
        </div>
    )
}
export default Header