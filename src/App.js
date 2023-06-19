import { Routes,Route } from "react-router-dom";
import Search from "./pages/search";

function App() {
  return (
    <Routes> 
      <Route path="/search" exact element={<Search />} />
    </Routes>
    )
}

export default App;
