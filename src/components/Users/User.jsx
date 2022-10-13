import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const User = ({ id, email, last_name, avatar, onClickIvites, isInvited }) => (
  <li>
    <div>
      <img className="avatar" src={avatar} alt="User" />
      <div>
        <h3>{last_name}</h3>
        <p>{email}</p>
      </div>
    </div>
    {isInvited ? (
      <AiOutlineMinus className="action" onClick={() => onClickIvites(id)} />
    ) : (
      <AiOutlinePlus className="action" onClick={() => onClickIvites(id)} />
    )}
  </li>
);

export default User;
