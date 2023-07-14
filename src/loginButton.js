import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './pages/menuManagerDesign.css';
import Button from "react-bootstrap/Button";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <Button variant="outline-primary" onClick={() => loginWithRedirect()}>Bejelentkezés / Prihlásiť sa</Button>;
};

export default LoginButton;