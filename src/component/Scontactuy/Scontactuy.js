import React from 'react';
import is from 'is_js';
import emailjs from 'emailjs-com';
import {Container, Button, Form} from "react-bootstrap";

import './Scontactuy.css'

export default function Scontactuy() {
    const [email, setEmail] = React.useState('')
    const [validate, setValidate] = React.useState(false);
    const [textarea, setTextArea] = React.useState('');
    const [validEmail, setValidEmail] = React.useState(false);
    const [validMessage, setValidMessage] = React.useState(false);
    const [isLoading, setLoading] = React.useState(false);
    const [textBtnSend, setTextBtnSend] = React.useState('WYŚLIJ');

    const  validateControl = (value, validation)=> {
        setValidate(false)

        if (validation === 'email') {
            if (value.length > 4) {
                setValidEmail(is.email(value));
            }else{
                setValidEmail(false);
            }
        }

        if (validation === 'message') {
            if (value.length >= 10) {
                setValidMessage(Boolean(value.length >= 10))
            }else{
                setValidMessage(false)
            }
        }

        if (validEmail && validMessage) {
            setValidate(true)
        }else{
            setValidate(false)

        }
    }

    const handleTextareaChange = (event) =>{
        setTextArea(event.target.value)
        validateControl(event.target.value, 'message')

    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        validateControl(event.target.value, 'email')

    }

    const handleSend = () =>{
        setValidate(false)
        setTextBtnSend('WYSYŁAM...')
        setLoading(true);
    }

    const handleClose = () =>{
        setEmail('');
        setTextArea('');
        setTextBtnSend('WYŚLIJ')

    }

    React.useEffect(()=>{
        if (isLoading) {
            networkRequest().then(() => {
                setLoading(false);
                handleClose()
            });
        }
    }, [isLoading])

    function networkRequest() {
        // const login_email = 'biuro@hkgroup.pl';
        // const password_email = 'Poleska123';
        // const host_email = 'server796878.nazwa.pl';
        // const template_it = 'template_hkgroup';
        return new Promise((resolve) => {
            const template_params1 = {
                "reply_to": email,
                "from_name": 'www.hkgroup.pl',
                "to_name": "www.hkgroup.pl",
                "message": textarea
            }
            const service_id = 'service_hkgroup';
            const template_it = 'template_hkgroup';
            const user_id ="user_Fae8JGudb10fQXLUaSFBd";

            console.log(template_params1);

            emailjs.send(service_id, template_it, template_params1, user_id)
                .then((result) => {
                    setTimeout(resolve, 100);
                    console.log('Send: ',result.text);
                }, (error) => {
                    setTimeout(resolve, 100);
                    console.log('Error: ',error.text);
                });
        });
    }


    return (
        <Container fluid={false} className={'mb-5'}>
            <div className={'scontactuy-title'}>
                SKONTAKTUJ SIĘ Z NAMI
            </div>

            <Form className={'input-form'}>
                <Form.Control className={"edit-send"}
                              type="email"
                              placeholder="e-mail"
                              value={email}
                              onChange={(event)=>handleEmailChange(event)}/>
                <Form.Control className={'edit-send'}
                              name="message"
                              maxLength={200}
                              as="textarea"
                              placeholder="treść wiadomości"
                              value={textarea}
                              onChange={(event)=>handleTextareaChange(event)}
                />

                <Button disabled={!validate} className={'button-send-email'} variant="dark" onClick={handleSend}>
                    {textBtnSend}
                </Button>
            </Form>
        </Container>
    )
}
