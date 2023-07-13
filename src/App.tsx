import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { IssueContextProvider } from './contexts/IssueContext';

function App() {
  return (
    <div className='mb-[132px]'>
      <IssueContextProvider>
        <RouterProvider router={router} />
      </IssueContextProvider>
    </div>
  );
}

export default App;
