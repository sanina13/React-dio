import logo from './logo.svg';
import './App.css';
import Button from "./Button"

const App = () => {

	const soma = (n1, n2) => alert(n1 + n2)
	return(
		<div className="App">
			Hello World
			<Button onClick ={() => soma(10,30)} nome = "Tiago Sanina"/>
		</div>
	)	
}

export default App;
