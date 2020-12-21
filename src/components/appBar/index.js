import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';
import searchResultsThunk from '../../redux/actions/searchResultsThunk';


class IAppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }

    onChangeText(text) {
        this.setState({ text });

        this.props.findSuggestions(text);
    }

    onChangeSelection(text) {
        const {
            findResults,
            match,
            history,
            searchResultsThunk,
        } = this.props;

        this.setState({ text });
        searchResultsThunk(text); 
        //findResults(text);
        

        if (match.path !== '/results?q='+text) {
            history.push('/results?q='+text);
        }
    }

    render() {
        const {
            text,
        } = this.state;

        const {
            suggestions,
        } = this.props;

        return (
            <Page
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        );
    }
}

const mapStateToProps = state => ({
    suggestions: state.suggestions,
});

const mapDispatchToProps = {
    findSuggestions,
    //findResults,
    searchResultsThunk,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);