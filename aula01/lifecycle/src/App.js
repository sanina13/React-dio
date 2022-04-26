import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(props){
		super(props)

		this.state = {
			clock: 1000,
			copo: 'água'
		}
	}

	componentDidMount() {
		window.setTimeout(() => {
			this.setState({
				copo: 'sumo'
			})
		}, 3000)
	}

	alterarCopo = () => {
		this.setState({
			copo: 'refrigerante'	
		})
	}

	render(){
		const {clock, copo} = this.state
		return(
			<div>
				<h1>{clock}</h1>
				<button onClick={() => this.alterarCopo()}>{copo}</button>
			</div>
		)
	}
}

export default App;
