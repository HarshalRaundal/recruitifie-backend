import React, { useContext ,useEffect } from 'react'
import { useState } from 'react';
import backgroundImage from "../../images/backgroundImage.svg";
import "./ResumeBuilding.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PersonalDetails from '../../components/forms/PersonalDetails';
import AcademicDetails from '../../components/forms/AcademicDetails';
import { IoMdAddCircleOutline } from "react-icons/io";
import CertificateDetails from '../../components/forms/CertificateDetails';
import { ProfileContext } from '../../components/profileDataContext/profileDataContext';
import { FormSubmitToggleContext } from '../../components/formSubmitToggleContext/FormSubmitToggle';

const ResumeBuilding = () => {

  const { data, updateData } = useContext(ProfileContext);
  const {isSubmitted, toggleSubmitStatus } = useContext(FormSubmitToggleContext);

  let educationNumber = data.educationNumber;
  let certificateNumber = data.certificateNumber;
  // console.log("data: ",data);

  const [academicComponents, setAcademicComponents] = useState([]);
  const handleAddacademicComponents = () => {
    educationNumber++;
    updateData({ "educationNumber": educationNumber });
    setAcademicComponents([...academicComponents, <AcademicDetails key={academicComponents.length} index={educationNumber} />]);
  };
  const [certificateComponents, setCertificateComponents] = useState([]);
  const handleAddCertificateComponents = () => {
    certificateNumber++;
    updateData({ "certificateNumber": certificateNumber });
    setCertificateComponents([...certificateComponents, <CertificateDetails key={certificateComponents.length} index={certificateNumber}/>]);
  };

  const backgroundTheme = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    color: "#FFFFFF"
  }




  
  const handleFormSubmit = async () =>{
    console.log("Form submmited !");
    // console.log("Form State: " ,data);
    if( Object.keys(data).length<= 2){ alert("Fill Complete form !");return;}
    

    await fetch('http://localhost:5000/api/candidateProfileForm', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(data)
  }).then(response => response.json().then(data => { 
      console.log(data);
      toggleSubmitStatus();
  }));

  }
  
  return (
    <div style={backgroundTheme} className='p-2  p-md-5'>

      <div className=' container py-sm-0 py-md-5  col-sm-12 col-md-10 form-container d-flex-column ' style={{ backgroundColor: "#CFD3D8", borderRadius: "12px" }}>

        <div className="progress form-bar" style={{ height: "8px", width: "95%", borderRadius: "11px" }}>
          <div className="progress-bar" role="progressbar" style={{ width: "25%", backgroundColor: "#FFCA27" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          </div>
        </div>

        <div className=' '>

          <p className='fs-2 pt-2 text-dark fw-bold'>Build your profile</p>
          <p className='text-dark'>With a well-crafted professional profile, you'll showcase your expertise and attract the attention of potential employers. Good luck!</p>
          <div>
            <div className='btn fw-bold fs-6' style={{ backgroundColor: "#FFFFFF", color: "#475569", borderRadius: "1000px", height: "2.5em" }}>Auto upload Resume</div>
            <div className='d-flex my-2 align-items-center justify-content-center'>
              <AiOutlineInfoCircle className='text-secondary fs-5 mx-2' />
              <div className="fs-6" style={{ color: "#D97706", fontWeight: "600" }}>
                Upload max 10MB .pdf file only
              </div>
            </div>
          </div>

        </div>

        <div className='container-divider'></div>

        {/* Personal Details Column */}
        <div className=' row text-dark w-100 m-0 p-2 '>
          <div className='col '>
            <div className='text-start fw-bold text-secondary text-uppercase m-1' style={{ fontSize: "10px" }}>Personal Details</div>
            <PersonalDetails />
          </div>
        </div>

        {/*  */}
        <div className='container-divider'></div>


        {/* Academic Details Column */}
        <div className=' row text-dark w-100 m-0 p-2  '>
          <div className='col '>
            <div className='text-start fw-bold text-secondary text-uppercase m-1 ' style={{ fontSize: "10px" }}> Academic Details</div>
            {/* <AcademicDetails /> */}
            {academicComponents.map((component, index) => (
              <div key={index}>{component}</div>
            ))}
          </div>
        </div>
        {/*  */}

        <div className=' d-flex btn align-items-center text-dark w-100 m-1 ' onClick={handleAddacademicComponents}>
          <IoMdAddCircleOutline className='mx-1 ' style={{ fontWeight: "600", fontSize: "20px", lineHeight: "20px", color: "#2E3D55" }} />
          <div className=' text-start m-1 fs-6' style={{ fontWeight: "600", fontSize: "14px", lineHeight: "20px", color: "#2E3D55" }}>Add education</div>
        </div>

        <div className='container-divider'></div>
        {/* Certificate Details Column */}

        <div className=' row text-dark w-100 m-0 p-2  '>
          <div className='col '>

            <div className='text-start fw-bold text-secondary text-uppercase m-1 ' style={{ fontSize: "10px" }}>Certificates awarded during your Academic years</div>
            {/* <CertificateDetails /> */}
            {certificateComponents.map((component, index) => (
              <div key={index}>{component}</div>
            ))}
          </div>
        </div>
        {/*  */}

        <div className=' d-flex btn align-items-center text-dark w-100 m-1 ' onClick={handleAddCertificateComponents}>
          <IoMdAddCircleOutline className='mx-1 ' style={{ fontWeight: "600", fontSize: "20px", lineHeight: "20px", color: "#2E3D55" }} />
          <div className=' text-start m-1 fs-6' style={{ fontWeight: "600", fontSize: "14px", lineHeight: "20px", color: "#2E3D55" }}>Add more</div>
        </div>

        <div className=' row align-items-center justify-content-center' >
          <div className='row text-secondary w-75 justify-content-evenly'>
            <div className='col-sm-12 col-md-3 btn btn-lg bg-light d-flex align-items-center justify-content-center m-2 ' style={{ fontWeight: "600", color: "#2E3D55" }}>
              Back
            </div >
            <div className='col-sm-12 col-md-5 btn btn-lg bg-warning  d-flex align-items-center justify-content-center m-2' style={{ fontWeight: "600", color: "#2E3D55" }} onClick={handleFormSubmit}>
              Continue building resume
            </div>
            <div className='col-sm-12 col-md-3 btn btn-lg bg-light  d-flex align-items-center justify-content-center m-2' style={{ fontWeight: "600", color: "#2E3D55" }}>
              Skip for now
            </div>

          </div>
        </div>

      </div>
    </div >
  )
}

export default ResumeBuilding