import { useState } from "react";
import cn from "classnames";
import styles from "../../css/pages/users/Users.module.scss";
import { ButtonType, InputType, Path, TextInputType } from "utils/enum";
// Icons
import ic_visibility_on_24dp from "images/icon/ic_visibility_on_24dp.svg";
import ic_visibility_off_24dp from "images/icon/ic_visibility_off_24dp.svg";
// Components
import TextInput from "components/common/TextInput";
import Button from "../../components/common/Button";
import { match, matchPath, useParams } from "react-router-dom";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import FormButton from "components/Auth/FormButton";
import FormInput from "components/Auth/FormInput";
import axios from "axios";
import { useGoPage } from "utils/custom-hook";

interface IRestPasswordParams{
  resetToken : string;
  email : string;
}

interface IRestPasswordProps{
  match?: match<IRestPasswordParams>;
}

interface IRestPasswordInputs {
  password : string;
  confirmPassword : string;
}

export default function Signin(restPasswordProps : IRestPasswordProps) {
  const {
    register,
    handleSubmit,
    formState : {errors, isValid},
    getValues,
    watch

  } = useForm<IRestPasswordInputs>({
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword : ""
    }
  });

  const goLoginPage = useGoPage(Path.로그인);

  const [visible, setVisible] = useState(false);
  const resetToken = restPasswordProps.match?.params.resetToken;
  const email = restPasswordProps.match?.params.email;
  // console.log(restPasswordProps)
  // console.log(resetToken)
  // console.log(email)
  
  
  
    
    const onFormSubmit: SubmitHandler<IRestPasswordInputs> = async () => {
      const {  password, confirmPassword,  } = getValues();
      const res = await axios.put(`http://localhost:8080/api/member/password`, {
        email,
        password,
        confirmPassword,
        resetToken,
      }).then((response)=>{
        goLoginPage();
      }).catch((errors) =>{
        // console.log(errors.response.data);
        alert("올바르지 못한 요청 입니다.")
      })
   
   
     
      
    };
  
    const onFormSubmitError: SubmitErrorHandler<IRestPasswordInputs> = (e: any) => {
      console.log(e);
    };
  
    
    
    
  return (
    <section className={cn(styles.container)}>
      <div className={cn(styles.wrapper)}>
        <div className={cn(styles.pageTitleSection)}>
          <h1 className={cn(styles.pageTitle)}>비밀번호 재설정</h1>
          <p className={cn(styles.pageExp)}>새로운 비밀번호를 설정해주세요.</p>
        </div>
        {/* <form action="POST" className={cn(styles.loginForm)}> */}
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={cn(styles.inputWrapper)}>
            <FormInput
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "올바른 비밀번호를 입력해 주세요.",
            },
            maxLength: {
              value: 32,
              message: "올바른 비밀번호를 입력해 주세요.",
            },
            pattern: {
              value:
                // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // 대소문자 섞을 필요 x
              message: "올바른 비밀번호를 입력해 주세요.",
            },
          })}
          labelText="비밀번호"
          placeholder="비밀번호를 입력해 주세요."
          type="password"
          hasError={Boolean(errors?.password)}
          helpText="영문/숫자/특수문자 조합, 8자~32자"
          name="password"
        />
              {errors?.password && (
          <span className={cn(styles.errorText)}>
            {errors?.password.message}
          </span>
        )}
          </div>
          <FormInput
          {...register("confirmPassword", {
            required: "비밀번호가 일치하지 않습니다.",
            validate: {
              passwordMatch: (v: string) =>
                v === watch("password") || "비밀번호가 일치하지 않습니다.",
            },
          })}
          labelText="비밀번호 확인"
          hasError={Boolean(errors?.confirmPassword)}
          placeholder="비밀번호를 한 번 더 입력해 주세요."
          type="password"
          name="confirmPassword"
        />
        {errors?.confirmPassword && (
          <span className={cn(styles.errorText)}>
            {errors?.confirmPassword.message}
          </span>
        )}
          <div className={cn(styles.btnList)}>
            <FormButton text="재설정 하기" disabled={!isValid}/>
          </div>
        </form>
      </div>
    </section>
  );
}
