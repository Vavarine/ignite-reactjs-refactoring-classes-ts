import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </>
);

export default App;
