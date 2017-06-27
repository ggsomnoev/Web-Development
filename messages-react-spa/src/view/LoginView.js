import React from 'react';

export default class LoginView extends React.Component {
    render() {
        return (
            <form>
                <input type="text" />
                <input type="submit" value="Login"/>
            </form>
        );
    }
}