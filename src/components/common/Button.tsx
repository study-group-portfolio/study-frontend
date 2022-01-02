import cn from 'classnames';
import styles from 'css/components/common/Button.module.scss';
import { ButtonStatus } from 'utils/enum';

interface PrimaryButtonProps {
    buttonName: string;
    disabled: boolean;
    img: string | undefined;
    status: ButtonStatus,
    onClick: Function;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
    const { buttonName, img, disabled, status } = props;
    return (
        <button
            className={
                cn(
                    {
                        [styles.primary]: status === ButtonStatus.기본,
                        [styles.secondary]: status === ButtonStatus.서브
                    }
                )
            }
            disabled={disabled}
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => props.onClick(event)}
        >
            {img && <img src={img}/>}
            <span>{buttonName}</span>
        </button>
    )
}