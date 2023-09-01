import "./checkbox.scss";

export type CheckboxProps = {
  id: string;
  label?: string;
  checked: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange: Function;
};

export default function Checkbox({
  id,
  label,
  checked = false,
  required = false,
  disabled = false,
  onChange,
}: CheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        required
        onChange={(e) => onChange(e)}
      />
      <label className="label" onClick={() => onChange(!checked)}>
        {label}
      </label>
    </>
  );
}
