import * as React from 'react';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SlideSwipeDrawerComponent from "./SlideSwipeDrawerComponent";

interface IHeaderProps {
    title:string
    classes:any
}


const styles = {
    titleText: {
        'text-align':'center',
        flexGrow: 1,
    },
};


export  class HeaderComponent extends React.Component<IHeaderProps  > {



    public render() {
        const  classes  = this.props.classes;

        return (
            <div>

                <AppBar position="static">
                    <Toolbar>
                        <SlideSwipeDrawerComponent/>
                        <Typography variant="h6" color="inherit" className={classes.titleText}>
                            {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>

            </div>

        );
    }
}

export default withStyles(styles)(HeaderComponent);