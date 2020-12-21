import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findSuggestions from '../../redux/actions/findSuggestions';
import  {searchResultsThunk} from '../../redux/actions/findResults';



class IAppBar extends Component {
    constructor(props) {
        super(props);
        const {
            searchResultsThunk,
        } = this.props;
        let text=''; 
        const query = new URLSearchParams(this.props.location.search);
        if(query.get('q')){
            text = query.get('q');
        }
        this.state = {
            text: text,
        };
         
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
        if(query.get('q')){
            
            searchResultsThunk(text);
        }
       
    }

    onChangeText(text) {
        this.setState({ text });

        this.props.findSuggestions(text);
    }

    onChangeSelection(text) {
        const {
            match,
            history,
            searchResultsThunk,
        } = this.props;

        this.setState({ text });
        searchResultsThunk(text); 
        

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
    searchResultsThunk,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);