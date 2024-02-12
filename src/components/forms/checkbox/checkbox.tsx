import { useTheme } from "../../../providers/theme";
import {
  getPrimaryTheme,
  getSecondaryTheme,
} from "../../../utils/provider.utils";
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
  const { theme } = useTheme();
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        required={required}
        onChange={(e) => onChange(e)}
      />
      <label
        className={`label ${getSecondaryTheme(theme)}`}
        onClick={() => onChange(!checked)}
      >
        {label}
      </label>
    </div>
  );
}
