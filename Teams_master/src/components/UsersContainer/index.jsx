import React, { useContext } from 'react';
import UserCard from '../UserCard';
import s from './index.module.css';
import { Context } from '../../context';



export default function UsersContainer() {

  const { users } = useContext(Context);

  return (
    <div className={s.users_container}>
      {
        users.length === 0
        ? <p>No users</p>
        : users.map(el => <UserCard key={el.id} {...el} />)
      }
    </div>
  )
}
