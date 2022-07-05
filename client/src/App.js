import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoComponent from "./Components/TodoComponent";
import WelcomeComponent from "./Components/WelcomeComponent";

function App() {

	return (
    <BrowserRouter>
    <Routes>
		{/* <div className="Wrapper"> */}
                <Route path="/" element={<WelcomeComponent />} />       
                <Route path="/todo" element={<TodoComponent/>} />
		{/* </div> */}
    </Routes>
    </BrowserRouter>
        )
}

export default App;
