import cn from "classnames";
import styles from "../../css/Auth/Components/FormButton.module.scss";

interface IFormButton {
  text: string;
  disabled?: boolean;
}

export default function FormButton({ text, disabled, ...props }: IFormButton) {
  return (
    <button
      disabled={disabled}
      className={disabled ? cn(styles.formBtnError) : cn(styles.formBtn)}
      {...props}
    >
      {text}
    </button>
  );
}
