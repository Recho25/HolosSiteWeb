import React from 'react';

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
        "roles"  : [
            "Conseiller en sécurité financière",
            "Représentant en épargne collective"
        ]
    },
    {
        "name" : "Julien Gagnon-Paré",
        "img" : "/img/holos_black.png",
        "titre" : "M.B.A Finance, Associé",
        "roles"  : [
            "Conseiller en sécurité financière",
            "Représentant en épargne collective"
        ]
    },
    {
        "name" : "Jean-François Lachance",
        "img" : "/img/holos_black.png",
        "titre" : "B.A.A, Pl.Fin",
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
        "roles"  : [
            "Plani-Concept.inc & Holos Services Financiers",
            "SFL Gestion de patrimoine"
        ]
    },
    {
        "name" : "Stéphanie Fortin-Nadeau",
        "img" : "/img/holos_black.png",
        "titre" : "Coordinatrice",
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
                    <img src={membre["img"]} alt=""/>
                </div>
                <div className="equipe_card_content">
                    <h3>{membre["name"]}</h3>
                    <h4>{membre["titre"]}</h4>
                    <ul>
                        { getData(membre["roles"])}
                    </ul>
                </div>
            </div>
        )
    );
}



export default Equipe;
