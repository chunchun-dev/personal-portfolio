import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '25ch',
    },
}));


function ContactForm() {

    const classes = useStyles();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function formSubmit(e) {

        e.preventDefault()

        emailjs.sendForm('gmail', 'template_tyjkfaf', e.target, 'user_DJgeUl9zJpKZGAKcjXlWo')
            .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName('')
        setEmail('')
        setMessage('')
        alert('Your form has been sent!')
    }

    return (
        <form 
            className={classes.root}
            styles={{ display: 'grid', placeItems: 'center' }}
            onSubmit={formSubmit}
        >
            
            <TextField variant='filled' name='name' label="Name" value={name} onChange={(e) => { setName(e.target.value) }} required style={{ width: '100%' }}/>
            <TextField variant='filled' name='email' label="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} required style={{ width: '100%' }}/>
            <TextField variant='filled' name='message' label="Message" value={message} onChange={(e) => { setMessage(e.target.value) }} required style={{ width: '100%' }}/>
            <Button type='submit' color='secondary' variant='contained' style={{ width:'100%' }}>
                Submit
            </Button>
        </form>
    )
}

export default ContactForm
