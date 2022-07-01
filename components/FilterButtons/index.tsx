import React from "react";
import { Button } from "../Button";
import styles from "../../styles/components/FilterButtons.module.scss";

export const FilterButtons: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button title="Comédia" selected={false} />
      <Button title="Drama" selected={true} />
      <Button title="Aventura" selected={false} />
      <Button title="Romança" selected={false} />
      <Button title="Ficção Científica" selected={false} />
      <Button title="Clásico" selected={false} />
      <Button title="Comédia" selected={true} />
      <Button title="Comédia" selected={false} />

    </div>
  );
};
