
import './checkbox.scss';

type CheckboxProps = {
    id: string,
    label?: string,
    value: boolean,
    required?: boolean,
    disabled?: boolean,
    onChange: Function,
}


export default function Checkbox({ id, label, value, required = false, disabled = false, onChange }: CheckboxProps) {
    return (<>
        {label ? <label className="label">{label}</label> : null}
        <input type="checkbox" id={id} checked={value} disabled={disabled} onChange={(e) => onChange(e)} />
    </>)
}