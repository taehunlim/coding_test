
import React from 'react';

import Calendar from "./utills/Calendar";

const DatePicker = () => {

    return (
        <div className="datepicker">
            <div className="datepicker__wrapper">
                <p className="datepicker__title">
                    날짜 선택
                </p>

                <div className="datepicker__content">
                    <Calendar
                        title={"날짜 선택"}
                    />
                </div>

                <div className="space-bar"/>

            </div>
        </div>
    )
}
export default DatePicker;
