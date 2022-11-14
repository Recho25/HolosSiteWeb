import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
    return (
        <CardGroup>
            <Card>
                <a href={"https://www.sflexpertise.ca/"}>

                    <Card.Img variant="top" src="/img/sfl_expertise.png" style={{marginLeft:"1em"}} />
                </a>
                <Card.Body>
                    <Card.Text>
                        SFL Expertise, c’est un centre d’expertise en pleine croissance dont les outils d’analyse distinctifs reposent sur l’innovation et la recherche-développement. C’est une équipe de professionnels qui travaillent conjointement avec votre conseiller en sécurité financière pour vous aider à prendre des décisions financières éclairées qui vous permettront de réaliser vos projets d’avenir.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <a href={"https://www.sfl.ca/"}>
                    <Card.Img variant="top" src="/img/sfl_patrimoine.jpg" />
                </a>
                <Card.Body>
                    <Card.Text>
                        Peu importe la complexité de votre situation financière, vous souhaitez réaliser vos rêves et vos projets de vie les plus chers. Votre conseiller SFL vous offre ses conseils avisés pour les réaliser tout en protégeant votre bien-être et celui de vos proches.
                    </Card.Text>
                </Card.Body>

            </Card>
            <Card>
                <a href={"https://www.planipret.com/fr/"}>
                    <Card.Img variant="top" src="/img/planipret.webp" style={{marginLeft:"1em"}}/>
                </a>
                <Card.Body>
                    <Card.Text>
                        Que ce soit pour un refinancement ou l’achat d’une propriété, Planiprêt négociera et vous aidera à comprendre votre hypothèque.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default GroupExample;