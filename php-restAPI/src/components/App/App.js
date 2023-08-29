import HPbody from '../HPbody/HPbody';
import '../App/App.css'
import Categories from '../Categories/Categories';
import Directory from '../Dictionary/Dictionary';
import Converstations from '../Conversations/Conversations';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from '../Root';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='/' element={<HPbody />}/>
      <Route path='/category' element={<Categories />}/>
      <Route path='/directory' element={<Directory />}/>
      <Route path='/conversation' element={<Converstations />}/>
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;
