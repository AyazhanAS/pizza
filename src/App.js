import { useEffect, useState } from "react";
import { Route } from "react-router-dom"

import { Header } from "./components"
import { Home, Card } from "./pages";




function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/db.json").then((resp)=>resp.json()).then(json=>{
      setPizzas(json.pizzas)
    })
  }, [])
 console.log(pizzas)
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">

          <Route path="/" exact render = {()=><Home items = {pizzas}/>}/>
          <Route path="/card" component={Card} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
