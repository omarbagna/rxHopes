import React from 'react';
import bagLogo from '../../assets/Head2.png';
import logo from '../../assets/rxLogo.png';
import './footer.css';

const Footer = () => {
	return (
		<div className="gpt3__footer section__padding" id="footer">
			<div className="gpt3__footer-heading">
				<h1 className="gradient__text-alt">
					Excellence in Healthcare.
					<br />
					Every day.
				</h1>
			</div>
			<div className="gpt3__footer-btn">
				<a href="#footer">Join Today</a>
			</div>

			<div className="gpt3__footer-links">
				<div className="gpt3__footer-links_logo">
					<img src={logo} alt="logo" />
					<h2>Rx Hopes</h2>
					<p>By Rx Health Info Systems</p>
				</div>

				<div className="gpt3__footer-links_div">
					<h4>Site Links</h4>
					<p>
						<a href="#home" rel="noreferrer">
							Home
						</a>
					</p>
					<p>
						<a href="#about" rel="noreferrer">
							About
						</a>
					</p>
					<p>
						<a href="#benefits" rel="noreferrer">
							Benefits
						</a>
					</p>
					<p>
						<a href="#joinUs" rel="noreferrer">
							Join Us
						</a>
					</p>
				</div>
			</div>

			<div className="gpt3__footer-copyright">
				<p>
					<a
						href="https://rxhealthinfosystems.com/"
						target="_blank"
						rel="noreferrer">
						2022 Rx Health Info Systems
					</a>
				</p>
				<a
					href="https://bagna.netlify.app/"
					target="_blank"
					rel="noreferrer"
					className="gpt3__footer-links_logo-hide">
					<img src={bagLogo} alt="logo" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
