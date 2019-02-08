import React, { Component } from 'react';
import { markdown } from 'markdown';
// Markdown library exports an object that has a couple of different properties on it
// and we specifically want the property markdown

class BinsViewer extends Component {
    render() {
        // rawHTML - currently a string
        const rawHTML = markdown.toHTML(this.props.bin.content);

        return(
            <div className='col-xs-4'>
                <h5>Output</h5>
                <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
            </div>
        )
    }
}

export default BinsViewer;