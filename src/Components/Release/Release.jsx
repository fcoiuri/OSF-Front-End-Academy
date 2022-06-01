import React, { useState, useEffect } from "react";
import styles from "./Release.module.css";
import { useCountdown } from "../../_utils/time";

export const Release = () => {
  var deadline = new Date('Jun 01, 2022');
  const [countdown, setCountdown] = useState(false);
  const [days, hours, minutes, seconds] = useCountdown(deadline);
  
  useEffect(()=>{
    if(deadline < new Date()) setCountdown(true)
  })
  
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.title}>We Will Release OSF Academy</div>
        <div>
          We are working hard and estimated release time products below.{" "}
        </div>
        <div>
          Sed ac tristique nunc, ut gravida nunc. Nulla consequat erat non
          lectus imperdiet
        </div>
        {!countdown &&(
        <div className="lead  mt-3 pb-5">
        days= {days} 	&#160;
        hours= {hours} 	&#160;
        minutes= {minutes} 	&#160;
        seconds= {seconds} 	&#160;
        </div>
        )}
        {countdown && (
          <div className="lead font-weight-bold mt-3 pb-5">Expired!</div>
        )}
      </div>
    </div>
  );
};
