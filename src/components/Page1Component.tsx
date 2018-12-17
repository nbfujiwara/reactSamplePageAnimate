import * as React from 'react';
import {Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";


export default class Page1Component extends React.Component {



    public render() {
        return (
            <div >
                <HeaderComponent title={"ページ1"} />
                this is page1
                <br/>
                <Link to={"/"}>back to home</Link>
            </div>
        );
    }
}


