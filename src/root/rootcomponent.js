import React from 'react';
import Menu from '../spa/menu';
import Content from '../spa/content';

class RootComponent extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Root Component</h1>
                <Menu></Menu>
                <Content></Content>
            </div>
        );
    }
}
 
export default RootComponent;