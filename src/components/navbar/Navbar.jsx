import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/rxLogo.png';
import './navbar.css';

const Menu = () => (
	<>
		<p>
			<a href="#home">Home</a>
		</p>
		{/*<p>
			<a href="#about">About</a>
		</p>
		<p>
			<a href="#benefits">Benefits</a>
</p>*/}
		<p>
			<a href="#joinUs">Join Us</a>
		</p>
	</>
);

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="gpt3__navbar">
			<div className="gpt3__navbar-links">
				<div className="gpt3__navbar-links_logo">
					<a href="#home">
						<img src={logo} alt="logo" />
					</a>
				</div>
				<div className="gpt3__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="gpt3__navbar-sign">
				<a href="#home">
					<p>Sign in</p>
				</a>
				<a href="#home">
					<button type="button">Sign up</button>
				</a>
			</div>
			<div className="gpt3__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className="gpt3__navbar-menu_container scale-up-right">
						<div className="gpt3__navbar-menu_container-links">
							<Menu />
							<div className="gpt3__navbar-menu_container-links-sign">
								<a href="#home">
									<p>Sign in</p>
								</a>
								<a href="#home">
									<button type="button">Sign up</button>
								</a>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
