import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';


export default function UserCard({ id, user, team }) {

  const { deleteCard } = useContext(Context);

  return (
    <div className={s.user_card} onClick={() => deleteCard(id)} >
      <p>{ user }</p>
      <p>{ team }</p>
    </div>
  )
}
