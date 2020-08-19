import React, { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';

const UseArray = () => {
    const defaultValues = {
        education: [
            {
                field_of_study: 'BA Philosophy',
                education_level: 'Tertiary',
                institution: 'Kenyatta University',
            },
            {
                field_of_study: 'BA Communications; Print Media',
                education_level: 'Tertiary',
                institution: 'Daystar University University',
            },
        ],
    };
    const { register, control, handleSubmit, reset } = useForm({
        defaultValues,
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'education',
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    useEffect(() => {
        setTimeout(() => {
            console.log('calling use effect after 6 seconds delay');
            reset({
                education: [
                    {
                        field_of_study: 'BA Philosophy This form has been reset',
                        education_level: 'Tertiary',
                        institution: 'Kenyatta University',
                    },
                    {
                        field_of_study: 'BA Communications; Print Media',
                        education_level: 'Tertiary',
                        institution: 'Daystar University University',
                    },
                ]
            })
        }, 6000);
    }, [reset]);

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {fields.map((field, index) => (
                            // console.log(field, index)
                            // return(
                            <Form.Group key={field.id}>
                                <Form.Label htmlFor="field_of_study">
                                    Field of Study
                                </Form.Label>
                                <Form.Control
                                    ref={register()}
                                    name={`education[${index}].field_of_study`}
                                    id="field_of_study"
                                    defaultValue={field.field_of_study}
                                />

                                <Form.Label htmlFor="institution">
                                    Institution
                                </Form.Label>
                                <Form.Control
                                    ref={register()}
                                    name={`education[${index}].institution`}
                                    id="institution"
                                    defaultValue={field.institution}
                                />

                                <Form.Label htmlFor="education_level">
                                    Education Level
                                </Form.Label>
                                <Form.Control
                                    ref={register()}
                                    name={`education[${index}].education_level`}
                                    id="education_level"
                                    defaultValue={field.education_level}
                                />
                                <Button onClick={() => remove(index)}>
                                    Delete
                                </Button>
                            </Form.Group>
                            // )
                        ))}
                        <Button
                            onClick={() =>
                                append({
                                    field_of_study: '',
                                    institution: '',
                                    education_level: '',
                                })
                            }
                        >
                            Add
                        </Button>
                        <Button type="submit">Submit Education</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UseArray;
