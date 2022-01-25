import cn from 'classnames';
import styles from 'css/components/common/CircleButton.module.scss';

interface ProfileCircleProps {
    radius: number;
    name?: string;
    height: number;
    imgUrl?: string;
    imgStyle?: Object;
}

export default function CircleButton(props: ProfileCircleProps) {
    const { radius, name, imgUrl, height, imgStyle } = props;

    return (
        <button 
            style={
                {
                    width: `${radius * 2}px`, 
                    height: `${radius * 2}px`,
                    borderRadius: `${radius}px`,
                    padding: `${radius - (height / 2)}px`,
                    lineHeight: `${height || 18}px`
                }
            }
            className={cn(styles.circle)}
        >
            {!Boolean(imgUrl) && name}
            {Boolean(imgUrl) && 
                <img
                    style={imgStyle}
                    src={imgUrl} 
                />
            }
        </button>
    )
}