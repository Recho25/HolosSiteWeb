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
        "img" : "/img/holos_black.png",
        "titre" : "B.A.A, Associé",
        "linkedIn": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "roles"  : [
            "Conseiller en sécurité financière",
            "Représentant en épargne collective"
        ]
    },
    {
        "name" : "Julien Gagnon-Paré",
        "img" : "/img/holos_black.png",
        "titre" : "M.B.A Finance, Associé",
        "linkedIn": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "roles"  : [
            "Conseiller en sécurité financière",
            "Représentant en épargne collective"
        ]
    },
    {
        "name" : "Jean-François Lachance",
        "img" : "/img/holos_black.png",
        "titre" : "B.A.A, Pl.Fin",
        "linkedIn": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "roles"  : [
            "Partenaire associé",
            "Représentant en épargne collective",
            "Conseiller en sécurité financière"
        ]
    },
    {
        "name" : "Stéfanie Hains",
        "img" : "/img/holos_black.png",
        "titre" : "Coordinatrice",
        "linkedIn": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "roles"  : [
            "Plani-Concept.inc & Holos Services Financiers",
            "SFL Gestion de patrimoine"
        ]
    },
    {
        "name" : "Stéphanie Fortin-Nadeau",
        "img" : "/img/holos_black.png",
        "titre" : "Coordinatrice",
        "linkedIn": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "roles"  : [
            "Plani-Concept.inc & Holos Services Financiers",
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
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <Button variant="primary" size="lg">Rendez-vous</Button>
                        </a>
                    </div>
                </div>
            </div>
        )
    );
}



export default Equipe;
