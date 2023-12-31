import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Users } from "./pages/Users";
import { Messages } from "./pages/Messages";
import { Analytics } from "./pages/Analytics";
import { FileManager } from "./pages/FileManager";
import { Order } from "./pages/Order";
import { Saved } from "./pages/Saved";
import { Settings } from "./pages/Settings";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="messages/" element={<Messages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<h1> Not Found</h1>} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
