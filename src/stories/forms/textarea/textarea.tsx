import './textarea.scss';

type TextareaProps = {
    id: string,
    label: string,
    value: string,
    onChange: Function,
    length?: number,
    disabled?: boolean
}

export default function Textarea({ id, label, value, length, disabled = false, onChange }: TextareaProps) {
    const change = (e: any) => {
        if (typeof e.target.value == 'string')
            value = e.target.value.slice(0, length);
        onChange(value);
    };

    return (<div className={"inputForms"}>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} value={value} onChange={e => change(e)} disabled={disabled} ></textarea>
        {length && length > 0
            ? <p className={"viewLength"}>{value ? value.length : 0} / {length}</p>
            : <></>
        }
    </div>);
}