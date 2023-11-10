import {  Route, Routes } from 'react-router-dom';
import AddItem from '../pages/AddItem';
import ItemList from '../pages/List';
import EditItem from '../pages/EditItem';
import Register from '../pages/Register';
import Login from '../pages/Login/Login';


const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route index element={<ItemList />} />
      <Route path="add" element={<AddItem />} />
      <Route path="edit" element={<EditItem />} />
      
    </Routes>
  );
}

export default App;
