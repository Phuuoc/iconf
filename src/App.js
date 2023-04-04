import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountList from "./AccountList";
import AccCreate from "./AccountCreate";
import AccUpdate from "./AccountUpdate";

function App() {
  return (
    <div className="App">
      <h1>Demo CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccountList />}></Route>
          <Route path="/account/create" element={<AccCreate />}></Route>
          <Route path="/account/update/:accid" element={<AccUpdate />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
