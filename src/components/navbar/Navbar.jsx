import React from 'react'
import classes from './navbar.module.css'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <Link className={classes.left}>
                Receitas na Hora
            </Link>
            <div className={classes.center}></div>
            <div className={classes.right}>
                <input type="search" placeholder='Informe o nome da receita' className={classes.searchbar}/>
                <AiOutlineSearch/>
            </div>
        </div>
    </div>
  )
}

export default Navbar