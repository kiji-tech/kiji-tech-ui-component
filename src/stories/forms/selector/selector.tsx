import { useState } from 'react';
import './selector.scss';

export type SelectorOption = {
    value: string | number,
    label: string;
}

export type SelectorProps = {
    id: string,
    label?: string,
    required?: boolean,
    selected: string | number,
    options: SelectorOption[],
    onChange: Function,
}

export default function Selector({ id, label = '', required = false, options, selected, onChange }: SelectorProps) {
    return (<div className={"selector"}>
        {label
            ? <label htmlFor={id}>{label}{required ? " *" : ""}</label>
            : null
        }
        <select value={selected || ''} className={"options"} onChange={(e) => onChange(e)}>
            {options.map(option => {
                return <option value={option.value || ''} key={option.label}>{option.label}</option>
            })}
        </select>
    </div>);
}