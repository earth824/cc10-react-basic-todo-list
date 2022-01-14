import Header from './components/Header';
import Router from './components/Router';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-5 mx-auto mw-xs">
          <Router />
        </div>
      </div>
    </>
  );
}

export default App;
