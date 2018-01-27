import React from 'react';
import 'bulma/css/bulma.css';
import {Navbar, NavbarMenu, NavbarStart, NavbarItem } from 'bloomer';

const Header = (props) => {
	return (
		<header>
			<Navbar className="has-shadow">
				<NavbarMenu>
					<NavbarStart>
						<NavbarItem>Disaster Management</NavbarItem>
					</NavbarStart>
				</NavbarMenu>
			</Navbar>
		</header>
	);
}

export default Header;