import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';

function App() {
  return (
    <div className='mb-[132px]'>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
