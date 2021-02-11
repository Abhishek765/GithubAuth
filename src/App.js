import './App.css';

import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import { useState } from 'react';
function App() {
  const [isRepo, setisRepo] = useState(false);
  const [AccessCode, setAccessCode] = useState("");
  return (
    <>
      {/* <div className="Content">
        <NavBar />
        <Main />

      </div> */}
      {/* <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/signin/repos" component={Projects} />
          <Route component={ErrorPage} />
        </Switch> */}



      {isRepo === false ? <Home isRepo={isRepo} setisRepo={setisRepo} AccessCode={AccessCode} setAccessCode={setAccessCode} /> : <Projects AccessCode={AccessCode} />}
      {/* </BrowserRouter> */}

    </>
  );
}

export default App;
