import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from './../../../imports/collections/bins';

class BinsMain extends Component {
    render() {
        console.log(this.props.bin);
        return(
            <div>BinsMain</div>
        );
    }
}

// Passing BinsMain's props to container wrapper
export default createContainer((props) => {
    const { binId } = props.match.params;

    Meteor.subscribe('bins');

    return { bin: Bins.findOne(binId) };

}, BinsMain);