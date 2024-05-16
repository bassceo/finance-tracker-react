import NavBar from "./components/NavBar";
import Accounts from "./components/Accounts";
import {Routes, Route} from "react-router-dom";
import './index.css';
import Transactions from "./components/Transactions";

const App = () => {
  return < >
    <NavBar/>
    <Routes>
      <Route path="/" component={<></>} />
      <Route path="/accounts" element={<Accounts/>}/>
      <Route path="/transactions" element={<Transactions/>}/>

    </Routes>
  </>;
};

export default App;