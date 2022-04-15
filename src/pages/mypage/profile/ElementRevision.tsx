import HTTP from 'api/http';
import axios from 'axios';
import cn from 'classnames';
import FormInput from 'components/Auth/FormInput';
import CircleButton from 'components/common/CircleButton';
import { ExtendedCircleButton } from 'components/common/ExtendedCircleButton';
import ReactHelmet from 'components/common/Helmet';
import styles from 'css/pages/mypage/profile/ElementRevision.module.scss';
import React, { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from 'redux/login/loginSlice';
import { defaultEdit } from 'redux/member/memberSlice';
import { AppDispatch, RootState } from 'redux/store';
import { useGoPage } from 'utils/custom-hook';
import { CircleButtonType, Path } from 'utils/enum';
import { remove as memberRemove } from 'redux/member/memberSlice';
import { remove as alarmRemove } from 'redux/alarm/alarmSlice';

interface IDefaultProfileInputs {
    nickname: string;
    img?: string;
    email?: string;
}

export default function ProfileElementRevision() {
    const member = useSelector((state: RootState) => state.memberStore)
    const img = member.img;
    const email = member.email;
    const dispatch = useDispatch<AppDispatch>();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        getValues,
        watch,
    } = useForm<IDefaultProfileInputs>({
        mode: "onChange",
        defaultValues: {
            nickname: member.nickname
        },
    });

    function sucessUpdate(response: IDefaultProfileInputs) {
        dispatch(defaultEdit(response))

    }
    async function onClickEventHandler(e: React.MouseEvent) {
        e.preventDefault()
        if (window.confirm("회원 탈퇴 하시겠습니까?")) {
            const withdrawal = await HTTP.delete(`http://localhost:8080/api/member/withdrawal`)
                .then((respone) => {
                    console.log(respone.data)
                    alert("회원 탈퇴가 완료 되었습니다.")
                    dispatch(logout());
                    dispatch(memberRemove())
                    dispatch(alarmRemove());
                    window.location.href = "/";
                })
                .catch((error) => {
                    console.log(error.config)
                    alert("잘못된 요청입니다.")
                })
        }
    }


    const onFormSubmit: SubmitHandler<IDefaultProfileInputs> = async () => {
        const { nickname } = getValues();
        const res = await HTTP.put(`http://localhost:8080/api/member/profile/basic`, {
            nickname,
            email
        }).then((response) => {
            if (response.status == 200) {
                sucessUpdate(response.data.data)
            }

        }).catch((errors) => {
            alert("올바르지 못한 입력 값 입니다.")
        })

    };

    const onFormSubmitError: SubmitErrorHandler<IDefaultProfileInputs> = (e: any) => {
        console.log(e);
    };

    return (
        <div className={cn(styles.container)}>
            <form onSubmit={handleSubmit(onFormSubmit, onFormSubmitError)}>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.section)}>

                        <div className={cn(styles.subSection)}>
                            <h3 className={cn(styles.body7)}>프로필 이미지</h3>
                            <ExtendedCircleButton
                                radius={60}
                                circleButtonType={CircleButtonType.일반형}
                                name={member.nickname && member.nickname.charAt(0)}
                                fontSize={13}
                            />
                        </div>


                        <FormInput
                            {...register("nickname", {
                                required: true,
                                maxLength: {
                                    value: 10,
                                    message: "올바른 닉네임을 입력해 주세요.",
                                },
                                validate: {
                                    nicknameAlreadyExists: async (v: string) =>
                                        (await axios.get(
                                            `http://localhost:8080/api/member/checkNickname/${v}`
                                        )) || "이미 사용 중인 닉네임입니다.",
                                },
                            })}
                            labelText="닉네임"
                            hasError={Boolean(errors?.nickname)}
                            placeholder="닉네임을 입력해 주세요."
                            type="text"
                            helpText="한글/영어/숫자 혼용가능, 최대 10자"
                            name="nickname"
                        />
                        {errors?.nickname && (
                            <span className={cn(styles.errorText)}>
                                {errors?.nickname.message}
                            </span>
                        )}




                        <div className={cn(styles.subSection)}>
                            <h3 className={cn(styles.body7)}>이메일</h3>
                            <p className={cn(styles.body3)}>{member.email}</p>
                        </div>
                        <div className={cn(styles.subSection)}>
                            <h3 className={cn(styles.body7)}>비밀번호</h3>

                            <a href="#!" className={cn(styles.body4)}>
                                <Link to={`/mypage/ProfilePasswordResetting`}>
                                    비밀번호 변경하기
                                </Link></a>
                        </div>
                    </div>
                    <div className={cn(styles.btnBox)}>
                        <button onClick={(e: React.MouseEvent) => { onClickEventHandler(e) }} className={cn(styles.btn, styles.error)}>탈퇴하기</button>
                        <button type='submit' className={cn(styles.btn, styles.primary)}>저장하기</button>
                    </div>
                </div>
            </form>


        </div>

    )
}

