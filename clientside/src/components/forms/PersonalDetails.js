import { useState, useContext, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./Form.css";
import  {ProfileContext}  from '../profileDataContext/profileDataContext';
import { FormSubmitToggleContext } from '../formSubmitToggleContext/FormSubmitToggle';

function PersonalDetails() {
    const [validated, setValidated] = useState(false);

    const {isSubmitted, toggleSubmitStatus } = useContext(FormSubmitToggleContext);

    const formRef = useRef(null);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    
    
    const {data, updateData} = useContext(ProfileContext);
    
    const [personalDetails, setPersonalDetails] = useState({});

    useEffect(() => {
        if(isSubmitted) {
          toggleSubmitStatus();
          formRef.current.reset();
          setPersonalDetails((prevDetails) => ({}));
        }
        // console.log('Submitted:', isSubmitted);
      }, [isSubmitted]);

      useEffect(  () => {
         const updateDataState = async () =>{

             await updateData({"personalDetails":personalDetails});
        }
        updateDataState();
      },[personalDetails]);

    const handleInputChange = async (event) => {
        // console.log(event.target.name);
        const { name, value } = event.target;
        await setPersonalDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));

    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formRef}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Control
                        required
                        type="number"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <InputGroup hasValidation>
                        <Form.Control
                            type="mail"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            name="mail"
                            onChange={handleInputChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a email.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                    {/* <Form.Label>Select Date</Form.Label> */}
                    <Form.Control type="date" placeholder="Date of Birth" name="dob"
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Control type="text" placeholder="Current Address" name="address"
                        onChange={handleInputChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid address.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom05">
                    {/* <Form.Control type="select" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback> */}
                    <Form.Select aria-label="Current City" name="city"
                        onChange={handleInputChange}>
                        <option>Current City</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Nashik">Nashik</option>
                    </Form.Select>
                </Form.Group>

            </Row>

            <Row className="mb-3">

                <Form.Group as={Col} md="4" controlId="validationCustom07">
                    <Form.Control type="number" placeholder="Pincode" required name="pincode"
                        onChange={handleInputChange} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Pincode.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom08">

                    <Form.Select aria-label="working status" name="workingStatus"
                        onChange={handleInputChange}  >
                        <option>Working Status</option>
                        <option value="Full-Time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Unemployed">Unemployed</option>
                    </Form.Select>
                </Form.Group>


                <Form.Group as={Col} md="4" controlId="validationCustom09">
                    <Form.Select aria-label="MaritalStatus" name="maritalStatus"
                        onChange={handleInputChange}>
                        <option>Marital Status</option>
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                        <option value="PreferNotToSay">Prefer not to say</option>
                    </Form.Select>
                </Form.Group>

            </Row>

        </Form>
    );
}

export default PersonalDetails;