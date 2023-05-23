import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store, { createTodo, fetchTodos, fetchCategories } from './store';
import { Link, HashRouter, Routes, Route } from 'react-router-dom';

import Categories from './Categories';
import Todos from './Todos';
import Todo from './Todo';
import TodoCreate from './TodoCreate';
import Search from './Search';
import CreateCategory from './CreateCategory';
import UpdateCategory from './UpdateCategory';


function App() {
  const {todos, categories} = useSelector(state => state);
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(fetchTodos());
    dispatch(fetchCategories());
  }, []);


  return (
    <div>
      <h1><Link to='/'>Acme Todos ({ todos.length })!!</Link></h1>
      <Link to='/create'>Create A Todo</Link>
      <Link to='/categories/create'>Create Category</Link>
      <Routes>
        <Route path='/' element={ <Search /> } />
        <Route path='/search/:term' element={ <Search /> } />
      </Routes>

      <Routes>
        <Route path='/categories/create' element={<CreateCategory/>}/>
        <Route path='/' element={ <Todos /> } />
        <Route path='/search/:term' element={ <Todos /> } />
        <Route path='/:id' element={ <Todo /> } />
        <Route path='/create' element={ <TodoCreate /> } />
        <Route path='/categories/:id' element={<UpdateCategory/>}/>
      </Routes>
      <Categories />
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);


