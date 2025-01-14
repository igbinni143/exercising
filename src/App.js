import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage"
import FormLogin from "./pages/formlogin"

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/login' element={<FormLogin />} />
			</Routes>
		</Router>
	)
}

export default App
