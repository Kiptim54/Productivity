import React from 'react';
import {useForm} from 'react-hook-form'
import {Container, Row, Form, Col, Button} from 'react-bootstrap'

const WatchComponent = () => {
    const {register, watch, handleSubmit} = useForm()
    const isRegistered = watch('registered')

    const onSubmit = (data)=>{
        console.log(data)
    }

    return (  
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            {isRegistered ? 
                                    <React.Fragment>
                                    <Form.Label htmlFor="name">Name</Form.Label>
                                    <Form.Control type="text" name="name" ref={register} id="name"></Form.Control>

                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="password"  name="password" ref={register}></Form.Control>
                                    </React.Fragment>
                        
                        : null}


                            <Form.Label htmlFor="registered">Registered?</Form.Label>
                            <Form.Check id="registered" name="registered" ref={register}/>
                        <Button type="submit">submit</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
 
export default WatchComponent;