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
                    {/*<Card.Title></Card.Title>*/}
                    <Card.Text>
                        SFL Expertise, c’est un centre d’expertise en pleine croissance dont les outils d’analyse distinctifs reposent sur l’innovation et la recherche-développement. C’est une équipe de professionnels qui travaillent conjointement avec votre conseiller en sécurité financière pour vous aider à prendre des décisions financières éclairées qui vous permettront de réaliser vos projets d’avenir.
                    </Card.Text>
                </Card.Body>
                {/*<Card.Footer>*/}
                {/*    <small className="text-muted">Expertise</small>*/}
                {/*</Card.Footer>*/}
            </Card>
            <Card>
                <Card.Img variant="top" src="/img/sfl_patrimoine.jpg" />
                <Card.Body>
                    {/*<Card.Title>Card title</Card.Title>*/}
                    <Card.Text>
                        Peu importe la complexité de votre situation financière, vous souhaitez réaliser vos rêves et vos projets de vie les plus chers. Votre conseiller SFL vous offre ses conseils avisés pour les réaliser tout en protégeant votre bien-être et celui de vos proches.
                    </Card.Text>
                </Card.Body>
                {/*<Card.Footer>*/}
                {/*    <small className="text-muted">Fiabilite</small>*/}
                {/*</Card.Footer>*/}
            </Card>
            <Card>
                <Card.Img variant="top" src="/img/planipret.webp" style={{marginLeft:"1em"}}/>
                <Card.Body>
                    {/*<Card.Title>Card title</Card.Title>*/}
                    <Card.Text>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </Card.Text>
                </Card.Body>
                {/*<Card.Footer>*/}
                {/*    <small className="text-muted">Honneur</small>*/}
                {/*</Card.Footer>*/}
            </Card>
        </CardGroup>
    );
}

export default GroupExample;