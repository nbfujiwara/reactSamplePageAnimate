import * as React from 'react';
import {Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";


export default class HomeComponent extends React.Component {



    public render() {
        return (
            <div >
                <HeaderComponent title={"HOME"} />
                this is home
                <br/>
                <Link to={"/page1"}>link to page1</Link>
                <br/>
                <Link to={"/page2"}>link to page2</Link>

            </div>
        );
    }
}


