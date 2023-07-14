import {restaurantInfo} from "./info.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faHouse, faLocationDot} from '@fortawesome/free-solid-svg-icons';

/* Klass Bistro */

function KlassRestaurantName() {
    return (
        <div className="restaurant-name">
            <h2>{restaurantInfo.klass.name}</h2>
        </div>
        )
}

function KlassRestaurantAboutPhone() {
    return (
        <div className="about-phone">
            <a href={restaurantInfo.klass.phone1_link} className="about-text" target="_blank"><FontAwesomeIcon icon={faPhone} />{restaurantInfo.klass.phone1}</a>
        </div>
        ) 
}

function KlassRestaurantAboutFacebook() {
    return(
        <div className="about-facebook">
            <a href={restaurantInfo.klass.fb_link} className="about-text" target="_blank"><FontAwesomeIcon icon={faHouse} />{restaurantInfo.klass.name}</a>
        </div>
        )
}

function KlassRestaurantAboutLocation() {
    return(
        <div className="about-location">
            <a href={restaurantInfo.klass.location} className="about-text" target="_blank"><FontAwesomeIcon icon={faLocationDot} />{restaurantInfo.klass.address}</a>
        </div>
        )
}

function KlassRestaurantAbout() {
    return (
        <div className="about">
            <ul>
                <li>
                    <KlassRestaurantAboutPhone/>
                </li>
                <li>
                    <KlassRestaurantAboutFacebook/>
                </li>
                <li>
                    <KlassRestaurantAboutLocation/>
                </li>
            </ul>
        </div>
        )
}

export function KlassRestaurant() {
    return (
        <div className="restaurant">
            <KlassRestaurantName/>
            <KlassRestaurantAbout/>
        </div>
        )
}

/* Malibu */

function MalibuRestaurantName() {
    return (
        <div className="restaurant-name">
            <h2>{restaurantInfo.malibu.name}</h2>
        </div>
        )
}

function MalibuRestaurantAboutPhone() {
    return (
        	<div className="about-phone">
                <a href={restaurantInfo.malibu.phone1_link} className="about-text" target="_blank"><FontAwesomeIcon icon={faPhone} />{restaurantInfo.malibu.phone1}</a>
                <a href={restaurantInfo.malibu.phone2_link} className="about-text" target="_blank"><FontAwesomeIcon icon={faPhone} />{restaurantInfo.malibu.phone2}</a>
            </div>
        ) 
}

function MalibuRestaurantAboutFacebook() {
    return(
        <div className="about-facebook">
            <a href={restaurantInfo.malibu.fb_link} className="about-text" target="_blank"><FontAwesomeIcon icon={faHouse} />{restaurantInfo.malibu.name}</a>
        </div>
        )
}

function MalibuRestaurantAboutLocation() {
    return(
        <div className="about-location">
            <a href={restaurantInfo.malibu.location} className="about-text" target="_blank"><FontAwesomeIcon icon={faLocationDot} />{restaurantInfo.malibu.address}</a>
        </div>
        )
}

function MalibuRestaurantAbout() {
    return (
        <div className="about">
            <ul>
                <li>
                    <MalibuRestaurantAboutPhone/>
                </li>
                <li>
                    <MalibuRestaurantAboutFacebook/>
                </li>
                <li>
                    <MalibuRestaurantAboutLocation/>
                </li>
            </ul>
        </div>
        )
}

export function MalibuRestaurant() {
    return (
        <div className="restaurant">
            <MalibuRestaurantName/>
            <MalibuRestaurantAbout/>
        </div>
        )
}

/* Griff */

function GriffRestaurantName() {
    return (
        <div className="restaurant-name">
            <h2>{restaurantInfo.griff.name}</h2>
        </div>
        )
}

function GriffRestaurantAboutPhone() {
    return (
        <div className="about-phone">
            <a href={restaurantInfo.griff.phone1_link} className="about-text" target="_blank"><FontAwesomeIcon icon={faPhone} />{restaurantInfo.griff.phone1}</a>
            <a href={restaurantInfo.griff.phone2_link} className="about-text" target="_blank"><FontAwesomeIcon icon={faPhone} />{restaurantInfo.griff.phone2}</a>
        </div>
        ) 
}

function GriffRestaurantAboutFacebook() {
    return(
        <div className="about-facebook">
            <a href={restaurantInfo.griff.fb_link} className="about-text" target="_blank"><FontAwesomeIcon icon={faHouse} />{restaurantInfo.griff.name}</a>
        </div>
        )
}

function GriffRestaurantAboutLocation() {
    return(
        <div className="about-location">
            <a href={restaurantInfo.griff.location} className="about-text" target="_blank"><FontAwesomeIcon icon={faLocationDot} />{restaurantInfo.griff.address}</a>
        </div>
        )
}

function GriffRestaurantAbout() {
    return (
        <div className="about">
            <ul>
                <li>
                    <GriffRestaurantAboutPhone/>
                </li>
                <li>
                    <GriffRestaurantAboutFacebook/>
                </li>
                <li>
                    <GriffRestaurantAboutLocation/>
                </li>
            </ul>
        </div>
        )
}

export function GriffRestaurant() {
    return (
        <div className="restaurant">
            <GriffRestaurantName/>
            <GriffRestaurantAbout/>
        </div>
        )
}

/* Gólya Csárda */

function GolyaCsardaRestaurantName() {
    return (
        <div className="restaurant-name">
            <h2>{restaurantInfo.golya_csarda.name}</h2>
        </div>
        )
}

function GolyaCsardaRestaurantAboutPhone() {
    return (
        <div className="about-phone">
            <a href={restaurantInfo.golya_csarda.phone1_link} className="about-text" target="_blank"><FontAwesomeIcon icon={faPhone} />{restaurantInfo.golya_csarda.phone1}</a>
        </div>
        ) 
}

function GolyaCsardaRestaurantAboutFacebook() {
    return(
        <div className="about-facebook">
            <a href={restaurantInfo.golya_csarda.fb_link} className="about-text" target="_blank"><FontAwesomeIcon icon={faHouse} />{restaurantInfo.golya_csarda.name}</a>
        </div>
        )
}

function GolyaCsardaRestaurantAboutLocation() {
    return(
        <div className="about-location">
            <a href={restaurantInfo.golya_csarda.location} className="about-text" target="_blank"><FontAwesomeIcon icon={faLocationDot} />{restaurantInfo.golya_csarda.address}</a>
        </div>
        )
}

function GolyaCsardaRestaurantAbout() {
    return (
        <div className="about">
            <ul>
                <li>
                    <GolyaCsardaRestaurantAboutPhone/>
                </li>
                <li>
                    <GolyaCsardaRestaurantAboutFacebook/>
                </li>
                <li>
                    <GolyaCsardaRestaurantAboutLocation/>
                </li>
            </ul>
        </div>
        )
}

export function GolyaCsardaRestaurant() {
    return (
        <div className="restaurant">
            <GolyaCsardaRestaurantName/>
            <GolyaCsardaRestaurantAbout/>
        </div>
        )
}




