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
                        <a href="">Centre financier Lebourgneuf</a>
                        <p>825 Bd Lebourgneuf #500, Quebec City, Quebec G2J 0B9</p>
                        <p><b>Téléphone: </b>(418)-627-4447<br/>(poste julien: 213, Olivier 212, Stéfanie: 274, Stéphanie Nadeau: 470, Jean-F: 296)</p>
                        <p><b>Fax: </b> (418) 627-3327</p>
                        <p><b>Adresse courriel: </b>test@hotmail.com</p>
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