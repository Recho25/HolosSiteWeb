import React from 'react';
import {Button} from "react-bootstrap";

const incrementId = (data) => {
    for(let i = 0; i < data.length; i++){
        data[i]["id"] = i;
    }
}
const getData = (data) =>{

    return  (data.map((desc) =>
        <li>{desc}</li>
    ))

}
let equipe =  [
    {
        "name" : "Olivier Lamarche",
        "img" : "/img/photoOlivier.jpg",
        "titre" : "B.A.A, Associé",
        "linkedIn": "https://www.google.ca",
        "booking": "https://outlook.office365.com/owa/calendar/HolosservicesfinanciersInc@sfl.ca/bookings/",
        "roles"  : [
            "Conseiller en sécurité financière",
            "Représentant en épargne collective"
        ]
    },
    {
        "name" : "Julien Gagnon-Paré",
        "img" : "/img/photoJulien.jpg",
        "titre" : "M.B.A Finance, Associé",
        "linkedIn": "https://www.google.ca",
        "booking": "https://google.ca",
        "roles"  : [
            "Conseiller en sécurité financière",
            "Représentant en épargne collective"
        ]
    },
    {
        "name" : "Jean-François Lachance",
        "img" : "/img/photoJeff.jpg",
        "titre" : "B.A.A, Pl.Fin",
        "linkedIn": "https://www.google.ca",
        "booking": "https://google.ca",
        "roles"  : [
            "Président Plani-Concept",
            "Partenaire associé",
            "Représentant en épargne collective",
            "Conseiller en sécurité financière"
        ]
    },
    {
        "name" : "Stéfanie Hains",
        "img" : "/img/photoStefanie.jpg",
        "titre" : "Coordinatrice",
        "linkedIn": "https://www.google.ca",
        "booking": "https://google.ca",
        "roles"  : [
            "Plani-Concept & Holos Services Financiers",
            "SFL Gestion de patrimoine"
        ]
    },
    {
        "name" : "Stéphanie Fortin-Nadeau",
        "img" : "/img/photoStephanie3.jpg",
        "titre" : "Coordinatrice",
        "linkedIn": "https://www.google.ca",
        "booking": "https://google.ca",
        "roles"  : [
            "Plani-Concept & Holos Services Financiers",
            "SFL Gestion de patrimoine"
        ]
    },
]


incrementId(equipe)



function Equipe(){
    return (
        equipe.map((membre) =>
            <div className={"equipe_card"} key={membre["id"]}>
                <div className="img_container">
                    <a href={membre["linkedIn"]}>
                        <img src={membre["img"]} alt=""/>
                    </a>
                </div>
                <div className="equipe_card_content">
                    <h3>{membre["name"]}</h3>
                    <h4>{membre["titre"]}</h4>
                    <div style={{marginLeft: 30}}>
                        { getData(membre["roles"]) }
                    </div>
                    <div className="mt-5 col-md-12 text-center">
                        <a href={membre["booking"]}>
                            <Button variant="btn btn-outline-light" size="lg">Rendez-vous</Button>
                        </a>
                    </div>
                </div>
            </div>
        )
    );
}



export default Equipe;
