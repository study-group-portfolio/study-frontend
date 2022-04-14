import cn from 'classnames';
import styles from 'css/components/common/ExtendedCircleButton.module.scss';
import { CircleButtonType } from "utils/enum";
import CircleButton from "./CircleButton";

interface IExtendedProfileCircleProps {
    radius: number;
    fontSize?: number
    circleButtonType: CircleButtonType;
    name?: string;
    imgUrl?: string;
    onClick?: Function;
}

export function ExtendedCircleButton(props : IExtendedProfileCircleProps) {

    return (
        <div className={cn(styles.filebox)}>
            <CircleButton
            radius={60}
            circleButtonType={CircleButtonType.일반형}
            name={props.name}
            fontSize={20}
            />
            <div className={cn(styles.filebox__body)}>
                <label htmlFor="file"></label>
                    <input type="file" id='file'></input>
            </div>
        </div>
    )
}