import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const incrementId = (data) => {
    for(let i = 0; i < data.length; i++){
        data[i]["id"] = i;
    }
}


let valeurs =  [
    {
        "name" : "Altruisme",
        "description"  : "L’altruisme c’est s'intéresser à vous et à votre communauté. Chez Holos, c’est pensez à l’humain d’abord et donner au suivant."
    },
    {
        "name" : "Expertise",
        "description"  : "Notre équipe possède des habiletés et des connaissances poussées en matière de placement, d’assurance et d’optimisation fiscale."
    },
    {
        "name" : "Plaisir",
        "description"  : "C’est de sentir que l’on a un ‘’fit’’, C’est de ne pas être stressé par sa destination financière. C'est rendre simple et plaisant la finance."
    },
    {
        "name" : "Efficience",
        "description"  : "L'efficience c’est être proactif dans notre partenariat avec vous. C’est le rapport entre vos résultats obtenus et le temps que l’on investie ensemble."
    },
    {
        "name" : "Transparence",
        "description"  : "Chez Holos, on explique clairement ce que l’on fait, comment on le fait et pourquoi on le fait. Tout ça pour atteindre votre destination financière."
    }
]

incrementId(valeurs)

function Valeurs(){
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false,
                    dots: false
                }
            },

        ]
    };

    return (
        <div className={"valeurs_container"}>
            <Slider {...settings}>
            {valeurs.map((valeur) =>
            <div className={"valeur_card"} key={valeur["id"]}>
                <h3>{valeur["name"]}</h3>
                <p>{valeur["description"]}</p>
            </div>
            )}
            </Slider>
        </div>
    );
}

export default Valeurs;