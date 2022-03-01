import cn from "classnames";
import styles from "../../css/Auth/Components/FormTop.module.scss";
// Components
import BackBtn from "./BackBtn";
// Path
import { Path } from "../../utils/enum";

interface IFormTop {
  formTopTitle: string;
  formTopText: string;
}

export default function FormTop({ formTopTitle, formTopText }: IFormTop) {
  return (
    <div className={cn(styles.formTopWrapper)}>
      <BackBtn to={Path.회원가입} />
      <h1 className={cn(styles.formTopTitle)}>{formTopTitle}</h1>
      <p className={cn(styles.formTopText)}>{formTopText}</p>
    </div>
  );
}
