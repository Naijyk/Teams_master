import React, { useContext } from 'react';
import s from './index.module.css';
import Select from 'react-select';
import { Context } from '../../context';

export default function AddUserForm() {

  const { teams, addUser } = useContext(Context);

  const userFormSubmit = event => {
      event.preventDefault();

      const { user_name, team_name } = event.target;

      const new_user = {
          id: Date.now(),
          user: user_name.value,
          team: team_name.value
      }

      addUser(new_user);

      event.target.reset();
  }

  return (
    <form className={s.add_user_form}
          onSubmit={userFormSubmit} >
        <label>
            <p>Add user</p>
            <input type="text" placeholder="User's name" name='user_name' />
        </label>
        <Select options={teams} name='team_name' />
        <button>Add user</button>
    </form>
  )
}
