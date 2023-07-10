import { useState, useContext, useEffect, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {AiOutlineInfoCircle} from "react-icons/ai";

import "./Form.css";
import { ProfileContext } from '../profileDataContext/profileDataContext';
import { FormSubmitToggleContext } from '../formSubmitToggleContext/FormSubmitToggle';

function AcademicDetails(props) {
    const [validated, setValidated] = useState(false);

    const {isSubmitted, toggleSubmitStatus } = useContext(FormSubmitToggleContext);
    
    let formRef = useRef(null);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const {data, updateData} = useContext(ProfileContext);

    const [educationDetails, setEducationDetails] = useState({});

    const handleInputChange = (event) => {
        // console.log(event.target.name);
        const { name, value } = event.target;
        setEducationDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));

        // updateData({[`educationDetails${props.index}`]:educationDetails});
    }

    useEffect(() => {
        if(isSubmitted) {
          toggleSubmitStatus();
          formRef.current.reset();
          setEducationDetails((prevDetails) => ({}));
        }
        // console.log('Submitted:', isSubmitted);
      }, [isSubmitted]);

      useEffect(  () => {
         const updateDataState = async () =>{

            updateData({[`educationDetails${props.index}`]:educationDetails});
        }
        updateDataState();
      },[educationDetails]);

    return (
        <Form noValidate validated={validated} ref={formRef} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Institute/University Name"
                        name="universityName"
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Degree Type"
                        name="degreeType"
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            placeholder="Degree Name"
                            aria-describedby="inputGroupPrepend"
                            name="degreeName"
                            onChange={handleInputChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a degree name.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>

            <Row className="mb-3">

                <Form.Group as={Col} md="2" controlId="validationCustom03">
                    {/* <Form.Label>Select Date</Form.Label> */}
                    <Form.Control type="number"  placeholder="0" name="marks"
                        onChange={handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustom04">
                    <Form.Select aria-label="grading" name="marksGrading"
                        onChange={handleInputChange} >
                        <option>Cgpa</option>
                        <option value="1">Cgpa</option>
                        <option value="2">Sgpa</option>
                        <option value="3">Percentage</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                    <Form.Control type="text" placeholder="Starting Year (mm/yyyy)" name="startingDate"
                        onChange={handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                    <Form.Control type="text" placeholder="Passing Year (mm/yyyy)" name="passingDate"
                        onChange={handleInputChange} />
                </Form.Group>

            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom05">
                    <Form.Control as="textarea"  placeholder="Write about the highlights of your journey " style={{height:"10em"}}  name="journeyHighlights"
                        onChange={handleInputChange}/>
                </Form.Group>
                <div className='d-flex mt-2  '>

              <AiOutlineInfoCircle className='text-secondary fs-5 mx-2' />
              <div  style={{color:"#D97706",fontWeight:"600"}}>
              What impact would highlights create
              </div>
            </div>
            </Row>

        </Form>
    );
}

export default AcademicDetails;