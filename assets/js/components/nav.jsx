import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

export default function Nav(params) {
    return<nav className="navbar navbar-dark bg-dark navbar-expand">
        <span className="navbar-brand">
            Task Tracker
        </span>
        <ul className="navbar-nav mr-auto">
            <NavItem> 
                <NavLink to="/" exact={false} activeClassName="actiive" className="nav-link"> Tasks </NavLink> 
            </NavItem>
            <NavItem> 
                <NavLink to="/users" exact={false} activeClassName="actiive" className="nav-link" > All Users </NavLink> 
            </NavItem>
        </ul>
        <span className="navbar-text">
            user@host
        </span>
    </nav>;
}