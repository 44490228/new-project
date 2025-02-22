import React, { useState } from "react";
import { Card, Collapse, Button } from "react-bootstrap";

function NooraniQaidaCard8() {
  const [open, setOpen] = useState(false);

  return (
    <Card className="card-home">
      <Card.Img
        variant="top"
        src="/Images/tafseer-img.png" // Replace with your image URL
        alt="Noorani Qaida"
        style={{ objectFit: "cover", height: "200px" }}
         className="hover-grow-img"
      />
      <Card.Body style={{ padding: "10px 15px" }}>
        <Card.Title style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0" }}>
          <span style={{ fontSize: "18px", fontWeight: "bold", color: "#00796b" }}>Tafseer Ul Quran</span>
          <Button
            variant="link"
            onClick={() => setOpen(!open)}
            aria-controls="collapse-text"
            aria-expanded={open}
            style={{ padding: "0", color: "#00796b", fontSize: "24px" }}
          >
            {open ? <img src='/Images/closing.svg' alt='closing'/> :<img src='/Images/openimg.svg' alt='opening'/> }
            
          </Button>
        </Card.Title>
        <Collapse in={open}>
          <div id="collapse-text" style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
          Tafseer-ul-Quran involves understanding the Quran's meanings, context, and wisdom through detailed explanations and interpretations.
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default NooraniQaidaCard8;
