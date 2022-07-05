import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students/Students";
import Books from "./pages/Books/Books";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="students" element={<Students />} />
          <Route path="books" element={<Books />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
