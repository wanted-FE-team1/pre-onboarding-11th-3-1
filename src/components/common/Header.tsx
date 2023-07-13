import { useLocation } from 'react-router-dom';

function Header() {
	const locationNow = useLocation();
	if (locationNow.pathname === '/error') return null;
	if (locationNow.pathname === '/loading') return null;

	return (
		<div className=" flex items-center justify-center my-8 text-lg font-bold text-gray-800">
			facebook / react
		</div>
	);
}

export default Header;
