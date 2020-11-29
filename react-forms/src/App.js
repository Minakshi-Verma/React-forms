
import './App.css';
// import components
import StdFormFunctional from '../src/StandardForm/StdFormFunctional'     //functional component
import ReactHookForm from './react-hook-form/react-hook-form'
import StdFormClass from './StandardForm/StdFormClass';
import FormikForm from './formik-form/FormikForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col col-md-5 border m-4">
            <h1>STD FORM USING FUNCTIONAL COMPONENT</h1>
            <StdFormFunctional />            
          </div>
          <div className="col col-md-5 border m-4">
            <h1>STD FORM USING CLASS <br /> COMPONENT</h1>
            <StdFormClass />            
          </div>
        </div>
        <div className="row">
          <div className="col col-md-5 border m-4">
            <h1>REACT HOOK FORM</h1>
            <ReactHookForm />            
          </div>
          <div className="col col-md-5 border m-4">
            <h1>FORMIK FORM WITH YUP</h1>
            <FormikForm />            
          </div>
        </div>

      </div>
     
        
    </div>
  );
}

export default App;
