import { ToastContainer } from "react-toastify";
import "./App.css";
import { RoutesMain } from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./contexts/ClientPageContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
