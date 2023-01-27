import React from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import { NavigationBar } from '../../Components/NavigationBar';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';

const RouterLayout: React.FC<{}> = () => {
	const match = useMatch('/');
	return <div>
		<NavBar />
		{!match && <NavigationBar />}
		<Outlet />
		<Footer />
	</div>;
};

export default RouterLayout;
