import React from "react";
import styles from "./select.module.css";

interface ISelect {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export default function Select({ options, onChange }: ISelect) {
  return (
    <select
      className={styles.select}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}
