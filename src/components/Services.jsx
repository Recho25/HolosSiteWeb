import React from 'react'

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
let services =  [
    {
        "serviceName" : "Finances personnelles",
        "serviceDescription"  : [
            "Budget",
            "Gestion de la dette",
            "Lucidité fiscale (planification des impôts)"
        ]
    },
    {
        "serviceName" : "Assurance de personne",
        "serviceDescription"  : [
            "Assurance vie",
            "Assurance contre les maladies graves",
            "Assurance invalidité"
        ]
    },
    {
        "serviceName" : "Planification Financière",
        "serviceDescription"  : [
            "Détermination des objectifs de retraite",
            "Stratégie d'accumulation",
            "Stratégie de décaissement",
            "Optimisation fiscale complète"
        ]
    },
    {
        "serviceName" : "Gestion du portefeuille d'investissement",
        "serviceDescription"  : [
            "Vigie sur le marché",
            "Politique de placement",
            "REER/CELI/REEE/REEi",
            "Fond de catégorie"
        ]
    },
    {
        "serviceName" : "Planification successorale",
        "serviceDescription"  : [
            "Transfert des actifs au décès",
            "Inventaire financier",
            "Calcul de l'impôt au décès"
        ]
    },
    {
        "serviceName" : "Entrepreneurs",
        "serviceDescription"  : [
            "Régime exécutif de retraite",
            "Assurance en prime partagé",
            "Régime d'assurance salaire",
            "Optimisation fiscale (individuel et corporative)"

        ]
    }
]


incrementId(services)


function Services(){
        return (

            services.map((service) =>
                <div className={"service_card"} key={service["id"]}>
                    <h3>{service["serviceName"]}</h3>
                    <ul>
                        { getData(service["serviceDescription"])}
                    </ul>
                </div>
            )
        );
}



export default Services;
