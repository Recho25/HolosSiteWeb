import "./header.scss";
import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import StockRow from '../StockRow'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false, openedOnetime : false, onTop : true};
        let pages = [
            {
                "id" : 0,
                "label" : "Accueil",
                "link"  : "#accueil"
            },
            {
                "id" : 1,
                "label" : "Services",
                "link"  : "#services"
            },
            {
                "id" : 2,
                "label" : "Valeurs",
                "link"  : "#valeurs"
            },
            {
                "id" : 3,
                "label" : "Équipe",
                "link"  : "#equipe"
            },
            {
                "id" : 4,
                "label" : "Partenaire",
                "link"  : "#footer"
            },
            {
                "id" : 5,
                "label" : "Contact",
                "link"  : "#footer"
            },
            {
                "id" : 6,
                "label" : "Rendez-vous",
                "link"  : "#equipe"
            }
        ]

        this.pages = pages.map((page, index) =>
            <li key={page["id"]}><a href={page["link"]} >{page["label"]}</a></li>
        );
        this.pagesMobile = pages.map((page, index) =>
            <li key={page["id"]}><a onClick={this.toggleClass} href={page["link"]} >{page["label"]}</a></li>
        );
        window.addEventListener('scroll', this.listenScroll)
    }
    toggleClass = () => {
        this.setState(({ open, openedOnetime }) => ({ open: !open, openedOnetime:true }))
    }
    giveClass = () => {
        let result = this.state.open ? "open" : "close";
        if(this.state.openedOnetime){
            return result
        }else{
            return ""
        }
    }
    isTop = () => {
        let result = this.state.onTop ? "top" : "not_top";
        return result;
    }
    listenScroll = () =>{
        if(window.scrollY >= 150){
            this.setState(({ onTop }) => ({ onTop: false}))
        }else{
            this.setState(({ onTop }) => ({ onTop: true}))
        }

    }


    render() {
        return(
            <Fragment>
                <header onScroll={this.handleScroll} className={this.giveClass() + " " + this.isTop()}>
                    <div className="first-row">
                        <div className="container">
                            <a href="#accueil" className={"link_home"}><img src="/img/logo_png_gold.png" alt=""/></a>
                            <ul className={"nav_desktop"}>
                                {this.pages}
                            </ul>
                            <div className="portfolio_link">
                                <a href="https://id.desjardins.com/login?state=hKFo2SBpTGxnNmlkZTZ1TzhIa3JUMFZyYUpKaC1oTkpXcWVwVaFupWxvZ2luo3RpZNkgTERBZVQ4Um15U3pLejhHUnZQa0RhZjE0TF9PMG9fUG-jY2lk2SBsN0VxVnNvdXJlSEE0ZkpZQzgxcDJGN3VIaWFTa0FvRQ&client=l7EqVsoureHA4fJYC81p2F7uHiaSkAoE&protocol=oauth2&response_type=code&redirect_uri=https%3A%2F%2Fbrendfs.dataphile.broadridge.com%2Fcgi-bin%2Fwspdfsen.sh%2Fiapr%2Fexternal_auth.p&scope=openid&audience=pise-dsf&connection=gpap"><span>Portfolio</span></a>
                            </div>
                            <div onClick={this.toggleClass} className={"burger_btn_container"}>
                                <div className={"btn_burger"}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"addons_info " + this.isTop()}>
                        <div className="container">
                            <div className="col-md-4 offset-md-4">
                                <div className="card">
                                    <ul className="list-group list-group-flush list-group-horizontal text-center">
                                        <StockRow ticker="AAPL" />
                                        <StockRow ticker="GOOG" />
                                        <StockRow ticker="MSFT" />
                                        <StockRow ticker="TSLA" />
                                        <StockRow ticker="AMZN"/>
                                    </ul>
                                </div>
                            </div>
                            {/*<table className="table mt-5">*/}
                            {/*    <thead>*/}
                            {/*    <tr>*/}
                            {/*        <th>Ticker</th>*/}
                            {/*        <th>Price</th>*/}
                            {/*        <th>Date</th>*/}
                            {/*        <th>Time</th>*/}
                            {/*    </tr>*/}
                            {/*    </thead>*/}
                            {/*<tbody>*/}
                            {/*<StockRow ticker="aapl"/>*/}
                            {/*<StockRow ticker="goog"/>*/}
                            {/*<StockRow ticker="msft"/>*/}
                            {/*<StockRow ticker="tsla"/>*/}
                            {/*</tbody>*/}
                            {/*</table>*/}
                        </div>
                    </div>
                </header>
                <div className={"nav_container " + this.giveClass()}>
                    <ul>
                        {this.pagesMobile}
                    </ul>

                </div>
            </Fragment>
        )
    }
}


export default Header;