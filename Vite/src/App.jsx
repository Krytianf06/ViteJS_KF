// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import "./App.css";
import useBearStore from "./store";
import { shallow } from "zustand/shallow";

function App() {
	// const [count, setCount] = useState(0)

	const { orange, violet, imie } = useBearStore(
		(state) => ({
			orange: state.orange,
			violet: state.violet,
			imie: state.imie,
		}),
		shallow
	);

	const setOrange = useBearStore((state) => state.setOrange);
	const setViolet = useBearStore((state) => state.setViolet);
	const setImie = useBearStore((state) => state.setImie);
	const removeAllBears = useBearStore((state) => state.removeAllBears);
	const removeText = useBearStore((state) => state.removeText);

	const wyslij = (ev) => {
		ev.preventDefault();
		console.log(ev);
		console.log("test");
	};

	return (
		<div className='App'>
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
				<h2>Imie: {imie}</h2>
			</div>
			<form onSubmit={wyslij}>
				<label>
					Imie:
					<input type='text' name='imie' value={imie} onChange={setImie} />
				</label>
				<br />
				<input type='submit' value='Wyślij' />
			</form>
		</div>
		// <div className="App">
		//   <div>
		//     <a href="https://vitejs.dev" target="_blank">
		//       <img src="/vite.svg" className="logo" alt="Vite logo" />
		//     </a>
		//     <a href="https://reactjs.org" target="_blank">
		//       <img src={reactLogo} className="logo react" alt="React logo" />
		//     </a>
		//   </div>
		//   <h1>Vite + React</h1>
		//   <div className="card">
		//     <button onClick={() => setCount((count) => count + 1)}>
		//       count is {count}
		//     </button>
		//     <p>
		//       Edit <code>src/App.jsx</code> and save to test HMR
		//     </p>
		//   </div>
		//   <p className="read-the-docs">
		//     Click on the Vite and React logos to learn more
		//   </p>
		// </div>
	);
}

export default App;
