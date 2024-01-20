import "./textarea.scss";

export type TextareaProps = {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  onChange?: Function;
  length?: number;
  height?: number;
  disabled?: boolean;
  required?: boolean;
};

export default function Textarea({
  id,
  name,
  label,
  value,
  length = 255,
  height = 100,
  disabled = false,
  required = false,
  onChange = () => {},
}: TextareaProps) {
  const change = (e: any) => {
    if (typeof e.target.value == "string")
      value = e.target.value.slice(0, length);
    onChange(value);
  };

  return (
    <div className={"inputForms"}>
      {label ? (
        <>
          <label htmlFor={id}>
            {label}
            {required ? " *" : ""}
          </label>
          <div className="space"></div>
        </>
      ) : null}
      <textarea
        id={id}
        name={name}
        value={value}
        style={{ height: height + "px" }}
        onChange={(e) => change(e)}
        disabled={disabled}
      ></textarea>
      {length && length > 0 ? (
        <p className={"viewLength"}>
          {value ? value.length : 0} / {length}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
