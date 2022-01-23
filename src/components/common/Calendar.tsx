import cn from 'classnames';
import styles from 'css/components/common/Calendar.module.scss';
import moment from 'moment';
import { CalendarButtonType } from 'utils/enum';
import { Duration } from 'utils/interface';
import { useMemo } from 'react';

interface CalendarProps {
    year: number;
    month: number;
    duration?: Duration;
    onClickDay?: (duration: Duration) => (void);
}
export default function Calendar(props: CalendarProps) {
    const { year, month, duration } = props;
    const DAYS = useMemo(() => getDays(year, month), [year, month]);

    const onClickDay = (duration?: Duration, year?: number, month?: number, day?: string) => {
        if (!year || !month || !day) {
            return;
        }

        const newDuration: Duration = {};
        const date = getMomentDate(year, month, day)?.format("YYYY-MM-DD")

        if (date && duration && duration.startDate) {
            if (duration.endDate) {
                newDuration.startDate = date;
                newDuration.endDate = null;
            } else if (moment(`${duration.startDate}`).isAfter(date)) {
                newDuration.endDate = duration.startDate;
                newDuration.startDate = date;
            } else {
                newDuration.startDate = duration.startDate;
                newDuration.endDate = date;
            }
        } else {
            newDuration.startDate = date;
        }

        if (props.onClickDay) {
            props.onClickDay(newDuration);
        }
    }

    return (
        <div className={cn(styles.container)}>
            <h3>{year}년 {month}월</h3>
            <div className={cn(styles.content)}>
                <div className={cn(styles.weeks)}>
                    <span>일</span>
                    <span>월</span>
                    <span>화</span>
                    <span>수</span>
                    <span>목</span>
                    <span>금</span>
                    <span>토</span>
                </div>
                <div className={cn(styles.days)}>
                    {DAYS.map((day, index) => (
                        // <CalendarButton 
                        //     day={day}
                        // />
                        <button 
                            key={index}
                            className={
                                cn(
                                    styles.day,
                                    {
                                        [styles.selected]: getCalendarButtonType(duration, year, month, day) === CalendarButtonType.경계값,
                                        [styles.interval]: getCalendarButtonType(duration, year, month, day) === CalendarButtonType.사잇값,
                                    }
                                )
                            }
                            onClick={() => onClickDay(duration, year, month, day)}
                            disabled={day === '0'}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

function getDays(year: number, month: number): string[] {
    const days: string[] = [];

    const diff = moment().year(year).month(month - 1).startOf('month').day() - 1;
    const lastDate = moment().year(year).month(month - 1).endOf('month').date();
    const LENGTH = 42;

    for (let i = 0; i < LENGTH; i++) {
        const value = i - diff;
        days[i] = value >= 1 && value <= lastDate ? String(value) : '0';
    }

    return days;
}

function getMomentDate(year?: number, month?: number, day?: string): moment.Moment | undefined {
    if (year && month && day) {
        const date = moment().year(year).month(month - 1).date(Number(day)).format('YYYY-MM-DD')
        return moment(date);
    }
}

function getCalendarButtonType(duration?: Duration, year?: number, month?: number, day?: string): CalendarButtonType {
    const date = getMomentDate(year, month, day);
    if (date && duration && duration.startDate) {
        const startDate = moment(`${duration.startDate}`);
        if (duration.endDate) {
            const endDate = moment(`${duration.endDate}`);

            if (date.isSame(startDate) || date.isSame(endDate)) {
                return CalendarButtonType.경계값;
            } else if (date.isBefore(endDate) && date.isAfter(startDate)) {
                return CalendarButtonType.사잇값;
            }
        } else if (date.isSame(startDate)) {
            return CalendarButtonType.경계값;
        }
    }

    return CalendarButtonType.미포함;
}