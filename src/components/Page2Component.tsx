import * as React from 'react';
import {Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";


export default class Page2Component extends React.Component {



    public render() {
        return (
            <div >
                <HeaderComponent title={"ページ2"} />
                this is page2
                <br/>
                <Link to={"/"}>back to home</Link>
            </div>
        );
    }
}


