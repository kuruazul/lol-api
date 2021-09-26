
import './App.css';

import Container from './components/Container'
import { ListProvider } from './Contexts/List';
function App() {  
    return ( 
      <ListProvider>
    <div className = "App" >
      <Container/>
      </div>
      </ListProvider>
    );
}

export default App;