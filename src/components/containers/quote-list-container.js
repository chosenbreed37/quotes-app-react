import React from 'react';
import rest from 'restler';
import QuotesList from '../material-ui/quotes-list';

export default class QuoteListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { quotes: [] };
    }

    componentDidMount() {
        rest.get('http://localhost:3000/quotes')
            .on('complete', (quotes) => {
                this.setState({ quotes });
            })
    }

    render() {
        return <QuotesList quotes={this.state.quotes} />
    }
}