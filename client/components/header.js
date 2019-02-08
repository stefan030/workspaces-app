import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, withRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';



class Header extends Component {

    onBinClick(event) {
        event.preventDefault();

        Meteor.call('bins.insert', (error, binId) => {
            console.log(binId);
            this.props.history.push(`/bins/${binId}`);
        });
    }


    render() {
        return(
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <Link to='/' className="navbar-brand">
                        Workspace
                    </Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Accounts />
                    </li>
                    <li>
                        <a href='#' onClick={this.onBinClick.bind(this)}>Create Bin</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default withRouter(Header);