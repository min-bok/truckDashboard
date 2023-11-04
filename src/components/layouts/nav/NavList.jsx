import React from "react";
import style from "./NavList.module.css";
import Link from "next/link";

export default function NavList({ data }) {
  return (
    <div>
      {data &&
        data.map((list, idx) => (
          <Link href={list.link}>
            <div className={style.list} key={idx}>
              <p className={style.text}>{list.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
