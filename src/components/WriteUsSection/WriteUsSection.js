import './WriteUsSection.css';
import React from 'react';

function WriteUsSection() {
  return (
    <>
      <div className="write-us-section">
        <h2>НАПИШИТЕ НАМ и МЫ ОБЯЗАТЕЛЬНО ОТВЕТИМ ВАМ</h2>
        <form id="feedback-form">
          <div class="feedback-name">
            <input type="text" name="name" placeholder="Ваше имя" />
            <input type="tel" name="email" placeholder="Ваш телефон" />
          </div>
          <div class="feedback-question">
            <input type="email" name="email" placeholder="Ваш EMAIL" />
            <input type="text" name="email" placeholder="Ваш город" />
          </div>
          <div class="feedback-textarea">
            <textarea name="text" placeholder="Вашe сообщение"></textarea>
          </div>
          <button type="submit" id="feedback-submit-button">
            Отправить
            <span>
              &#11049;&#11049;<b>&#10230;</b>
            </span>
          </button>
        </form>
      </div>
    </>
  );
}

export default WriteUsSection;
