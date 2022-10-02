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
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Centre financier Lebourgneuf</a>
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
                        <div className="iframe-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.2253343152456!2d-71.2825828!3d46.839253899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897dd493ffffb%3A0xd15b2f581700dd8a!2s825%20Bd%20Lebourgneuf%20%23500%2C%20Qu%C3%A9bec%20City%2C%20QC%20G2J%200B9!5e0!3m2!1sen!2sca!4v1664727401774!5m2!1sen!2sca"
                                width="1300" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" title={"holosGeomap"}></iframe>
                        </div>
                        &copy; 2022 Tous droits réservés
                    </div>
                </footer>

            </Fragment>
        )
    }
}


export default Footer;