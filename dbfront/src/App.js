import NavComp from './components/NavComp.js'
import TableComp from './components/TableComp.js'
import {Switch, Route}  from 'react-router-dom';
import Addfield from './components/AddField.js';

function App() {
  
  return (
    <>
    <NavComp></NavComp>
    <Switch>
      <Route path="/funcionarios" component={TableComp}></Route>
      <Route path="/adicionar" component={Addfield}></Route>
    </Switch>
    </>
  )
}

export default App;
