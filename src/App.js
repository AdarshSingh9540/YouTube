
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import {store} from './utilis/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainCont from './components/MainCont';
import WatchPage from './components/WatchPage';


const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children:[{
    path:"/",
    element: <MainCont/>
  },
  {
    path:"watch",
    element: <WatchPage/>
  },
]
}])
function App() {
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
