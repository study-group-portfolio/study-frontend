import cn from 'classnames';
import styles from 'css/components/common/Button.module.scss';
import { ButtonType } from 'utils/enum';
import img_social_google from 'images/img/img_social_google.svg';
import img_social_kakao from 'images/img/img_social_kakao.svg';
interface PrimaryButtonProps {
    buttonName?: string;
    disabled?: boolean;
    img?: string | undefined;
    buttonType: ButtonType,
    onClick?: Function;
    children?: any;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
    const { buttonName, img, disabled, buttonType, children } = props;

    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(event);
        }
    }

    return (
        <button
            className={
                cn(
                    styles.btn,
                    {
                        [styles.primary]: buttonType === ButtonType.기본,
                        [styles.secondary]: buttonType === ButtonType.서브,
                        [styles.googleLogin]: buttonType === ButtonType.구글,
                        [styles.kakaoLogin]: buttonType === ButtonType.카카오
                    }
                )
            }
            disabled={disabled}
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onClick(event)}
        >
            {img && buttonType !== ButtonType.구글 && buttonType !== ButtonType.카카오 && <img src={img}/>}
            {buttonType === ButtonType.구글 && <img src={img_social_google}/>}
            {buttonType === ButtonType.카카오 && <img src={img_social_kakao}/>}
            <span>{buttonName || children}</span>
        </button>
    )
}