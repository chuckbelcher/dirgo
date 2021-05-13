import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header className='sitename'>
                    dirGo
                </Menu.Item>
                <Menu.Item name='Customers' />
                <Menu.Item>
                    <Button positive inverted content='Add Customer' />
                </Menu.Item>
                <Menu.Item position="right">
                    <Button basic inverted content='Login' />
                    <Button basic inverted content='Register' style={{marginLeft: '0.5em'}} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}