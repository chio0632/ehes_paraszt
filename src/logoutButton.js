import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './pages/menuManagerDesign.css';
import Button from "react-bootstrap/Button";

const LogoutButton = ({site}) => {
    const { logout } = useAuth0();

    return (
        <Button variant="outline-primary" onClick={() => logout({ logoutParams: { returnTo: site } })}>
            Kijelentkezés / Odhlásiť sa
        </Button>
        );
};

export default LogoutButton;