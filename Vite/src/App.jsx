import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css";


function App() {
	const [count, setCount] = useState(0)

	


	return (
		
		<div className="App">
		  <div>
		    <a href="https://vitejs.dev" target="_blank">
		      <img src="/vite.svg" className="logo" alt="Vite logo" />
		    </a>
		    <a href="https://reactjs.org" target="_blank">
		      <img src={reactLogo} className="logo react" alt="React logo" />
		    </a>
		  </div>
		  <h1>Vite + React</h1>
		  <div className="card">
		    <button onClick={() => setCount((count) => count + 1)}>
		      count is {count}
		    </button>
		    <p>
		      Edit <code>src/App.jsx</code> and save to test HMR
		    </p>
		  </div>
		  <p className="read-the-docs">
		    Click on the Vite and React logos to learn more
		  </p>
		</div>
	);
}

export default App;




// import useBearStore from "./store";
// import { shallow } from "zustand/shallow";

// const { orange, violet } = useBearStore(
// 	(state) => ({
// 		orange: state.orange,
// 		violet: state.violet,
// 	}),
// 	shallow
// );

// const setOrange = useBearStore((state) => state.setOrange);
// const setViolet = useBearStore((state) => state.setViolet);
// const removeAllBears = useBearStore((state) => state.removeAllBears);






{/* <div className='App'>
			<h1>Carrots</h1>
			<div className='card'>
				<button onClick={setOrange}>orange +</button>
				<br />
				<button onClick={setViolet}>violet +</button>
				<br />
				<button onClick={removeAllBears}>Remove</button>
			</div>
			<div>
				<h1>Owner</h1>
				<h2>Orange: {orange}</h2>
				<h2>Violet: {violet}</h2>
			</div>
		</div> */}