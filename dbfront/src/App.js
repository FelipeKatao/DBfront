import NavComp from './components/NavComp.js'
import TableComp from './components/TableComp.js'
import {BrowserRouter, Switch, Route}  from 'react-router-dom';

function App() {
  
  return (
    <>
    <NavComp></NavComp>
    <Switch>
      <Route path="/funcionarios" component={TableComp}></Route>
    </Switch>
    </>
  )
}

export default App;
