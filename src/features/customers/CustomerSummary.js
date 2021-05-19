import React from 'react';
import { Button, Item, Segment } from 'semantic-ui-react';

export default function CustomerSummary() {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src='/assets/user.png'/>
                        <Item.Content>
                            <Item.Header content="Customer Name" />
                            <Item.Description>
                               1234 Elm st. 
                               Butterfly, USA 22334
                               (555) 334 - 2234
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <icon name='clock' /> Pets
                </span>
            </Segment>
            <Segment clearing>
                <div>Customer Notes</div>
                <Button color="teal" floated="right" content="view" />
            </Segment>
        </Segment.Group>
    );
}