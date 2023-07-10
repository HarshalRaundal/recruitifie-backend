import { useState ,useContext, useEffect, useRef} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { ProfileContext } from '../profileDataContext/profileDataContext';
import "./Form.css";
import { FormSubmitToggleContext } from '../formSubmitToggleContext/FormSubmitToggle';

function CertificateDetails(props) {
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

    const [certificateDetails, setCertificateDetails] = useState({});

    const handleInputChange = (event) => {
        // console.log(event.target.name);
        let { name, value } = event.target;
        if(name === "certificate" ){
            const file  = event.target.files[0];
            setCertificateDetails((prevDetails) => ({
                ...prevDetails,
                [name]: file 
            }));
        }else {

            // console.log(name,value);
            setCertificateDetails((prevDetails) => ({
                ...prevDetails,
                [name]: value,
            }));
        }

        // updateData({[`certificateDetails${props.index}`]:certificateDetails});
    }


    useEffect(() => {
        if(isSubmitted) {
          toggleSubmitStatus();
          formRef.current.reset();
          setCertificateDetails((prevDetails) => ({}));
        }
        // console.log('Submitted:', isSubmitted);
      }, [isSubmitted]);

      useEffect(  () => {
         const updateDataState = async () =>{
            
            updateData({[`certificateDetails${props.index}`]:certificateDetails});
        }
        updateDataState();
      },[certificateDetails]);


    return (
        <Form noValidate validated={validated} ref={formRef} onSubmit={handleSubmit}>


            <Row className="mb-3 ">

                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    {/* <Form.Label>Select Date</Form.Label> */}
                    <Form.Control
                        // type="text" 
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        name="certificate"
                        placeholder="Certificate upload"  
                        className='file-upload'
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Col>
                    <InputGroup hasValidation as={Col} md="4">
                        <Form.Group controlId="validationCustom02">
                            <Form.Control 
                            type="text" 
                            name="certificateReceived" 
                            placeholder="Received (mm/yyyy)" 
                            pattern="(0[1-9]|1[0-2])\/\d{4}" 
                            onChange={handleInputChange}
                            required />
                            <Form.Control.Feedback type="invalid">
                                Please enter a date in the format mm/yyyy.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <InputGroup.Text>📅</InputGroup.Text>
                    </InputGroup>
                </Col>

            </Row>
        </Form>
    );
}

export default CertificateDetails;