import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);
    //const oldAmount = requestedAttempts;

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="AnswerInput">
                <Form.Label>Enter the requested amount of attempts:</Form.Label>
                <Form.Control
                    type="number"
                    //value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <span>
                <Button
                    onClick={() =>
                        setRemainingAttempts(
                            requestedAttempts + remainingAttempts
                        )
                    }
                >
                    gain
                </Button>
            </span>
            <span>
                <Button
                    onClick={() => setRemainingAttempts(remainingAttempts - 1)}
                    disabled={remainingAttempts === 0}
                >
                    use
                </Button>
                to {remainingAttempts}.
            </span>
        </div>
    );
}
