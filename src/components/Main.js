import React, { useState } from 'react';
import styles from "../styles/Main.module.css";
import LinearWithValueLabel from './Progressbar';

import zxcvbn from "zxcvbn";
import CustomizedProgressBars from './Progressbar';

const Main = () => {
   const[password,setPassword]=useState("");
   const Result = zxcvbn(password);
   const num = Result.score * 100/4;
   const res = Result.score;
    console.log(num);

    const textgenerator = () => {

        switch (res) {
            
          case 1:
            return "weak"
    
          case 2:
            return "medium";
    
          case 3:
            return "good";
    
          case 4:
            return "great";
    
          default:
            return "";
        }
        
      };
    return (
        <div className={styles.container}>
            <div className={styles.honeinput}>
                <h1>
                    please Enter Password
                </h1>
                <div>
                    <input type='text' onChange={(e)=>setPassword(e.target.value)} />
                    <CustomizedProgressBars num={num} res={res}/>
                    <p>{textgenerator()}</p>
                </div>
                
              
            </div>
        </div>
    );
};

export default Main;