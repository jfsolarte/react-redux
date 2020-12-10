import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../autocomplete';
import './style.sass';


function Page(props) {
    const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
    } = props;

    return (
        <AppBar className="appBarHeader" position="static">
            <Toolbar className="appbar">
                
                <Autocomplete
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />

                
            </Toolbar>
        </AppBar>
    );
}

export default Page;