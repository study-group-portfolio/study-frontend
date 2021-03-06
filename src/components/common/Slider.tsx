import cn from 'classnames';
import styles from 'css/components/common/Slider.module.scss';
import ic_chevron_left_off_24dp from 'images/icon/ic_chevron_left_off_24dp.svg';
import ic_chevron_left_on_24dp from 'images/icon/ic_chevron_left_on_24dp.svg';
import ic_chevron_right_off_24dp from 'images/icon/ic_chevron_right_off_24dp.svg';
import ic_chevron_right_on_24dp from 'images/icon/ic_chevron_right_on_24dp.svg';
import { useState } from 'react';

interface SliderProps {
    children: any;
}

export default function Slider(props: SliderProps) {
    const { children } = props;
    const [index, setIndex] = useState(0);

    return (
    <div className={cn(styles.container)}>
        <div className={cn(styles.side)}>
            <button
                disabled={index <= 0}
                onClick={() => setIndex(index - 1)}
            >
                {index > 0 && <img src={ic_chevron_left_on_24dp} alt="ic_chevron_left_on_24dp"/>}
                {index <= 0 && <img src={ic_chevron_left_off_24dp} alt="ic_chevron_left_off_24dp"/>}
            </button>
        </div>
        <div className={cn(styles.content)}>
            <div className={cn(styles.wrap)}>
                <ul className={cn(styles.list)}style={getTransitionStyle(index)}>
                    {children && children.length > 0 && children.map((child: any, index: number) => (<li key={index}>{child}</li>))}
                </ul>
            </div>
        </div>
        <div className={cn(styles.side)}>
            <button
                disabled={index >= 3}
                onClick={() => setIndex(index + 1)}>
                {index < 3 && <img src={ic_chevron_right_on_24dp} alt="ic_chevron_right_on_24dp"/>}
                {index >= 3 && <img src={ic_chevron_right_off_24dp} alt="ic_chevron_right_off_24dp"/>}
            </button>
        </div>
    </div>)
}

function getTransitionStyle(index: number) {
    return {
        transform: `translate(${index * (-1180)}px)`,
        transitionProperty: 'transform',
        transitionDuration: '1s'
    }
}