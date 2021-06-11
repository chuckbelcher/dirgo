import React from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

export default function CustomerForm() {
    return(
        <Segment clearing>
            <Header content="Create New Customer" />
            <Form>
                <Form.Field>
                    <input type="text" placeholder="FirstName" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="LastName" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Street" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="State" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Zipcode" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="E-Mail Address" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Telephone Number" />
                </Form.Field>
                <Button type="submit" floated='right' color="teal" content="Submit" /> 
                <Button type="submit" floated='right' negative content="Cancel" /> 
            </Form>
        </Segment>
    )
}