import React from "react";

import styles from "../../styles/components/Button.module.scss";

interface ButtonProps {
  title: string;
  selected: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, selected }) => {
  return <button className={`${styles.container} ${selected && styles.selectedButton}`}>{title}</button>;
};
