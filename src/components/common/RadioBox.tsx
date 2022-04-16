import cn from 'classnames';
import styles from 'css/components/common/RadioBox.module.scss';
import { useState } from 'react';
import { Entry } from 'utils/interface';

interface RadioBoxProps<T> {
    radios: Entry<T>[];
    onClick?: (value: T) => (void);
}

export default function RadioButton<T>(props: RadioBoxProps<T>) {
    const { radios } = props;
    const [radioButton, setRadioButton] = useState(0)

    const onClick = (value: T, index: number) => {
        setRadioButton(index);
        if (props.onClick) {
            props.onClick(value);
        }
    }

    return (
        <div style={getGridStyle(radios.length)}>
            {radios.map((radio: Entry<T>, index: number) => (
                <button 
                    className={
                        cn(
                            styles.radioButton,
                            {
                                [styles.on]: radioButton === index,
                                [styles.off]: radioButton !== index
                            }
                        )
                    }
                    onClick={() => onClick(radio.value, index)}
                    key={index}
                >
                    {radio.name}
                </button>)
            )}
        </div>
    )
}

const getGridStyle = function(length: number) {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '',
    }
    const buttonWidth = `${(100 / length)}%`;

    for (let i = 0; i < length; i++) {
        gridStyle['gridTemplateColumns'] += buttonWidth;
        if (i !== length - 1) gridStyle['gridTemplateColumns'] += ' ';
    }

    return gridStyle;
}