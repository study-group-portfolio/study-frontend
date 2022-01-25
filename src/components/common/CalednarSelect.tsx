import cn from 'classnames';
import styles from 'css/components/common/CalendarSelect.module.scss';
import ic_calendar_24dp from 'images/icon/ic_calendar_24dp.svg';
import ic_chevron_left_on_24dp from 'images/icon/ic_chevron_left_on_24dp.svg';
import ic_chevron_right_on_24dp from 'images/icon/ic_chevron_right_on_24dp.svg';
import Calendar from 'components/common/Calendar';
import { Duration } from 'utils/interface';
import { useState, useEffect, useRef } from 'react';
import moment from 'moment';

interface CalendarSelectProps {
    onClick?: (duration: Duration) => (void);
} 

export default function CalendarSelect(props: CalendarSelectProps) {
    const defaultDuration: Duration = {startDate: moment().format('YYYY-MM-DD'), endDate: moment().add(14, 'day').format('YYYY-MM-DD')}
    const [dates, setDates] = useState([moment(), moment().add(1, 'month')]);
    const [open, setOpen] = useState(false);
    const [duration, setDuration] = useState(defaultDuration)
    const [text, setText] = useState(`${moment().format('YYYY년 MM월 DD일')} ~ ${moment().add(14, 'day').format('YYYY년 MM월 DD일')}`);

    const calendarSelectRef = useRef(Object());

    useEffect(() => {
        document.addEventListener('click', (event) => {
            if (calendarSelectRef.current && !calendarSelectRef.current.contains(event.target)) {
                setOpen(false);
            }
        })
    })

    const onClickPrevBtn = (dates: moment.Moment[]) => {
        setDates(dates.map(date => date.subtract(1, 'month')));
    }

    const onClickNextBtn = (dates: moment.Moment[]) => {
        setDates(dates.map(date => date.add(1, 'month')));
    }

    const onClickDay = (duration: Duration) => {
        if (props.onClick) {
            props.onClick(duration);
        } 
        setDuration(duration);

        if (duration.startDate && duration.endDate) {
            const startDate = moment(`${duration.startDate}`).format('YYYY년 MM월 DD일');
            const endDate = moment(`${duration.endDate}`).format('YYYY년 MM월 DD일');

            setText(`${startDate} ~ ${endDate}`)
        }
    }

    return (
        <div 
            className={cn(styles.container)}
            ref={calendarSelectRef}
        >
            <div 
                className={cn(styles.select)}
                onClick={() => setOpen(!open)}
            >
                <span className={cn(styles.txt)}>{text}</span>
                <img src={ic_calendar_24dp} />
            </div>
            {open && 
            <div className={cn(styles.options)}>
                <div className={cn(styles.content)}>
                    <div
                        className={cn(styles.leftSection)}
                    >
                        <button
                            onClick={() => onClickPrevBtn(dates)}
                        >
                            <img src={ic_chevron_left_on_24dp} />
                        </button>
                    </div>
                    <div className={cn(styles.calendarSection)}>
                        {dates.map((date, index) => (
                            <Calendar 
                                key={index}
                                year={date.year()} 
                                month={date.month() + 1}
                                duration={duration}
                                onClickDay={(duration: Duration) => onClickDay(duration)}
                            />
                        ))}
                    </div>
                    <div
                        className={cn(styles.rightSection)}
                    >
                        <button
                            onClick={() => onClickNextBtn(dates)}
                        >
                            <img src={ic_chevron_right_on_24dp} />
                        </button>
                    </div>
                </div>
            </div>}
        </div>
    )
}