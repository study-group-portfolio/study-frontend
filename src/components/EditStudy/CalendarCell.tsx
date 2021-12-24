import { useState, useEffect } from 'react';

import cn from 'classnames';
import moment from 'moment';

import styles from 'css/components/CalendarCell.module.scss';

console.log(styles);

class CalendarCellProps {
    date: Date | null;
    interval: string[] | undefined;
    onClickCalendarCell: Function;

    constructor(
        date: Date, 
        interval: string[] | undefined,
        onClickCalendarCell: Function
    ) {
        this.date = date;
        this.interval = interval;
        this.onClickCalendarCell = onClickCalendarCell;
    }
}

function CalendarCell(props: CalendarCellProps) {
    const { date, interval } = props;

    const [selected, setSelected] = useState('');

    const day = moment(date).date();

    const onClickCalendarCell = (day: number) => {
        props.onClickCalendarCell(day)
    }

    useEffect(() => {
        if (interval && date) {
            if (interval.includes(moment(date).format('YYYY-MM-DD'))) {
                setSelected('boundary');
            } else if (interval.length === 2) {
                const startDate = interval[0];
                const endDate = interval[1];
                if (moment(startDate).isBefore(date) && moment(endDate).isAfter(date)) {
                    setSelected('interval');
                } else {
                    setSelected('');
                }
            } else {
                setSelected('');
            }
        } else {
            setSelected('');
        }
    }, [date, interval])

    return (
        <span 
            className={
                cn(
                    styles.cell, 
                    {
                        [styles.boundary]: selected === 'boundary', 
                        [styles.interval]: selected === 'interval'
                    }
                )
            } 
            onClick={() => onClickCalendarCell(day)}
        >
            {day || "\u00a0"}
        </span>
    );
}

export default CalendarCell;