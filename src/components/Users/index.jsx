import React, { useState } from 'react';
import { Skeleton } from './Skeleton';
import User from './User';

const Users = ({ item, isLoading, onClickIvites, ivites, onClick }) => {
  const [valueInput, setValueInput] = useState('');
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          onChange={(e) =>
            setValueInput(e.target.value.toLocaleLowerCase().trim())
          }
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {item
            .filter(
              (value) =>
                value.last_name.toLocaleLowerCase().includes(valueInput) ||
                value.email.toLocaleLowerCase().includes(valueInput)
            )
            .map((value, index) => (
              <User
                isInvited={ivites.includes(value.id)}
                key={index}
                {...value}
                onClickIvites={(id) => onClickIvites(id)}
                ivites={ivites}
              />
            ))}
        </ul>
      )}

      <button onClick={onClick} className="send-invite-btn">
        Отправить приглашение
      </button>
    </>
  );
};

export default Users;
