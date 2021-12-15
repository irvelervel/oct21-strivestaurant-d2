// this component will generate a form we're going to use for reserving a table!
// once filled up, we're going to send all the info to the striveschool apis

// because we need to collect the info from the form, we're going to need a state
// therefore, ReservationForm will be a class based component
import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// these are MORE SPECIFIC imports! these will weight less once you bundle your app

// which properties I need to send?
// name
// phone
// numberOfPeople
// smoking <-- true/false
// dateTime
// specialRequests

class ReservationForm extends Component {
    // every component needs to output some JSX...
    // in a class component you're going to return the JSX from the render() method
    // so render() must be defined in every class component

    state = {
        reservation: {
            name: '',
            phone: '',
            numberOfPeople: 1,
            smoking: false,
            dateTime: '',
            specialRequests: ''
        }
    }

    render() {
        return (
            // the <> tag is called a React Fragment, it's just a "virtual" wrapper
            <div className="my-3">
                <h2>Book your table here!</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" placeholder="Insert your name here" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Your phone</Form.Label>
                        <Form.Control type="tel" placeholder="Insert your phone here" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>How many people?</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check type="checkbox" label="Do you smoke?" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date & Time</Form.Label>
                        <Form.Control type="datetime-local" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Any special request?</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ReservationForm