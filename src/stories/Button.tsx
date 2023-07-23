import React from "react";
import { Size } from "./types/Size"
import './button.css';

const Button = ({ label, color, size }: ButtonProps) => {
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

export default Button;