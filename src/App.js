import { Route } from "react-router-dom"

import { Header } from "./components"
import { Home, Card } from "./pages";




function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">

          <Route path="/" exact component={Home} />
          <Card path="/card" component={Card} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
