import * as styles from "./Button.css";

type Props = JSX.IntrinsicElements["button"] & styles.ButtonVariants;

function Button({ size, ...props }: Props) {
  return <button {...props} className={styles.button({ size })} />;
}

export default Button;
