import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';

export default function AddTeamForm() {

  const { addTeam } = useContext(Context);

  const teamFormSubmit = event => {
      event.preventDefault();

      const { team_name } = event.target;

      const new_team = {
        value: team_name.value,
        label: team_name.value
      }

      addTeam(new_team);

      event.target.reset();
  }

  return (
    <form className={s.add_team_form}
          onSubmit={teamFormSubmit} >
        <label>
            <p>Add team</p>
            <input type="text" placeholder="Team's name" name='team_name' />
        </label>
        <button>Add team</button>
    </form>
  )
}
