import "./footer.scss";
import React, {Component, Fragment} from 'react'
import GroupExample from "./ContactCards";


class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <Fragment>
                <footer id={"footer"}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col">
                                <h2>Nous joindre</h2>
                                <a href="https://www.sfl.ca/quebec-mauricie-appalaches/#main-content">Centre financier Lebourgneuf</a>
                                <p>825 Boulevard Lebourgneuf, bureau 500, Québec, QC G2J 0B9</p>
                                <p><b>Téléphone: </b>(418)-627-4447 poste: 274</p>
                                <p><b>Fax: </b> (418) 627-3327</p>
                                <p><b>Adresse courriel: </b>plani-holos@sfl.ca</p>
                                </div>
                            <div className="col">

                                <div className="iframe-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.2253343152456!2d-71.2825828!3d46.839253899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897dd493ffffb%3A0xd15b2f581700dd8a!2s825%20Bd%20Lebourgneuf%20%23500%2C%20Qu%C3%A9bec%20City%2C%20QC%20G2J%200B9!5e0!3m2!1sen!2sca!4v1664727401774!5m2!1sen!2sca"
                                        width="500" height="300" style={{border: 0}} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade" title={"holosGeomap"}></iframe>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className="logo_wrapper">
                            <h2>Nos partenaires</h2>
                            <GroupExample></GroupExample>
                        </div>
                    <div className="container">
                        &copy; 2022 Tous droits réservés
                    </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}


export default Footer;