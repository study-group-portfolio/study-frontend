import { FC, forwardRef } from "react";
import cn from "classnames";
import styles from "../../css/Auth/Components/FormInput.module.scss";
// Components
import { InputType } from "../../utils/enum";

interface IFormInput {
  labelText: string;
  placeholder?: string;
  type?: string;
  helpText?: string;
  hasError?: boolean;
}

const FormInput: FC<IFormInput> = forwardRef<HTMLInputElement, IFormInput>(
  ({ labelText, placeholder, type, helpText, hasError, ...props }, ref) => {
    return (
      <div className={cn(styles.formInputBoxWrapper)}>
        <label className={cn(styles.formInputLabel)}>{labelText}</label>
        <input
          className={
            hasError ? cn(styles.formInputErrorBox) : cn(styles.formInputBox)
          }
          placeholder={placeholder}
          type={type}
        />
        {helpText ? (
          <span className={cn(styles.formInputHelpText)}>{helpText}</span>
        ) : null}
      </div>
    );
  }
);

export default FormInput;
