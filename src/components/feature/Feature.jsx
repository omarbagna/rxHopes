import React from 'react';
import './feature.css';

const Feature = ({ title, text, type }) => {
	return (
		<>
			{type === 'gradient' ? (
				<div className="gpt3__features-container__feature">
					<div className="gpt3__features-container__feature-title_alt">
						<div />
						<h1>{title}</h1>
					</div>
					<div className="gpt3__features-container__feature-text_alt">
						<p>{text}</p>
					</div>
				</div>
			) : (
				<div className="gpt3__features-container__feature">
					<div className="gpt3__features-container__feature-title">
						<div />
						<h1>{title}</h1>
					</div>
					<div className="gpt3__features-container__feature-text">
						<p>{text}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Feature;
