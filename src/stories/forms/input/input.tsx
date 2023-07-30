import './input.scss';

export type InputProps = {
    type: 'email' | 'search' | 'password' | 'number' | 'text'
    id: string,
    label?: string,
    value: string | number,
    required?: boolean,
    placeholder?: string,
    pattern?: string,
    patternDetail?: string,
    min?: number,
    max?: number,
    message?: string,
    onChange: Function,
    disabled?: boolean
}

export default function Input({
    type,
    id,
    label,
    value,
    required = false,
    placeholder = '',
    pattern = '',
    patternDetail = '',
    min,
    max,
    message = '',
    onChange,
    disabled = false
}: InputProps) {

    const change = (e: any) => {
        if (typeof e.target.value == 'string')
            value = e.target.value.slice(0, max);
        onChange(value);
    };

    return (
        <div className={'inputForm'}>
            {label
                ? <label htmlFor={id}>{label}{required ? " *" : ""}</label>
                : null
            }
            <input
                id={id}
                type={type}
                placeholder={placeholder!}
                value={value}
                onChange={(e) => { change(e) }}
                disabled={disabled}
            />
            {typeof value == 'string' && max ? <p className={'viewLength'}>{`${value.length} / ${max.toString()}`}</p> : <></>}
            <p className={'message'}>{message}</p>
        </div>

    )
}