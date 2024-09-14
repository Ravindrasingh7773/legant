import React, { Fragment } from "react"
import styles from "./style.module.css"

const SelectBox =({optionData,title})=>{
    return(
        <Fragment>
            <div className={styles.select_box}>
                <h6>{title}</h6>
                <select>
                    {optionData.map((item,i)=>(
                        <option key={i} value={item.value}>{item.name}</option>
                    ))} 
                </select> 
            </div>
        </Fragment>
    )
}
export default SelectBox;