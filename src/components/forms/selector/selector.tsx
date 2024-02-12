import { useTheme } from "../../../providers/theme";
import {
  getPrimaryTheme,
  getSecondaryBorderTheme,
  getSecondaryTheme,
} from "../../../utils/provider.utils";
import "./selector.scss";

export type SelectorOption = {
  value: string | number;
  label: string;
};

export type SelectorProps = {
  id: string;
  label?: string;
  required: boolean;
  selected: string | number;
  options: SelectorOption[];
  radius?: boolean;
  onChange: Function;
};

export default function Selector({
  id,
  label = "",
  required = false,
  options,
  selected,
  radius = false,
  onChange,
}: SelectorProps) {
  const { theme } = useTheme();
  return (
    <div className={"selector"}>
      {label ? (
        <>
          <label
            htmlFor={id}
            className={`${getPrimaryTheme(theme)} ${radius ? "radius" : ""}`}
          >
            {label}
            {required ? " *" : ""}
          </label>
          <div className="space"></div>
        </>
      ) : null}
      <select
        value={selected || ""}
        className={`${getSecondaryTheme(theme)} ${getSecondaryBorderTheme(
          theme
        )} options ${radius ? "radius" : ""}`}
        onChange={(e) => onChange(e)}
      >
        {options.map((option) => {
          return (
            <option value={option.value || ""} key={option.label}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
