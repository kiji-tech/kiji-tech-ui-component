import './textarea.scss';

export type TextareaProps = {
    id: string,
    label: string,
    value: string,
    onChange: Function,
    length?: number,
    disabled?: boolean,
    required?: boolean
}

export default function Textarea({ id, label, value, length, disabled = false, required = false, onChange }: TextareaProps) {
    const change = (e: any) => {
        if (typeof e.target.value == 'string')
            value = e.target.value.slice(0, length);
        onChange(value);
    };

    return (<div className={"inputForms"}>
        {
            label ?
                (<>
                    <label htmlFor={id}>{label}{required ? " *" : ""}</label>
                    <div className="space"></div>
                </>)
                : null

        }
        <textarea id={id} value={value} onChange={e => change(e)} disabled={disabled} ></textarea>
        {length && length > 0
            ? <p className={"viewLength"}>{value ? value.length : 0} / {length}</p>
            : <></>
        }
    </div>);
}