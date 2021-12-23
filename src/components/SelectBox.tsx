import { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import styles from '../css/components/SelectBox.module.scss';
import expand_more_black_24dp from '../images/expand_more_black_24dp.svg';

class SelectBoxProps {
    width: string;
    marginTop: string;
    placeholder: string;
    items: string[];
    type: string; // O: 일반형태, G: 그룹형태

    constructor(
        width: string, 
        marginTop: string, 
        placeholder: string, 
        items: string[],
        type: string
    ) {
        this.width = width;
        this.marginTop = marginTop;
        this.placeholder = placeholder;
        this.items = items;
        this.type = type;
    }
}


function SelectBox(props: SelectBoxProps) {
    const { type } = props;

    const selectBoxRef = useRef(Object());
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    const inlineStyles = {
        backgroundImage: `url(${expand_more_black_24dp})`,
        width: props.width,
        marginTop: props.marginTop
    }

    return (
        <div 
            className={cn(styles.container)}
            ref={selectBoxRef}
        >
            <div className={cn(styles.select)} style={inlineStyles} onClick={() => setOpen(!open)}>{props.placeholder}</div>
            {type === 'O' && <div 
                style={{width: props.width}}
                className={cn(styles.options, {[styles.on]: open && props.items.length > 0, [styles.off]: !open || props.items.length == 0})}
            >
                {props.items.map((item, index) => <div className={cn(styles.option)} key={index}>{item}</div> )}
            </div>}
            {type === 'G' && <div 
                style={{width: props.width}}
                className={cn(styles.options, {[styles.on]: open && props.items.length > 0, [styles.off]: !open || props.items.length == 0})}
            >
                {props.items.map((list, index) => <div key={index}></div>)}
            </div>}
        </div>
    )
}

export default SelectBox;