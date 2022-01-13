import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "../../css/components/common/BackBtn.module.scss";
import { ReactComponent as BackArrow } from "../../images/img/img_back_arrow.svg";

interface BackBtnRoute {
  to: string;
}

export default function BackBtn({ to }: BackBtnRoute) {
  return (
    <div className={cn(styles.backBtn)}>
      <Link to={to}>
        <BackArrow />
        <span className={cn(styles.backBtnText)}>이전으로</span>
      </Link>
    </div>
  );
}
