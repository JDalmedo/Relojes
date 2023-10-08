import React, { useEffect, useState } from "react";

 const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();

            setClockDate(date.toLocaleTimeString());
        }, 1000);
    }, []);
    return(
        <div className="digital-clock">
            <h2>{clockState}</h2>
        </div>
    );
 };

 export default DigitalClock