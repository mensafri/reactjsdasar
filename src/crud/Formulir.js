import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const Formulir = ({handleSubmit, nama, handleChange, deskripsi, harga}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>Tambah Data Baru</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="nama">
            <Form.Label>Nama Makanan</Form.Label>
            <Form.Control
              type="text"
              name="nama"
              value={nama}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="deskripsi">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="deskripsi"
              value={deskripsi}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="harga">
            <Form.Label>Harga Makanan</Form.Label>
            <Form.Control
              type="number"
              name="harga"
              value={harga}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </div>
  );
};

export default Formulir;
