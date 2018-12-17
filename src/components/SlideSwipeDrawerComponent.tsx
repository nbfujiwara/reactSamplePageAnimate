import * as React from 'react';

import {Link} from "react-router-dom";

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface ISlideSwipeDrawerProps {
}
interface ISlideSwipeDrawerState {
    open:boolean,
}

export default class SlideSwipeDrawerComponent extends React.Component<ISlideSwipeDrawerProps ,ISlideSwipeDrawerState > {

    constructor(props: ISlideSwipeDrawerProps) {
        super(props);
        this.state = { 'open': false };
    }

    private toggleDrawer = (flag) => () => {
        this.setState({open:flag});
    };

    public render() {
        const menuList = [
            {path:"/" , label:"HOME"},
            {path:"/page1" , label:"ページ1"},
            {path:"/page2" , label:"ページ2"},
        ];

        return (
            <div>
                <IconButton  color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>


                <SwipeableDrawer
                    anchor="left"
                    open={this.state.open}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        <List>

                        {menuList.map((menu,index)=>{
                            return (
                                <ListItem  key={index}>
                                    <Link to={menu.path}>{menu.label}</Link>
                                </ListItem>
                            );
                        })}
                        </List>

                    </div>
                </SwipeableDrawer>

            </div>

        );
    }
}
