import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Footer = () => {
    const {user}=useContext(UserContext)
    return (
        <h1 className="container bottom-0 left-0 p-10 m-10 mx-auto text-center">This site is developed By {user.name} - {user.email} </h1>
    )
}
export default Footer