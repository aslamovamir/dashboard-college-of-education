import bootstrapSwitchButtonReact from 'bootstrap-switch-button-react';
import React, { Component } from 'react'
import { Form, Button, Col, Container, ToggleButton } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

class InputField extends Component {
  render() {
    return (
        <Container className='container-style' style={{width: '700px', height:'360px'}}>
            <Form>
                <Form.Group controlId='feedback-area-id'>
                    <Form.Label className='feedback-label'>Feedback</Form.Label>
                    <Form.Control as="textarea" rows={5} className='textarea-style' style={{width: '635px'}} name='feedback-area'/>
                </Form.Group>

                <div className='form-group'>
                    <Form.Group controlId='advisor-id' className='col-sm-6'>
                        <Form.Label>Advisor</Form.Label>
                        <Form.Control as='select' name='advisor-select' defaultValue={'Alyssa Chism'} style={{width: '300px'}}>
                            <option value="Alyssa_Chism-choice">Alyssa Chism</option>
                            <option value='Reginald_Lucien-choice'>Reginald Lucien</option>
                            <option value="Deanna_Rieke-choice">Deanna Rieke</option>
                            <option value="Bobby_Brown-choice">Bobby Brown</option>
                            <option value="Haley_Copeland-choice">Haley Copeland</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='appointment-type-id' className='col-sm-3'>
                        <Form.Label>Appointment</Form.Label>
                        <Form.Control as='select' name='appointment-select' defaultValue={'Individual (Microsoft Teams)'} style={{width: '300px'}}>
                            <option value="individual-MT-choice">Individual (Microsoft Teams)</option>
                            <option value='walk-in-choice'>Walk-in</option>
                            {/* <option value="Ken_Christensen-choice">Ken Christensen</option> */}
                        </Form.Control>
                    </Form.Group>
                </div>
                <div className='form-group'>
                    <Form.Group controlId='advising-id' className='col-sm-6'>
                        <Form.Label>Advising</Form.Label>
                        <Form.Control as='select' name='advising-select' defaultValue={'College of Education'} style={{width: '300px'}}>
                            <option value='education-choice'>College of Education</option>
                            <option value="honors-choice">College of Honors</option>
                            <option value="engineering-choice">College of Engineering</option>
                            <option value="business-choice">Muma College of Business</option>
                            <option value="behavioral-community-choice">College of Behavioral and Community Sciences</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='autotext-options-id' className='col-sm-3'>
                        <Form.Label>AutoTextOptions</Form.Label>
                        <Form.Control as='select' name='autotext-options-select' defaultValue={'Default'} style={{width: '300px'}}>
                            <option value='default'>Default</option>
                            <option value="non-default-1">Non-Default-1</option>
                            <option value="non-default-2">Non-Default-2</option>
                        </Form.Control>
                    </Form.Group>
                </div>
                
                <div className='row d-flex justify-content-center text-center'>
                    <Form.Group controlId='survey-switch' className='col-sm-4'>
                        <Form.Label>Survey</Form.Label>
                        <BootstrapSwitchButton checked={false} onlabel='Yes' offlabel='No' onstyle='primary' width={50} />
                    </Form.Group>
                    <Form.Group controlId='email-switch' className='col-sm-4'>
                        <Form.Label>Email</Form.Label>
                        <BootstrapSwitchButton checked={false} onlabel='Yes' offlabel='No'onstyle='primary' width={50} />
                    </Form.Group>
                    <Form.Group controlId='flag-switch' className='col-sm-4'>
                        <Form.Label>Flag</Form.Label>
                        <BootstrapSwitchButton checked={false} onlabel='Yes' offlabel='No' onstyle='primary' width={50} />
                    </Form.Group>
                </div>
                <Button varient='primary' className='button-input'>Add Note</Button>
            </Form>  
        </Container>
    )
  }
}

export default InputField