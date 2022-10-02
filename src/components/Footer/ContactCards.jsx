import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="/img/sfl_expertise.png" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                        in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Expertise</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="/img/sfl_patrimoine.jpg" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Fiabilite</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="/img/planipret.webp" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Honneur</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default GroupExample;