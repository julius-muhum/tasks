import React, { useState } from "react";
import { Form } from "react-bootstrap";

//const options = ["a", "b", "c", "d", "e", "f", "g", "h"];
//const expectedAnswer = "b";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="options">
                <Form.Label>Choose the correct answer?</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((Option: string) => (
                        <option key={Option} value={Option}>
                            {Option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {choice === expectedAnswer ? "✔️" : "❌"}.
            <h3>Multiple Choice Question</h3>
        </div>
    );
}
