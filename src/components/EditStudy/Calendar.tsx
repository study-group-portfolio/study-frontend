import { useState } from 'react';

import cn from 'classnames';
import moment from 'moment';

import CalendarCell from './CalendarCell';

import { Position } from '../../utils/enum';
import styles from 'css/components/Calendar.module.scss';

class CalendarProps {
    position: Position;
    year: number; // 연도
    month: number; // 월
    interval: string[] = [];
    onClickDay: Function;

    constructor(
        position: Position, 
        year: number, 
        month: number,
        interval: string[],
        onClickDay: Function
    ) {
        this.position = position;
        this.year = year;
        this.month = month;
        this.interval = interval;
        this.onClickDay = onClickDay;
    }
}

function Calendar(props: CalendarProps) {
    const { position, year, month, interval } = props;

    const yearMonthMoment: moment.Moment = moment().year(year).month(month - 1).startOf('month')
    const lastDay = yearMonthMoment.endOf('month').date();
    const [selectedCalendar, setSelectedCalendar] = useState(new Array(lastDay)) 

    const onClickDay = (day: number) => {
        const date = day > 0 ? yearMonthMoment.date(day).format('YYYY-MM-DD') : '';
        props.onClickDay(date);
    }

    const positionClass = position === Position.왼쪽 ? styles.left : styles.right;

    console.log(getCalendar(year, month));

    return (
        <div className={cn(styles.calendar, positionClass)}>
            <div className={cn(styles.title)}>{year}년 {month}월</div>
            <div className={cn(styles.dayOfWeeks)}>
                {DAY_OF_WEEKS.map(dayOfWeek => (<span className={cn(styles.dayOfWeek)} key={dayOfWeek}>{dayOfWeek}</span>))}
            </div>
            <div className={styles.content}>
                {getCalendar(year, month).map((week, index) => (
                    <div className={styles.week} key={index}>
                        {week.map((day, idx) => (
                            <CalendarCell 
                                date={day ? yearMonthMoment.date(day).toDate() : null}
                                interval={interval}
                                onClickCalendarCell={onClickDay} 
                                key={idx}
                            ></CalendarCell>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

const DAY_OF_WEEKS = ['일', '월', '화', '수', '목', '금', '토'];

function getCalendar (year: number, month: number): number[][] {
    const date: moment.Moment = moment().year(year).month(month - 1);

    // 지정된 월의 첫번째 날의 요일값
    // 0: 일, 1: 월, 2: 화, 3: 수, 4: 목, 5: 금, 6: 토 
    const firstDayOfWeek: number = date.startOf('month').day();
    
    // 지정된 월의 마지막 날
    const lastDay: number = date.endOf('month').date();

    const cols = Math.ceil((firstDayOfWeek + lastDay) / 7)

    const calendar = [];

    let day: number = 1;

    for (let i = 0; i < cols; i++) {
        const weeks: number[] = [];

        for (let j = 0; j < 7; j++) {
            if ((i == 0 && j >= firstDayOfWeek) || (i >=1 && i < cols && day <= lastDay)) {
                weeks[j] = day;
                day++;
            } else {
                weeks[j] = 0;
            }
        }

        calendar[i] = weeks;
    }

    return calendar;
}

export default Calendar;