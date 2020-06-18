import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardDeck,
  Row,
  Container,
  Col,
} from "reactstrap";

export default function CardList(props) {
  return (
    <div
      className="container"
      style={{ textAlign: "center", minHeight: "100vh" }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h1 className="display-3 mx-auto px-auto ">Wallpapers</h1>
        <p style={{ textAlign: "center" }}>Get Latest & Cool Walls</p>
      </div>
      <Container>
        <Row>
          {props.data.map((item) =>
            item.map((i) => {
              return (
                <Col
                  key={i.id}
                  className="col-sm-12 col-md-6 col-lg-4"
                  style={{ minWidth: "200px" }}
                >
                  <div>
                    <CardDeck>
                      <Card>
                        <CardImg
                          top
                          width="100%"
                          src={i.preview_img}
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardTitle>{i.title}</CardTitle>
                          <CardSubtitle>{i.author}</CardSubtitle>
                          <a
                            href={i.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button color="primary">View full image</Button>
                          </a>
                        </CardBody>
                      </Card>
                    </CardDeck>
                  </div>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </div>
  );
}
