import logo from './logo.svg';
import './App.css';
import Button from "./Button"

const App = () => {

	const soma = (n1, n2) => n1 + n2
	return(
		<div className="App">
			Hello World
			{soma(2,3)}
		</div>
	)	
}

export default App;
