import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FooterNav from './components/FooterNav/FooterNav';



//Pages
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			
			<Switch>
				<Route path="/" exact component={Home} />
				
			</Switch>
			
			<Footer />
			<FooterNav/>
		</Router>
	);
}

export default App;
