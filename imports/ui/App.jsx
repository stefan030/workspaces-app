import React from 'react'
import Header from './../../client/components/header';
import BinsList from './../../client/components/bins/bins_list';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}