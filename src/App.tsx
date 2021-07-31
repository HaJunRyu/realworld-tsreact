import Navigator from './components/Navigator';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import PATH from './routes/path';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Navigator />
      <Switch>
        <Route path={PATH.HOME} component={Home} />
        <Route path={PATH.SIGN_IN} component={SignUp} />
        <Route path={PATH.SIGN_UP} component={SignIn} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
