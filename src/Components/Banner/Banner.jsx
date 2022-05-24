import React from "react";
import styles from './Banner.module.css'
import { default as banner } from '../../imgs/banner.png';

export default function Banner() {
  return (
    <React.Fragment>
      <img src={banner} alt="OSF Banner"className={styles.banner}/>
      <div className={styles.title}>Banner OSF Theme</div>
      <div className={styles.description}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
</div>
    </React.Fragment>
  )
}