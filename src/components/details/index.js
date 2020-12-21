import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import { findCurrentItemThunk } from '../../redux/actions/findCurrentItem';


class Details extends Component {
    constructor(props) {
        super(props);

        this.goTo = this.goTo.bind(this);
    }

    componentDidMount() {
        const {
            match: { params: { itemId } },
            findCurrentItemThunk,
        } = this.props;

        findCurrentItemThunk(itemId);
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            currentItem,
        } = this.props;

        
        //console.info(currentItem); 
        return (
            <Page
                item={currentItem}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
    currentItem: state.currentItem,
});

const mapDispatchToProps = {
    findCurrentItemThunk
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Details)
);