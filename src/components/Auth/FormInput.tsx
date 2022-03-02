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
  name: string;
}

const FormInput: FC<IFormInput> = forwardRef<HTMLInputElement, IFormInput>(
  (
    { labelText, placeholder, type, helpText, name, hasError, ...props },
    ref
  ) => {
    return (
      <div className={cn(styles.formInputBoxWrapper)}>
        <label className={cn(styles.formInputLabel)}>{labelText}</label>
        <input
          className={
            hasError ? cn(styles.formInputErrorBox) : cn(styles.formInputBox)
          }
          placeholder={placeholder}
          type={type}
          ref={ref}
          name={name}
          {...props}
        />
        {helpText ? (
          <span className={cn(styles.formInputHelpText)}>{helpText}</span>
        ) : null}
      </div>
    );
  }
);

export default FormInput;
