import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
	return (
		<div className="gpt3__whatgpt3 section__margin" id="about">
			<div className="gpt3__whatgpt3-feature">
				<Feature
					type="gradient"
					title="What is this?"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
				/>
			</div>
			<div className="gpt3__whatgpt3-heading">
				<h1 className="gradient__text-alt">Premium Care. Personal Touch.</h1>
			</div>
			<div className="gpt3__whatgpt3-container">
				<Feature
					type="gradient"
					title="Reason 1"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
				/>
				<Feature
					type="gradient"
					title="Reason 2"
					text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
				/>
				<Feature
					type="gradient"
					title="Reason 3"
					text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
				/>
			</div>
		</div>
	);
};

export default WhatGPT3;
