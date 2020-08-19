import React, { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';

const UseArray = () => {
    const localStorage = window.localStorage;

    const defaultValues = {
        education: JSON.parse(localStorage.getItem("education"))
    };
    const { register, control, handleSubmit, reset, errors } = useForm({
        defaultValues,
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'education',
    });

    const onSubmit = (data) => {
        console.log(data);
        const { education } = data;
        reset({ education });
        localStorage.setItem("education", JSON.stringify(education))
    };

    useEffect(() => {
        setTimeout(() => {
            console.log('calling use effect after 6 seconds delay');
            const education = [
                {
                    field_of_study: '',
                    education_level: '',
                    institution: 'Kenyatta University',
                },
                {
                    field_of_study: 'BA Communications; Print Media',
                    education_level: 'Tertiary',
                    institution: 'Daystar University University',
                },
            ];
            reset({ education });
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
                                    ref={register({required:true})}
                                    name={`education[${index}].field_of_study`}
                                    id="field_of_study"
                                    defaultValue={field.field_of_study}
                                />
                                <p className="text-danger">{errors.field_of_study &&  "You need to input this field"}</p>

                                <Form.Label htmlFor="institution">
                                    Institution
                                </Form.Label>
                                <Form.Control
                                    ref={register({required:true, minLength:20})}
                                    name={`education[${index}].institution`}
                                    id="institution"
                                    defaultValue={field.institution}
                                />
                                <p className="text-danger">{errors.institution?.type ==='required' &&  "You need to input this field"}</p>
                                <p className="text-danger">{errors.institution?.type ==='minLength' &&  "You need more than 8 characters"}</p>

                                <Form.Label htmlFor="education_level">
                                    Education Level
                                </Form.Label>
                                <Form.Control
                                    ref={register({required:true})}
                                    name={`education[${index}].education_level`}
                                    id="education_level"
                                    defaultValue={field.education_level}
                                />
                                <p className="text-danger">{errors.education_level?.type ==='required' &&  "You need to input this field"}</p>

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
