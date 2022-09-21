// npm install @babel/core @babel/preset-env @babel/preset-react
// npm install webpack webpack-cli webpack-dev-server
// npm install babel-loader html-loader html-webpack-plugin
// estos son los comandos basicos y necesarios para armar una configuracion desde cero de un proyecto react

import React, {useState, Component} from 'react';
import {Component} from 'react/cjs/react.production.min';

const Button = () => {
	const [name, setName] = useState('Hola Mundo');
	return (
		<div>
			<h1>{name}</h1>
		</div>
	);
};

class App extends Component {
	render() {
		return <div>Hello, world</div>;
	}
}

// Hooks high order components

function ComponentWrapper(WrapperComponent) {
	class Wrapper extends Component {
		render() {
			return <WrapperComponent {...this.props} />;
		}
	}
	return Wrapper;
}
