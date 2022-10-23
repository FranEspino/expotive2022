
import { AppState } from "./context/AppState";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <AppState>
      <Routes>
        <Route
          path="/"
          element={
            <>
             <HomePage/>
            </>
          }
        />
      </Routes>
    </AppState>
  );
}

export default App;
