import React from "react";
import NavTab from "../NavTab/NavTab";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__containers">
        <div className="promo__container">
          <div className="promo__text-block">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб-разработки.
            </h1>
          </div>
        </div>
      </div>
      <NavTab />
    </section>
  );
}

export default Promo;
