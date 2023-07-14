import {restaurantInfo} from "../info.js";
import {MainPage, KlassPage,  MalibuPage, GriffPage, GolyaCsardaPage} from "../pages.js";
import {useEffect, useState} from "react";

function Home() {
    const [content, setContent] = useState();
    
    useEffect(()=>{
        setTimeout(()=>{
            setContent(<MainPage/>)
        }, 200)
    }, [])
    function HandleTitleClick() {
        setContent(<MainPage/>);
    }
    function HandleKlassClick() {
        setContent(<KlassPage/>);
    }

    function HandleMalibuClick() {
        setContent(<MalibuPage/>);
    }

    function HandleGriffClick() {
        setContent(<GriffPage/>);
    }

    function HandleGolyaCsardaClick() {
        setContent(<GolyaCsardaPage/>);
    }
    return (
        <>
        <div className="site">
            <div className="main">
                <div className="title" onClick={HandleTitleClick}>
                    <div className="title-logo">
                        <img src="https://i.ibb.co/VLPVr2t/eplf.png" alt="eplf"/>
                    </div>
                    <div className="title-text">
                        <h2>ÉHES PARASZT</h2>
                    </div>
                </div>
                <div className="restaurants">
                    <ul>
                        <li className="textContainer">
                            <p onClick={HandleKlassClick}>{restaurantInfo.klass.name}</p>
                        </li>
                        <li className="lineContainer"><div className="line"></div></li>
                        <li className="textContainer">
                            <p onClick={HandleMalibuClick}>{restaurantInfo.malibu.name}</p>
                        </li>
                        {/*<li className="lineContainer"><div className="line"></div></li>
                        <li className="textContainer">
                            <p onClick={HandleGriffClick}>{restaurantInfo.griff.name}</p>
                        </li>
                        <li className="lineContainer"><div className="line"></div></li>
                        <li className="textContainer">
                            <p onClick={HandleGolyaCsardaClick}>{restaurantInfo.golya_csarda.name}</p>
                        </li>*/}
                    </ul>
                </div>
                {content}
            </div>
        </div>
        </>
        );
}

export default Home;