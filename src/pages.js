import {DailyText, WeeklyText, DailyMenu, WeeklyMenu} from "./menuItems.js";
import {KlassRestaurant, MalibuRestaurant, GriffRestaurant, GolyaCsardaRestaurant} from "./restaurantDatabase.js";
import {restaurantMenu} from "./menuDatabase";
import ReactHtmlParser from "html-react-parser";
export function MainPage() {
    return (
        <>
        <DailyText/>
        <KlassRestaurant/>
        <DailyMenu monday={ReactHtmlParser(restaurantMenu.klass.monday)} tuesday={ReactHtmlParser(restaurantMenu.klass.tuesday)} wednesday={ReactHtmlParser(restaurantMenu.klass.wednesday)} thursday={ReactHtmlParser(restaurantMenu.klass.thursday)} friday={ReactHtmlParser(restaurantMenu.klass.friday)}/>
        <MalibuRestaurant/>
        <DailyMenu monday={ReactHtmlParser(restaurantMenu.malibu.monday)} tuesday={ReactHtmlParser(restaurantMenu.malibu.tuesday)} wednesday={ReactHtmlParser(restaurantMenu.malibu.wednesday)} thursday={ReactHtmlParser(restaurantMenu.malibu.thursday)} friday={ReactHtmlParser(restaurantMenu.malibu.friday)}/>
        {/*<GriffRestaurant/>
        <DailyMenu monday={ReactHtmlParser(restaurantMenu.griff.monday)} tuesday={ReactHtmlParser(restaurantMenu.griff.tuesday)} wednesday={ReactHtmlParser(restaurantMenu.griff.wednesday)} thursday={ReactHtmlParser(restaurantMenu.griff.thursday)} friday={ReactHtmlParser(restaurantMenu.griff.friday)}/>
        <GolyaCsardaRestaurant/>
        <DailyMenu monday={ReactHtmlParser(restaurantMenu.golya_csarda.monday)} tuesday={ReactHtmlParser(restaurantMenu.golya_csarda.tuesday)} wednesday={ReactHtmlParser(restaurantMenu.golya_csarda.wednesday)} thursday={ReactHtmlParser(restaurantMenu.golya_csarda.thursday)} friday={ReactHtmlParser(restaurantMenu.golya_csarda.friday)}/>*/}
        </>
        )
}
export function KlassPage() {
    return (
        <>
        <KlassRestaurant/>
        <DailyText/>
        <DailyMenu monday={ReactHtmlParser(restaurantMenu.klass.monday)} tuesday={ReactHtmlParser(restaurantMenu.klass.tuesday)} wednesday={ReactHtmlParser(restaurantMenu.klass.wednesday)} thursday={ReactHtmlParser(restaurantMenu.klass.thursday)} friday={ReactHtmlParser(restaurantMenu.klass.friday)}/>
        <WeeklyText/>
        <WeeklyMenu monday={ReactHtmlParser(restaurantMenu.klass.monday)} tuesday={ReactHtmlParser(restaurantMenu.klass.tuesday)} wednesday={ReactHtmlParser(restaurantMenu.klass.wednesday)} thursday={ReactHtmlParser(restaurantMenu.klass.thursday)} friday={ReactHtmlParser(restaurantMenu.klass.friday)}/>
        </>
    )
}

export function MalibuPage() {
    return(
        <>
        <MalibuRestaurant/>
        <DailyText/>
        <DailyMenu monday={ReactHtmlParser(restaurantMenu.malibu.monday)} tuesday={ReactHtmlParser(restaurantMenu.malibu.tuesday)} wednesday={ReactHtmlParser(restaurantMenu.malibu.wednesday)} thursday={ReactHtmlParser(restaurantMenu.malibu.thursday)} friday={ReactHtmlParser(restaurantMenu.malibu.friday)}/>
        <WeeklyText/>
        <WeeklyMenu monday={ReactHtmlParser(restaurantMenu.malibu.monday)} tuesday={ReactHtmlParser(restaurantMenu.malibu.tuesday)} wednesday={ReactHtmlParser(restaurantMenu.malibu.wednesday)} thursday={ReactHtmlParser(restaurantMenu.malibu.thursday)} friday={ReactHtmlParser(restaurantMenu.malibu.friday)}/>
        </>
    )
}

export function GriffPage() {
    return (
        <>
        <GriffRestaurant/>
        <DailyText/>
        <DailyMenu monday={ReactHtmlParser(restaurantMenu.griff.monday)} tuesday={ReactHtmlParser(restaurantMenu.griff.tuesday)} wednesday={ReactHtmlParser(restaurantMenu.griff.wednesday)} thursday={ReactHtmlParser(restaurantMenu.griff.thursday)} friday={ReactHtmlParser(restaurantMenu.griff.friday)}/>
        <WeeklyText/>
        <WeeklyMenu monday={ReactHtmlParser(restaurantMenu.griff.monday)} tuesday={ReactHtmlParser(restaurantMenu.griff.tuesday)} wednesday={ReactHtmlParser(restaurantMenu.griff.wednesday)} thursday={ReactHtmlParser(restaurantMenu.griff.thursday)} friday={ReactHtmlParser(restaurantMenu.griff.friday)}/>
        </>
    )
}

export function GolyaCsardaPage() {
    return (
        <>
        <GolyaCsardaRestaurant/>
        <DailyText/>
        <DailyMenu monday={ReactHtmlParser(restaurantMenu.golya_csarda.monday)} tuesday={ReactHtmlParser(restaurantMenu.golya_csarda.tuesday)} wednesday={ReactHtmlParser(restaurantMenu.golya_csarda.wednesday)} thursday={ReactHtmlParser(restaurantMenu.golya_csarda.thursday)} friday={ReactHtmlParser(restaurantMenu.golya_csarda.friday)}/>
        <WeeklyText/>
        <WeeklyMenu monday={ReactHtmlParser(restaurantMenu.golya_csarda.monday)} tuesday={ReactHtmlParser(restaurantMenu.golya_csarda.tuesday)} wednesday={ReactHtmlParser(restaurantMenu.golya_csarda.wednesday)} thursday={ReactHtmlParser(restaurantMenu.golya_csarda.thursday)} friday={ReactHtmlParser(restaurantMenu.golya_csarda.friday)}/>
        </>
    )
}