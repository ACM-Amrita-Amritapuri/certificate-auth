import { Routes,Route } from "react-router-dom";
import Search from "./pages/search";
import Certificate from "./pages/certi";



function App() {
  return (
    <Routes> 
      <Route path="/search" exact element={<Search />} />
      <Route path="/certi" exact element={<Certificate />} />
      <Route path="/certi/:id" exact element={<Certificate />} />
     
    </Routes>
    )
}

export default App;
