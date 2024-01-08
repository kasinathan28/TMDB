import React from "react";
import style from "../components/navbar.module.css"
import SearchBar from "../../app/components/searchBar"
import Header from "@/modules/app/components/header";
import Button from "@/modules/app/components/button";
function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <Header></Header>
      </div>
      <div className={style.right}>
        <Button></Button>
        <SearchBar  placeholder="search"/>
      </div>
    </div>
  );
}

export default Navbar;
