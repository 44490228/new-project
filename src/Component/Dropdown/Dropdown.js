import React, { useState } from "react";
import { Card, Collapse, Button } from "react-bootstrap";



function NooraniQaidaCard() {
  const [open, setOpen] = useState(false);

  return (
    <Card className="card-home">
      <div className="image-container">
        <Card.Img
          variant="top"
          src="/Images/noorani-qaida.jpg 1.png" // Replace with your image URL
          alt="Noorani Qaida"
          className="hover-grow-img"
        />
      </div>
      <Card.Body style={{ padding: "10px 15px" }}>
        <Card.Title
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#00796b",
            }}
          >
            Noorani Qaida
          </span>
          <Button
            variant="link"
            onClick={() => setOpen(!open)}
            aria-controls="collapse-text"
            aria-expanded={open}
            style={{ padding: "0", color: "#00796b", fontSize: "24px" }}
          >
            {open ? (
              <img src="/Images/closing.svg" alt="closing" />
            ) : (
              <img src="/Images/openimg.svg" alt="opening" />
            )}
          </Button>
        </Card.Title>
        <Collapse in={open}>
          <div
            id="collapse-text"
            style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}
          >
            Noorani Qaida is a beginner's guide to learning Quranic recitation,
            focusing on Arabic pronunciation and basic tajweed rules.
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default NooraniQaidaCard;
