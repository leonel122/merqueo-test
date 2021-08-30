import "./styles/index.scss";
import NavBarComponent from "./components/NavBar";
import Posts from "./components/Posts";
import FormNewPost from "./components/FormNewPost";
import { Provider } from "react-redux";

import store from "./redux";

function App() {
  return (
    <div className="App">
      <div className="contentNavBar">
        <NavBarComponent />
      </div>
      <Provider store={store()}>
        <div className="contentBody">
          <div className="contentNewPost">
            <FormNewPost type="post" placeholder="Escribe aqui tu estado" />
          </div>
          <div className="contentCard">
            <Posts />
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
