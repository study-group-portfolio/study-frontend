import { useState, useEffect, useRef } from 'react';
import cn from 'classnames';

import Calendar from '../components/Calendar';
import styles from '../css/components/SelectCalendar.module.scss';
import { Position } from '../utils/enum';

import calendar_today_black_24dp from '../images/calendar_today_black_24dp.svg';
import arrow_back_btn from '../images/arrow_back_btn.svg';
import arrow_forward_btn from '../images/arrow_forward_btn.svg';
import moment from 'moment';

class SelectCalendarProps {
    interval: string[] = [];
    onSelectCalendar: Function;

    constructor(interval: string[], onSelectCalendar: Function) {
        this.interval = interval;
        this.onSelectCalendar = onSelectCalendar;
    }
}

function SelectCalendar(props: SelectCalendarProps) {
    const calendarRef = useRef(Object());
    const [open, setOpen] = useState(false);
    const [calendars, setCalendars]: [moment.Moment[], Function] = useState([moment(), moment().add(1, 'month')]);
    const [display, setDisplay] = useState('날짜를 선택해 주세요');

    const { interval } = props;

    useEffect(() => {
        if (!interval || interval.length !== 2) {
            setDisplay('날짜를 선택해 주세요');
        } else {
            setDisplay(`${moment(interval[0]).format('YYYY년 MM월 DD일')} ~ ${moment(interval[1]).format('YYYY년 MM월 DD일')}`);
        }

        function handleClickOutside(event: MouseEvent) {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [interval])
    
    const onSelectCalendar = (date: String) => {
        props.onSelectCalendar(date);
    }

    const onClickPrev = () => {
        const date = moment(calendars[0]);
        setCalendars([date.subtract(1, 'month'), calendars[0]]);
    }

    const onClickNext = () => {
        const date = moment(calendars[1]);
        setCalendars([calendars[1], date.add(1, 'month')]);
    }

    return (
        <div 
            className={cn(styles.container)}
            ref={calendarRef}
        >
            <div 
                className={cn(styles.select)} 
                style={CALENDAR_IMG_STYLE}
                onClick={() => setOpen(!open)}
            >
                {display}
            </div>
            {open && <div className={cn(styles.calendarBox)}>
                <div className={cn(styles.leftArrow)}>
                    <button 
                        style={ALLOW_BACK_IMG_STYLE}
                        onClick={onClickPrev}
                    >
                        &nbsp;
                    </button>
                </div>
                <Calendar
                    position={Position.왼쪽}
                    year={calendars[0].year()}
                    month={calendars[0].month() + 1}
                    interval={interval}
                    onClickDay={onSelectCalendar}
                ></Calendar>
                <Calendar
                    position={Position.왼쪽}
                    year={calendars[1].year()}
                    month={calendars[1].month() + 1}
                    interval={interval}
                    onClickDay={onSelectCalendar}
                ></Calendar>
                <div className={styles.rightArrow}>
                    <button 
                        style={ALLOW_FORWARD_IMG_STYLE}
                        onClick={onClickNext}
                    >
                        &nbsp;
                    </button>
                </div>
            </div>}
        </div>
    )
}

const CALENDAR_IMG_STYLE = {
    backgroundImage: `url(${calendar_today_black_24dp})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '751px 12px'
}

const ALLOW_BACK_IMG_STYLE = {
    backgroundImage: `url(${arrow_back_btn})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

const ALLOW_FORWARD_IMG_STYLE = {
    backgroundImage: `url(${arrow_forward_btn})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}

export default SelectCalendar;