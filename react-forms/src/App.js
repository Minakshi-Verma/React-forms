
import './App.css';
// import components
import StdFormFunctional from '../src/StandardForm/StdFormFunctional'     //functional component
import ReactHookForm from './react-hook-form/react-hook-form'
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col col-md-6">
            <h1>STD FORM</h1>
            <StdFormFunctional />            
          </div>
          <div className="col col-md-6">
            <h1>REACT HOOK FORM</h1>
            <ReactHookForm />            
          </div>
        </div>
      </div>
     
        
    </div>
  );
}

export default App;
