import ContactPage from './components/ContactPage';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-info bg-danger text-white">
        <div className="container-fluid justify-content-center">
          <span className="navbar-brand mb-0 h1 font-bold">React Conatct App with REDUX</span>
        </div>
      </nav>

      <Provider store={store}>
        <ContactPage />
      </Provider>

    </div>
  );
}

export default App;
