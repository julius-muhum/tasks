import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startQuiz(): void {
        if (attempt > 0) {
            setAttempt(attempt - 1);
            setProgress(true);
        }
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    function Mulligan(): void {
        setAttempt(attempt + 1);
    }
    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={progress === true || attempt === 0}
            >
                Start Quiz
            </Button>
            to {attempt}
            <Button onClick={stopQuiz} disabled={progress === false}>
                Stop Quiz
            </Button>
            to {attempt}
            <Button onClick={Mulligan} disabled={progress === true}>
                Mulligan
            </Button>
            to {attempt}
        </div>
    );
}
