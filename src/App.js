import "./base/assets/scss/app.scss";
import MainPage from '@/main-page/pages/index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage></MainPage>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
