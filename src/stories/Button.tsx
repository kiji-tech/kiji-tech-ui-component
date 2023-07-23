import React from "react";
import { Size } from "../Size"
import './button.css';

export const Button = ({ label, color, size }: ButtonProps) => {
    return (
        <button
            className={`btn ${color} ${size}`}
        >{label}</button>
    );
}

export type ButtonProps = {
    color: string,
    size: Size,
    label: string,
}
