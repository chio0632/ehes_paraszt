export function Menu({menu}) {
    return (
        <div className="menu">
            {menu}
        </div>
    )
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();
let day = days[date.getDay()];

export function DailyMenu({monday, tuesday, wednesday, thursday, friday}) {
    switch (day) {
        case "Monday" :
            return (
                <div className="daily">
                    <Menu menu={monday} />
                </div>
            );
            break;
        case "Tuesday" :
            return (
                <div className="daily">
                    <Menu menu={tuesday} />
                </div>
            );
            break;
        case "Wednesday" :
            return (
                <div className="daily">
                    <Menu menu={wednesday} />
                </div>
            );
            break;
        case "Thursday" :
            return (
                <div className="daily">
                    <Menu menu={thursday} />
                </div>
            );
            break;
        case "Friday" :
            return (
                <div className="daily">
                    <Menu menu={friday} />
                </div>
            );
            break;
        default :
            return (
                <div className="daily">
                    <h2>Zárva / Zatvorené</h2>
                </div>
            );
            
    }
}


export function DailyText() {
    return (
        <div className="daily-text">
            <h2>NAPI MENÜ / DENNÉ MENU</h2>
        </div>
        )
}

export function WeeklyText() {
    return (
        <div className="weekly-text">
            <h2>HETI MENÜ / TÝŽDENNÉ MENU</h2>
        </div>
    )
}

export function WeeklyMenu({monday, tuesday, wednesday, thursday, friday}) {
    return (
        <>
        <div className="weekly">
            <div className="day">
                <h2>HÉTFŐ / PONDELOK</h2>
            </div>
            <Menu menu={monday} />
        </div>
        <div className="weekly">
            <div className="day">
                <h2>KEDD / UTOROK</h2>
            </div>
            <Menu menu={tuesday} />
        </div>
        <div className="weekly">
            <div className="day">
                <h2>SZERDA / STREDA</h2>
            </div>
            <Menu menu={wednesday} />
        </div>
        <div className="weekly">
            <div className="day">
                <h2>CSÜTÖRTÖK / ŠTVRTOK</h2>
            </div>
            <Menu menu={thursday} />
        </div>
        <div className="weekly">
            <div className="day">
                <h2>PÉNTEK / PIATOK</h2>
            </div>
            <Menu menu={friday} />
        </div>
        </>
    )
}

