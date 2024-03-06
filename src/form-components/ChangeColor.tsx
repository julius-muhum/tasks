import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "yellow",
        "purple",
        "black",
        "white"
    ];
    return (
        <div>
            {COLORS.map((Color: string) => (
                <Form.Check
                    inline
                    key={Color}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color"
                    label={Color}
                    value={Color}
                    checked={color === Color}
                    style={{ backgroundColor: Color }}
                />
            ))}
            <div> You have chosen</div>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            >
                <p>{color}</p>
            </div>
            <h3>Change Color</h3>
        </div>
    );
}
