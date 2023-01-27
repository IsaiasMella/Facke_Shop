import { BrowserRouter } from 'react-router-dom';
import AppRouting from './Routing';
import { Modals } from './Modals';

function App() {
  return (
    <BrowserRouter>
      <AppRouting />
      <Modals/>
    </BrowserRouter>
  );
}

export default App;
