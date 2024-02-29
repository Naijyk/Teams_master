import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
        <Link to='/' >Main</Link>
        <Link to='/configurations' >Configurations</Link>
        <Link to='/teams' >Teams</Link>
    </div>
  )
}
