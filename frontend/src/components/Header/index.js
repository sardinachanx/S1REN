import React from 'react';
import 'bulma/css/bulma.css';
import {Navbar, NavbarMenu, NavbarStart, NavbarEnd, NavbarItem } from 'bloomer';

const Header = (props) => {
	return (
		<header>
			<Navbar className="has-shadow">
				<NavbarMenu>
					<NavbarStart>
						<NavbarItem><a href="/">Disaster Management</a></NavbarItem>
					</NavbarStart>
					<NavbarEnd>
						<NavbarItem><a href="#">DevPost</a></NavbarItem>
					</NavbarEnd>
				</NavbarMenu>
			</Navbar>
		</header>
	);
}

export default Header;