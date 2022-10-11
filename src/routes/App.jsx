import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '@containers/Layout';
import RecoveryPassword from '@pages/RecoveryPassword';
import Login from '@pages/Login';
import Home from '@pages/Home';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';
import '@styles/global.css';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/password-recovery' element={<RecoveryPassword />} />
					<Route path='/send-email' element={<SendEmail />} />
					<Route path='/new-password' element={<NewPassword />} />
					<Route path='/account' element={<MyAccount />} />
					<Route path='/signup' element={<CreateAccount />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/orders' element={<Orders />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
