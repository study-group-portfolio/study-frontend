import cn from "classnames";
import styles from "../../css/pages/users/Users.module.scss";
// Enum
import {
  ButtonType,
  Path,
  InputType,
  TextInputState,
  TextInputType,
} from "utils/enum";
// Components
import TextInput from "components/common/TextInput";
import Button from "../../components/common/Button";
import BackBtn from "../../components/Auth/BackBtn";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function FindPassword() {
  const {register, handleSubmit, watch, formState:{errors, isValid} } = useForm();
  const [email, setEmail] = useState<String>('');
  const [emailStatus, setEmailStatus] = useState<TextInputState>(TextInputState.기본값);
  
  useEffect(()=>{
    

  },[email])

  async function onClickEventHandler(){
    console.log(email)
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/member/password/send-mail`,{
      email
    }).then((response)=>{
      console.log(response.data)
    }).catch((e) =>{
      alert("존재하지 않는 이메일 입니다.");
    }
    )
  }

  

  return (
    <section className={cn(styles.container)}>
      <div className={cn(styles.wrapper)}>
        <BackBtn to={Path.로그인} />
        <div className={cn(styles.pageTitleSection)}>
          <h1 className={cn(styles.pageTitle)}>비밀번호 찾기</h1>
          <p className={cn(styles.pageExp)}>
            비밀번호를 재설정하기 위한 링크를 이메일로 보내드릴게요.
            <br />
            가입 시 사용한 이메일 주소를 정확히 입력해주세요.
          </p>
        </div>
        <div className={cn(styles.loginForm)}>
          <div className={cn(styles.inputWrapper)}>
            <label>이메일</label>
            <TextInput
              placeholder={"example@studyit.co.kr"}
              type={InputType.텍스트형}
              textInputState={emailStatus}
              textInputType={TextInputType.일반형}
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{ 
                setEmail(e.target.value)
                
              } }
              errorText={"올바른 이메일을 입력해 주세요."}
            />
          </div>
          <div className={cn(styles.btnList)}>
            <Button
              buttonName={"이메일로 링크 받기"}
              buttonType={ButtonType.기본}
              onClick={()=>onClickEventHandler()}
              
            />
          </div>
        </div>
      </div>
    </section>
  );
}
