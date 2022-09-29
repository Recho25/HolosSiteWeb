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
        "serviceName" : "Placements",
        "serviceDescription"  : [
            "Gestion stratégiques des placements",
            "Évaluation de votre portefeuille"
        ]
    },
    {
        "serviceName" : "Retraite",
        "serviceDescription"  : [
            "Optimisation fiscale de la stratégie de décaissement et d'accumulation"
        ]
    },
    {
        "serviceName" : "Fiscalité",
        "serviceDescription"  : [
            "Approche axée sur des stratégies personnalisées pour réduire les impôts et maximisé les éléments fiscaux"
        ]
    },
    {
        "serviceName" : "Gestion du risque",
        "serviceDescription"  : [
            "Évaluation et mise en place d'un plan de santé"
        ]
    },
    {
        "serviceName" : "Transfert intergénérationnel",
        "serviceDescription"  : [
            "Optimisation du patrimoine familiale"
        ]
    },
    {
        "serviceName" : "Optimisation fiscale",
        "serviceDescription"  : [
            "Approche basée sur la réalité fiscale des Québécois"
        ]
    },
    {
        "serviceName" : "Optimisation fiscale",
        "serviceDescription"  : [
            "Approche basée sur la réalité fiscale des Québécois"
        ]
    },
    {
        "serviceName" : "Gestion privé",
        "serviceDescription"  : [
            "Famille à valeur nette élevé",
            "Entrepreneur"
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
