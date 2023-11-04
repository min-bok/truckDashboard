import React from "react";
import style from "./Nav.module.css";
import { NavList } from "./index";
import { navDataList } from "@/data/dummy";
import Arrow from "@/components/svg/Arrow";

export default function Nav() {
  return (
    <div className={style.nav}>
      <button className={style.expandBtn} type="button">
        <Arrow />
      </button>
      <div className={style.top}>
        <div className={style.alert}>
          <p>최근 알림</p>
        </div>
        <NavList data={navDataList} />
      </div>
      <div className={style.bottom}>
        <button className={style.addBtn} type="button">
          + 화물 등록
        </button>
        <div className={style.user}>
          <p className={style.name}>(주) 민복통운</p>
          <p className={style.kind}>관리자</p>
        </div>
      </div>
    </div>
  );
}
