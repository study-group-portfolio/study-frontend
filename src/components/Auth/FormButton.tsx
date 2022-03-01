import cn from "classnames";
import styles from "../../css/Auth/Components/FormButton.module.scss";

interface IFormButton {
  text: string;
  disabled?: boolean;
}

export default function FormButton({ text, disabled }: IFormButton) {
  return (
    <button disabled={disabled} className={cn(styles.formBtn)}>
      {text}
    </button>
  );
}
