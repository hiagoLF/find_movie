import Image from "next/image";
import React from "react";
import movieIcon from "../../public/icons/movie.svg";
import styles from '../../styles/components/Header.module.scss'


export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Image src={movieIcon} alt='Encontre um filme' />
      <h3>Encontre um Filme</h3>
    </header>
  );
};
