import React, {useState, useEffect} from 'react';


import moment from 'moment';
import 'moment/locale/ko'


const Calendar = ({title}) => {
    const [Moment, setMoment] = useState(moment())
    const [selectedDate, setSelectedDate] = useState((
        Moment.format('YYYYMMDD')
    ))

    const [todaySelected, setTodaySelected]  = useState(true)


    useEffect(() => {
        const location = document.querySelector(".selected");

        if(location && todaySelected === true) {
            location.scrollIntoView({inline:"start"})
        }

        setTodaySelected(false)
    })


    function calendar() {
        const today = Moment;
        const startWeek = today.clone().startOf('month').week();
        const endWeek =
            today.clone().endOf('month').week() === 1
            ? 53
            : today.clone().endOf('month').week();

        let calendar = [];
        for (let week = startWeek; week <= endWeek; week++) {
            calendar.push(

                <div className="weeks-row" key={week}>
                    {
                        Array(7).fill(0).map((n, i) => {
                            let current =
                                today
                                    .clone()
                                    .week(week)
                                    .startOf('week')
                                    .add(i, 'day')
                            let isSelected =
                                current.format('YYYYMMDD') === selectedDate
                                    ? 'selected'
                                    : '';

                            // 현재 월에 포함되지 않는 일을 회색처리
                            // let isGrayed = current.format('MM') === today.format('MM') ? '' : 'grayed';
                            return (
                                <div
                                    key={i}
                                    className={
                                        `box ${isSelected}`
                                        // 현재 월에 포함되지 않는 일을 회색처리
                                        // ${isGrayed}
                                    }
                                >
                                    <button
                                        className="text"
                                        onClick={() => setSelectedDate(current.format('YYYYMMDD'))}
                                    >
                                        <div>
                                            {current.format('ddd')}
                                        </div>

                                        <div className="date">
                                            {current.format('D')}
                                        </div>

                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        return calendar;
    }
    return (
        <div className="calendar">
            <div className="calendar__head">
                <span className="title">
                    {title}
                </span>

                <div className="d-flex align-items-center">
                    <button
                        onClick={()=>{
                            setMoment(
                                Moment
                                    .clone()
                                    .subtract(1, 'month')
                            )
                        }}
                    >

                        <img
                            src="../../../images/arrow_l.svg"
                            alt="prev month"
                        />

                    </button>

                    <span className="month">
                        {Moment.format('MMMM ')}
                    </span>

                    <button
                        onClick={()=>{
                            setMoment(
                                Moment
                                    .clone()
                                    .add(1, 'month')
                            )
                        }}
                    >
                        <img
                            src="../../../images/arrow_r.svg"
                            alt="next month"
                        />

                    </button>
                </div>
            </div>

            <div
                className="calendar__body d-flex"
                style={{overflow: "auto"}}
            >
                {calendar()}
            </div>
        </div>
    )
}
export default Calendar;
