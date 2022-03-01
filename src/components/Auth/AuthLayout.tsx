import cn from "classnames";
import styles from "../../css/Auth/Components/AuthLayout.module.scss";
import { IAuthLayout } from "utils/interface";

export default function AuthLayout({ children }: IAuthLayout) {
  return (
    <main className={cn(styles.container)}>
      <section className={cn(styles.wrapper)}>{children}</section>
    </main>
  );
}
