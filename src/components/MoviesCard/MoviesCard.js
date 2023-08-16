import React from "react";

import "./MoviesCard.css";

function MoviesCard() {
  return (
    <>
      <li className="film">
        {/* карточка вставлена чтобы увидеть структуру разметки страницы */}
        <img alt="" className="film__image" />
        <div className="film__container">
          <div className="film__title-block">
            <h2 className="film__title">33 слова о дизайне</h2>
            <span className="film__time">1ч 37м</span>
          </div>
          <button type="button" className="film__like-button film__like-button_active"></button>
        </div>
      </li>
      <li className="film">
        {/* карточка вставлена чтобы увидеть структуру разметки страницы */}
        <img alt="" className="film__image" />
        <div className="film__container">
          <div className="film__title-block">
            <h2 className="film__title">33 слова о дизайне</h2>
            <span className="film__time">1ч 37м</span>
          </div>
          <button type="button" className="film__like-button"></button>
        </div>
      </li>
      <li className="film">
        {/* карточка вставлена чтобы увидеть структуру разметки страницы */}
        <img alt="" className="film__image" />
        <div className="film__container">
          <div className="film__title-block">
            <h2 className="film__title">33 слова о дизайне</h2>
            <span className="film__time">1ч 37м</span>
          </div>
          <button type="button" className="film__delete-button"></button>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
