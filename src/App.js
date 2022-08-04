import React from 'react';

import {
	Footer,
	Possibility,
	//Features, WhatGPT3,
	Header,
} from './containers';
import { CTA, Navbar } from './components';
import './App.css';
import './index.css';

const App = () => {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			{/*<WhatGPT3 />
			<Features />*/}
			<Possibility />
			<CTA />
			<Footer />
		</div>
	);
};

export default App;
