import { useState } from "react";
import cn from "classnames";
import styles from "../../css/pages/users/Users.module.scss";
import { ButtonType, InputType, TextInputType } from "utils/enum";
// Icons
import ic_visibility_on_24dp from "images/icon/ic_visibility_on_24dp.svg";
import ic_visibility_off_24dp from "images/icon/ic_visibility_off_24dp.svg";
// Components
import TextInput from "components/common/TextInput";
import Button from "../../components/common/Button";

export default function Signin() {
  const [visible, setVisible] = useState(false);

  return (
    <section className={cn(styles.container)}>
      <div className={cn(styles.wrapper)}>
        <div className={cn(styles.pageTitleSection)}>
          <h1 className={cn(styles.pageTitle)}>비밀번호 재설정</h1>
          <p className={cn(styles.pageExp)}>새로운 비밀번호를 설정해주세요.</p>
        </div>
        <form action="POST" className={cn(styles.loginForm)}>
          <div className={cn(styles.inputWrapper)}>
            <label>비밀번호</label>
            <TextInput
              type={visible ? InputType.텍스트형 : InputType.패스워드형}
              placeholder="비밀번호를 입력해주세요"
              helpText="영문/숫자/특수문자 조합, 8자~32자"
              textInputType={TextInputType.아이콘형}
              onClick={() => setVisible(!visible)}
              buttonImg={
                visible ? ic_visibility_on_24dp : ic_visibility_off_24dp
              }
            />
          </div>
          <div className={cn(styles.inputWrapper)}>
            <label>비밀번호 확인</label>
            <TextInput
              type={visible ? InputType.텍스트형 : InputType.패스워드형}
              placeholder="비밀번호를 한 번 더 입력해주세요"
              textInputType={TextInputType.아이콘형}
              onClick={() => setVisible(!visible)}
              buttonImg={
                visible ? ic_visibility_on_24dp : ic_visibility_off_24dp
              }
            />
          </div>
          <div className={cn(styles.btnList)}>
            <Button
              buttonName={"재설정하기"}
              disabled={true}
              img={undefined}
              buttonType={ButtonType.기본}
              onClick={() => {}}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
