import cn from 'classnames';
import styles from 'css/components/common/RadioBox.module.scss';
import { useState } from 'react';

interface RadioBoxProps {
    radioNames: string[];
    onClick: Function;
}

export default function RadioButton(props: RadioBoxProps) {
    const { radioNames } = props;
    const [radioButton, setRadioButton] = useState(0)

    const onClick = (radioName: string, index: number) => {
        setRadioButton(index);
        props.onClick(radioName);
    }

    return (
        <div style={getGridStyle(radioNames.length)}>
            {radioNames.map((radioName: string, index: number) => (
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
                    onClick={() => onClick(radioName, index)}
                >
                    {radioName}
                </button>)
            )}
        </div>
    )
}

const getGridStyle = function(length: number) {
    const gridStyle = {
        display: 'grid',
        'grid-template-columns': '',
    }
    const buttonWidth = `${(100 / length)}%`;

    for (let i = 0; i < length; i++) {
        gridStyle['grid-template-columns'] += buttonWidth;
        if (i !== length - 1) gridStyle['grid-template-columns'] += ' ';
    }

    return gridStyle;
}