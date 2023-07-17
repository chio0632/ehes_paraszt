import './menuManagerDesign.css';
import {useEffect, useState} from "react";
import Nav from 'react-bootstrap/Nav';
import {GriffMondayMenuEditor, GriffTuesdayMenuEditor, GriffWednesdayMenuEditor, GriffThursdayMenuEditor, GriffFridayMenuEditor, GriffWeeklyMenuEditor} from "./griffManagerItems";
import Button from 'react-bootstrap/Button';
import LoginButton from "../loginButton";
import LogoutButton from "../logoutButton";
import Profile from "../profile";
import {useAuth0} from "@auth0/auth0-react";
import { Auth0Provider } from '@auth0/auth0-react';




function GriffMenuEditor() {
    const [editor, setEditor] = useState();
    const {isAuthenticated, isLoading} = useAuth0();

    function HandleMondayClick() {
        setEditor(<GriffMondayMenuEditor/>)
    }

    function HandleTuesdayClick() {
        setEditor(<GriffTuesdayMenuEditor/>)
    }

    function HandleWednesdayClick() {
        setEditor(<GriffWednesdayMenuEditor/>)
    }

    function HandleThursdayClick() {
        setEditor(<GriffThursdayMenuEditor/>)
    }

    function HandleFridayClick() {
        setEditor(<GriffFridayMenuEditor/>)
    }

    function HandleWeeklyClick() {
        setEditor(<GriffWeeklyMenuEditor/>)
    }
    if (isLoading) {
        return (
            <>
            <div className="loadingLogo">
                <img src="https://i.ibb.co/VLPVr2t/eplf.png" alt="eplf"/>
            </div>    
            </>
            );
    } else if (!isAuthenticated) {
        return (
            <div className="login">
                <LoginButton/>
            </div>
            )
    } return  (
        <>
        <div className="menuManagerTitle">
            <h2>Griff</h2>
        </div>
        <div className="header">
            <Profile/>
            <div className="logout">
                <LogoutButton site="https://ehesparaszt.netlify.app/griffmenumanager"/>
            </div>
        </div>

        <div className="showWeeklyMenu" onClick={HandleWeeklyClick}>
            <Button variant="outline-primary">Heti Menü / Týždenné Menu</Button>{' '}
        </div>
        <div className="menuManager">
            <Nav justify variant="tabs">
                <Nav.Item>
                    <Nav.Link onClick={HandleMondayClick}>Hétfő / Pondelok</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={HandleTuesdayClick}>Kedd / Utorok</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={HandleWednesdayClick}>Szerda / Streda</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={HandleThursdayClick}>Csütörtök / Štvrtok</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={HandleFridayClick}>Péntek / Piatok</Nav.Link>
                </Nav.Item>
            </Nav>
            {editor}
        </div>
        </>
        )
}

export default function GriffMenuManager() {
    return (
        <Auth0Provider
            domain="dev-214vs7fyuxindw0r.us.auth0.com"
            clientId="v6iTmzdytyrydskr0b11pXO4ItTWONoq"
            authorizationParams={{
            redirect_uri: "https://ehesparaszt.netlify.app/griffmenumanager"
        }}
            >
            <GriffMenuEditor />
        </Auth0Provider>
        )
}

