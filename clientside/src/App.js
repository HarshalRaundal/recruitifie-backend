import './App.css';
import Navbar from "./components/navbar/Navbar"
import ResumeBuilding from './screens/resumeBuilding/ResumeBuilding';

//  Importing dependencies for bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// import theme context
import { ThemeProvider } from './components/themeContext/ThemeContext';
import { ProfileProvider } from './components/profileDataContext/profileDataContext';
import { FormSubmitToggleProvider } from './components/formSubmitToggleContext/FormSubmitToggle';
function App() {
  return (

    <div className="App">
      <ThemeProvider>
        <FormSubmitToggleProvider>
          <ProfileProvider>
            <div className=''>
              <Navbar />
            </div>
            <div className='hero'>
              <ResumeBuilding />
            </div>
          </ProfileProvider>
        </FormSubmitToggleProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
