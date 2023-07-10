import React from 'react'
import { Dropdown } from 'react-bootstrap';
import {IoPersonCircleSharp} from 'react-icons/io5';
import MyLogo from "../../images/recruitifyLogo.svg";
import { useContext } from 'react';
import { ThemeContext } from '../../components/themeContext/ThemeContext';

const Navbar = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  const profileBtn = {
      borderRadius:"1,000px"
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100  m-0 p-0"  >
      <div className="container-fluid  m-0 p-2 px-md-5" style={theme} >
        <div className="navbar-brand  w-50 d-flex justify-content-start " href="#">
        {/* logo */}
        <img src={MyLogo} alt="Recruitify Logo" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse w-50  " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  w-100 d-flex justify-content-around align-items-center">
            <li className="nav-item">
              <div className="nav-link active text-white" aria-current="page" href="#">Jobs</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active text-white" aria-current="page" href="#">Career Upgrade</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active text-white" aria-current="page" href="#">Career Assisatance</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active text-white" aria-current="page" href="#">Plans</div>
            </li>
            <li className="nav-item border d-flex align-items-center btn btn-sm " style = {{backgroundColor:"#808080", color:"#FFFFFF", borderRadius:"1000px" , height:"2.5em"}}>
              
              <IoPersonCircleSharp className='fs-3'/>

              <Dropdown>
                <Dropdown.Toggle variant="pills" id="dropdown-basic" className='text-white'>
                  Profile
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#action1">Action 1</Dropdown.Item>
                  <Dropdown.Item href="#action2">Action 2</Dropdown.Item>
                  <Dropdown.Item href="#action3">Action 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

          </ul>

        </div>
      </div>
      
    </nav>
  )
}

export default Navbar