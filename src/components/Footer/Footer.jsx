import "./footer.scss";
import React, {Component, Fragment} from 'react'

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fragment>
                <footer id={"footer"}>
                    <div className="container">
                        <h2>Nous joindre</h2>
                        <a href="https://www.sfl.ca/quebec-mauricie-appalaches/#main-content">Centre financier Lebourgneuf</a>
                        <p>825 Boulevard Lebourgneuf, bureau 500, Québec, QC G2J 0B9</p>
                        <p><b>Téléphone: </b>(418)-627-4447 poste: 274</p>
                        <p><b>Fax: </b> (418) 627-3327</p>
                        <p><b>Adresse courriel: </b>plani-holos@sfl.ca</p>
                        <div className="logo_wrapper">
                            <img src="/img/sfl_expertise.png" alt=""/>
                            <img src="/img/sfl_patrimoine.jpg" alt=""/>
                            <img src="/img/planipret.webp" alt=""/>
                        </div>
                    </div>
                    <div className="container">
                        &copy; 2022 Tous droits réservés
                    </div>
                </footer>

            </Fragment>
        )
    }
}


export default Footer;