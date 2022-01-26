import cn from 'classnames';
import styles from 'css/components/common/CircleButton.module.scss';
import { NONAME } from 'dns';
import { CircleButtonType } from 'utils/enum';

interface CircleButtonConfig {
    radius: number,
    lineHeight?: number,
}

interface ProfileCircleProps {
    radius: number;
    lineHeight?: number;
    fontSize?: number
    circleButtonType: CircleButtonType;
    name?: string;
    imgUrl?: string;
    onClick?: Function;
}

export default function CircleButton(props: ProfileCircleProps) {
    const { radius, circleButtonType, name, lineHeight, imgUrl, fontSize } = props;

    const onClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <button 
            style={getBtnStyle(circleButtonType, radius, lineHeight, fontSize)}
            className={cn(styles.circle)}
            onClick={() => onClick()}
        >
            {circleButtonType === CircleButtonType.일반형 && name}
            {circleButtonType === CircleButtonType.아이콘형 && <img src={imgUrl} />}
            {circleButtonType === CircleButtonType.이미지형 && 
                <img
                    style={{
                        width: `${radius * 2}px`,
                        height: `${radius * 2}px`,
                        borderRadius: `${radius}px`
                    }} 
                    src={imgUrl} 
                />
            }
        </button>
    )
}

function getBtnStyle(circleButtonType: CircleButtonType, radius: number, lineHeight?: number, fontSize?: number) {
    switch (circleButtonType) {
        case CircleButtonType.일반형:
        case CircleButtonType.아이콘형:
            return {
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                borderRadius: `${radius}px`,
                lineHeight: `${lineHeight}px`,
                padding: `${radius - 1 - ((lineHeight || 18) / 2)}px 0`,
                fontSize: `${fontSize || 14}px`
            };
        case CircleButtonType.이미지형:
            return {
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                borderRadius: `${radius}px`,
                border: 'none',
                backgroundColor: 'none',
                padding: '0'
            }

    }
}