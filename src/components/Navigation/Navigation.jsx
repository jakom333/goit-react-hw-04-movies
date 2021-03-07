import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { NavigationContainer } from './NavigationStyled';

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul>
        <li>
          <NavLink
            exact
            to={routes.home}
            className="navLink"
            activeClassName="activeNavLink"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={routes.movies}
            className="navLink"
            activeClassName="activeNavLink"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
