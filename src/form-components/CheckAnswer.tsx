import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //expectedAnswer = "42";
    const [answer, setAnswer] = useState<string>("");
    //const correct = answer === expectedAnswer;
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="AnswerInput">
                <Form.Label> Correct?:</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(event.target.value)
                    }
                />
            </Form.Group>
            <div>{expectedAnswer !== answer ? "❌" : "✔️"}</div>
        </div>
    );
}
