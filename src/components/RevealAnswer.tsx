import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisibility] = useState<boolean>(false);
    function becomeVisible(): void {
        setVisibility(!visible);
    }
    return (
        <div>
            <Button onClick={becomeVisible}>Reveal Answer</Button>
            {visible && <div>42</div>}Click to reveal Answer!
        </div>
    );
}
