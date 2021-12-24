import { useState } from 'react';
import styles from 'css/toggle-button.module.css';
import cn from 'classnames';

class ToggleButtonProps {
    toggle: boolean;
    onChangeToggle: Function;

    constructor(toggle: boolean, onChangeToggle: Function) {
        this.toggle = toggle;
        this.onChangeToggle = onChangeToggle;
    }
}

function ToggleButton(props: ToggleButtonProps) {
    const { toggle } = props;

    const onClickToggle = () => {
        props.onChangeToggle(!toggle);
    }

    return (
        <span className={cn(styles.togglePosition)}>
            <label 
                className={cn(styles.toggleLabel, {[styles.on]: toggle, [styles.off]: !toggle})}
                onClick={onClickToggle}
            ></label>
        </span>
    )
}

export default ToggleButton;