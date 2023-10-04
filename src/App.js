import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import RecipeDetaisl from './components/recipeDetails/RecipeDetaisl';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<RecipeDetaisl />} />
      </Routes>
    </div>
  );
}

export default App;
