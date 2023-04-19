import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({children, to}) => {
    return (
        <div>
            <NavLink to={to} activeClassName="active" className="link">{children}</NavLink>
        </div>
    );
};

export default ActiveLink;