import HTTP from 'api/http';
import cn from 'classnames';
import styles from 'css/pages/mypage/profile/ElementRevision.module.scss';
import ProfileFormInput from 'components/Auth/ProfileFormInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRef } from 'react';
import FormButton from 'components/Auth/FormButton';

interface IPasswordResetInput {
    currentPassword: string;
    newPassword: string;
    newConfirmPassword: string;
}

export default function ProfilePasswordResetting() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        getValues,
        watch

    } = useForm<IPasswordResetInput>({
        mode: "onChange",
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            newConfirmPassword: "",
        }
    });

    const onFormSubmit: SubmitHandler<IPasswordResetInput> = async () => {
        const { currentPassword, newPassword, newConfirmPassword } = getValues();
        console.log(currentPassword, newPassword, newConfirmPassword)
        const res = await HTTP.put(`http://localhost:8080/api/member/profile/password`, {

            currentPassword,
            newPassword,
            newConfirmPassword
        }).then((response) => {
            alert("비밀번호가 변경 되었습니다.")

            //페이지이동
        }).catch((errors) => {
            // console.log(errors.response.data);
            alert("올바르지 못한 요청 입니다.")
        })




    };




    return (
        <div className={cn(styles.container)}>
            {/* <h3 className={cn(styles.heading1, styles.title)}>비밀번호 변경</h3> */}
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.section)}>
                        <ProfileFormInput
                            {...register("currentPassword", {
                                required: true,
                            })}
                            labelText="비밀번호"
                            placeholder="비밀번호를 입력해 주세요."
                            type="password"
                            name="currentPassword"
                        />

                        <div className={cn(styles.subSection)}>
                            <ProfileFormInput
                                {...register("newPassword", {
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
                                labelText="새로운 비밀번호"
                                placeholder="새로운 비밀번호를 입력해 주세요."
                                type="password"
                                hasError={Boolean(errors?.newPassword)}

                                name="newPassword"
                            />

                            {errors?.newPassword &&
                                <p className={cn(styles.passwordErrorText)}>
                                    {errors?.newPassword.message}
                                </p>}


                            <ProfileFormInput
                                {...register("newConfirmPassword", {
                                    required: "비밀번호가 일치하지 않습니다.",
                                    validate: (value) =>
                                        value === watch("newPassword") || "변경하실 비밀번호가 일치하지 않습니다"

                                })}
                                //   labelText="비밀번호"
                                placeholder="비밀번호를 입력해 주세요."
                                type="password"
                                hasError={Boolean(errors?.newConfirmPassword)}
                                helpText="영문/숫자/특수문자 조합, 8자~32자"
                                name="newConfirmPassword"
                            />
                        </div>

                        {errors?.newConfirmPassword && errors.newConfirmPassword?.type === "validate" &&
                            <p className={cn(styles.confirmPasswordErrorText)}>
                                {errors?.newConfirmPassword.message}
                            </p>
                        }
                    </div>
                    <div className={cn(styles.btnBox)}>
                        <button
                            disabled={!isValid}
                            className={isValid ? cn(styles.formBtn) : cn(styles.formBtnError)}
                        >
                            저장하기
                        </button>
                        {/* <button className={cn(styles.btn, styles.primary)}>저장하기</button> */}
                    </div>
                </div>
            </form>
        </div>
    )
}