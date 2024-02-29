/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
export type HolidayType =
    | "Halloween"
    | "Christmas"
    | "Valentines Day"
    | "St Patricks Day"
    | "Birthday";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<HolidayType>("Halloween");
    function nextHolidayAlphabet(): void {
        if (holiday === "Birthday") {
            setHoliday("Christmas");
        }
        if (holiday === "Christmas") {
            setHoliday("Halloween");
        }
        if (holiday === "Halloween") {
            setHoliday("St Patricks Day");
        }
        if (holiday === "St Patricks Day") {
            setHoliday("Valentines Day");
        }
        if (holiday === "Valentines Day") {
            setHoliday("Birthday");
        }
    }
    function nextHolidayDate(): void {
        if (holiday === "Valentines Day") {
            setHoliday("St Patricks Day");
        }
        if (holiday === "St Patricks Day") {
            setHoliday("Birthday");
        }
        if (holiday === "Birthday") {
            setHoliday("Halloween");
        }
        if (holiday === "Halloween") {
            setHoliday("Christmas");
        }
        if (holiday === "Christmas") {
            setHoliday("Valentines Day");
        }
    }
    return (
        <div>
            <Button onClick={nextHolidayAlphabet}>Cycle Alphabetically</Button>
            <Button onClick={nextHolidayDate}>Year</Button>
            {holiday === "Halloween"
                ? "Holiday: 🎃"
                : holiday === "Christmas"
                ? "Holiday: 🎄"
                : holiday === "Birthday"
                ? "Holiday: 🎂"
                : holiday === "St Patricks Day"
                ? "Holiday: ☘️"
                : holiday === "Valentines Day"
                ? "Holday: 💖💘💝"
                : "Holiday: 🎃"}
        </div>
    );
}
