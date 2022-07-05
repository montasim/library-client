import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students/Students";
import Books from "./pages/Books/Books";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="books" element={<Books />} />
      </Routes>
    </div >
  );
}

export default App;
