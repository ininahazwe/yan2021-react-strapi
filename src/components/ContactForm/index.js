import React from 'react';
import {TextField} from "@material-ui/core";
import {FormContainer, Form, FormColumn1, FormColumn2} from "./ContactForm.elements";
import {Title2} from "../Services/Services.elements";
import {Button} from "../ButtonElements";

const ContactForm = () => {
    return (
        <>
            <FormContainer>
                <Title2>Contact us</Title2>
                <Form noValidate autoComplete="off">
                    <FormColumn1>
                        <TextField id="outlined-basic" label="Full name" variant="outlined" />
                        <TextField id="outlined-basic" label="Subject" variant="outlined" />
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                        <TextField id="outlined-basic" label="Phone number" variant="outlined" />
                    </FormColumn1>
                    <FormColumn2>
                        <TextField id="outlined-basic" label="Message" multiline rows={8} variant="outlined" />
                        <Button>Send</Button>
                    </FormColumn2>
                </Form>
            </FormContainer>
        </>
    )
}

export default ContactForm