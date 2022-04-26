import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Projects from './views/MyProjects/MyProjects.jsx';
import Profile from './views/Profile/Profile.jsx';
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
