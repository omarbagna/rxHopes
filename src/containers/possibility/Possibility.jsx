import React from 'react';
import possibilityImage from '../../assets/mobile.png';
import './possibility.css';

const Possibility = () => {
	return (
		<div className="gpt3__possibility section__padding" id="joinUs">
			<div className="gpt3__possibility-image">
				<img src={possibilityImage} alt="possibility" />
			</div>
			<div className="gpt3__possibility-content">
				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>
				{/*<div className="gpt3__possibility-btn">
					<a href="google.com" target="_blank" rel="noreferrer">
						<button type="button">Download for Android</button>
					</a>
					<a
						className="gpt3__possibility-btn_ios"
						href="google.com"
						target="_blank"
						rel="noreferrer">
						<button type="button">Download for iOS</button>
					</a>
	</div>*/}
			</div>
		</div>
	);
};

export default Possibility;
