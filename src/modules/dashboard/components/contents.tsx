import React from 'react'
import style from "./contents.module.css"
import Cards from "../components/cards"


export default function Contents() {
  return (
    <div className={style.main}>
        <div className={style.contents}>
            <Cards></Cards>
        </div>
    </div>
  )
}
