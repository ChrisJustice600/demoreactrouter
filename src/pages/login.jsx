import { Link } from "react-router-dom";
import Button from "../components/button";

export default function Login() {
    return (
        <>
            <h1>Login</h1>
            <Button  linkValue='/home' buttonValue='Connexion'/>
        </>
    )
}