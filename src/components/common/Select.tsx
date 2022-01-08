import cn from 'classnames';
import styles from 'css/components/common/Select.module.scss';
import ic_expand_less_24dp from 'images/icon/ic_expand_less_24dp.svg';
import ic_expand_more_24dp from 'images/icon/ic_expand_more_24dp.svg';
import { useState, useEffect, useRef, cloneElement } from 'react';

interface SelectProps {
    placeholder?: string;
    value?: string;
    onChange?: Function;
    children?: any;
}

export default function Select(props: SelectProps) {
    const { placeholder, children, value } = props;
    const selectRef = useRef(Object());
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function onClickOutside(event: MouseEvent) {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('click', onClickOutside);

        return () => {
            document.removeEventListener('click', onClickOutside);
        }
    })

    return (
        <div
            style={getTextColorStyle(value ? BLACK : GRAY)} 
            className={cn(styles.container)}
            ref={selectRef}
        >
            <div 
                className={cn(styles.select)}
                onClick={() => setOpen(!open)}
            >
                <span>{value || placeholder}</span>
                {!open && <img src={ic_expand_more_24dp} />}
                {open && <img src={ic_expand_less_24dp} />}
            </div>
            <div>
                {open && 
                cloneElement(children, {
                    options: children.props.options,
                    onChange(item: string) {
                        if (props.onChange) {
                            props.onChange(item);
                            setOpen(false);
                        }
                    }
                })}
            </div>
        </div>
    )
}

const BLACK = "#101828";
const GRAY = "#98A2B3";

function getTextColorStyle(color: string) {
    return  {color};
}