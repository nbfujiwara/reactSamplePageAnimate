import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import {TransitionGroup ,CSSTransition } from "react-transition-group";
import HomeComponent from "./HomeComponent";
import Page1Component from "./Page1Component";
import Page2Component from "./Page2Component";

class MainComponent extends React.Component<IMainProps> {
    public render() {
        return (
            <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames={"pageTransition"} timeout={200} >
                    <div className={"page"}>
                        <Switch location={this.props.location}>
                            <Route exact={true} path='/' component={HomeComponent} />
                            <Route path='/home' component={HomeComponent} />
                            <Route path='/page1' component={Page1Component} />
                            <Route path='/page2' component={Page2Component} />
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>

        );
    }
}


interface IMainProps extends RouteComponentProps<{}>{
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
    };
}
function mapStateToProps(appState: any) {
    return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));

