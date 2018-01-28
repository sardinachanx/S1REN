import React from 'react';
import 'bulma/css/bulma.css';
import {Navbar, NavbarMenu, NavbarStart, NavbarEnd, NavbarItem } from 'bloomer';
import './index.css';

const Header = (props) => {
	return (
		<header>
			<Navbar className="has-shadow">
				<NavbarMenu>
					<NavbarStart>
						<NavbarItem><a href="/">Disaster Management</a></NavbarItem>
					</NavbarStart>
					<NavbarEnd>
						<NavbarItem><a href="https://shehacksboston.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=discover">DevPost</a></NavbarItem>
					</NavbarEnd>
				</NavbarMenu>
			</Navbar>
		</header>
	);
}

export default Header;