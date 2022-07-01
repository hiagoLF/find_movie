import Image from "next/image";
import tomatoIcon from "../../public/icons/tomato.svg";
import styles from "../../styles/components/Movie.module.scss";

interface MovieProps {
  title: string;
  year: string;
  imageUri: string;
  note: number;
}

export const Movie: React.FC<MovieProps> = ({
  title,
  year,
  imageUri,
  note,
}) => {
  return (
    <div className={styles.container}>
      <Image alt="Poster do filme" src={imageUri} width={160} height={240} />
      <h6>{title}</h6>
      <span>{year}</span>
      <div>
        <span>{note}</span>
        <Image src={tomatoIcon} alt="Ícone de Tomate" />
      </div>
    </div>
  );
};
