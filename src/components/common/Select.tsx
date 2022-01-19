import cn from 'classnames';
import styles from 'css/components/common/Select.module.scss';
import ic_expand_less_24dp from 'images/icon/ic_expand_less_24dp.svg';
import ic_expand_more_24dp from 'images/icon/ic_expand_more_24dp.svg';
import { useState, useEffect, useRef, cloneElement } from 'react';
import { CustomChangeEvent } from 'utils/interface';
import { SelectEventType } from 'utils/enum';

interface SelectProps {
    placeholder?: string;
    value?: string | string[];
    onChange?: (customChangeEvent: CustomChangeEvent) => (void);
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
            style={getTextColorStyle(!value || value.length === 0 ? GRAY : BLACK)} 
            className={cn(styles.container)}
            ref={selectRef}
        >
            <div 
                className={cn(styles.select)}
                onClick={() => setOpen(!open)}
            >
                <span>{getDisplayText(placeholder, value)}</span>
                {!open && <img src={ic_expand_more_24dp} />}
                {open && <img src={ic_expand_less_24dp} />}
            </div>
            <div>
                {open && 
                cloneElement(children, {
                    options: children.props.options,
                    onChange(customChangeEvent: CustomChangeEvent) {
                        if (props.onChange) {
                            props.onChange(customChangeEvent);
                            if (customChangeEvent.selectEventType !== SelectEventType.체크선택박스) setOpen(false);
                        }
                    },
                    selectedList: value
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

function getDisplayText(placeholder?: string, value?: string | string[]): string {
    if (!value || value.length === 0) {
        return placeholder || '';
    } else if (typeof value === 'string') {
        return value;
    }

    return value.join('/');
}