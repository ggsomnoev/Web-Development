import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default">
                {this.props.children}
            </div>
        );
    }
}