/* eslint-disable indent */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editable, setEditable] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditable(event: React.ChangeEvent<HTMLInputElement>) {
        setEditable(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    if (editable) {
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    id="switchButton"
                    label="Edit?"
                    checked={editable}
                    onChange={updateEditable}
                />
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="student"
                    checked={isStudent}
                    onChange={updateStudent}
                />
                <Form.Group controlId="AnswerInput">
                    <Form.Label> student</Form.Label>
                    <Form.Control
                        type="textbox"
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => (editable ? setName(event.target.value) : null)}
                    />
                </Form.Group>
                <div>
                    {editable
                        ? ""
                        : isStudent
                        ? name + " is a student"
                        : name + " is not a student"}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    id="switchButton"
                    label="Edit?"
                    checked={editable}
                    onChange={updateEditable}
                />
                <div>
                    {name} {isStudent ? "is a student" : "is not a student"}{" "}
                </div>
            </div>
        );
    }
}
