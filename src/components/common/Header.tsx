import { useParams, useLocation } from 'react-router-dom';

export default function Header() {
  const locationNow = useLocation();
  if (locationNow.pathname === '/error') return null;
  let {owner, repo} = useParams();
  return (
    <header className='header p-6 pl-16 bg-blue-500 text-white text-xl mb-5 flex items-center justify-center'>
      <h1>{owner}/{repo}</h1>
    </header>
  );
}
