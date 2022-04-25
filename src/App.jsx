import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import AboutMe from './views/AboutMe/AboutMe.jsx';
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/aboutme">
            <AboutMe />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
