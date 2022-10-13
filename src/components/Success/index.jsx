import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const Success = ({ count }) => {
  return count ? (
    <div className="success-block">
      <AiOutlineCheckCircle className="success-imeges-ok" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <a href="/">
        <button className="send-invite-btn">Назад</button>
      </a>
    </div>
  ) : (
    <div className="success-block">
      <AiOutlineCloseCircle className="imeges-none" />
      <p>Вы выбрали 0 пользователей</p>
      <a href="/">
        <button className="send-invite-btn">Назад</button>
      </a>
    </div>
  );
};

export default Success;
