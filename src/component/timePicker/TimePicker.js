import React, {useState} from 'react';

import Modal from "../utills/Modal";
import TimePickerDetail from "./TimePickerDetail";

const TimePicker = () => {

    const [ modal, setModal ] = useState(false);

    const [startFormData, setStartFormData] = useState({
        apm: "",
        hour: "",
        minute: ""
    })

    const [endFormData, setEndFormData] = useState({
        apm: "",
        hour: "",
        minute: ""
    })

    const [timeSet, setTimeSet] = useState({})

    const hours = [];
    for (let i = 0; i < 13; i++ ) {
        hours.push(("0" + i).slice(-2));
    }

    const minutes = [];
    for (let i = 0; i < 60; i++ ) {
        minutes.push(("0" + i).slice(-2));
    }

    const handleSubmit = e => {
        e.preventDefault();

        const selectedTime = document.getElementsByClassName("slick-active")
        const timeValue = Array.from(selectedTime).map(p => p.innerText)

        if(timeSet === 0) {
            setStartFormData(
                {
                    ...startFormData,
                    apm:timeValue[0],
                    hour: timeValue[1],
                    minute: timeValue[2],
                }
            )
        }
        else if(timeSet === 1) {
            setEndFormData(
                {
                    ...endFormData,
                    apm:timeValue[0],
                    hour: timeValue[1],
                    minute: timeValue[2],
                }
            )
        }
        setModal(!modal)
    }

    const tabsItem = [
        {
            id: 0,
            title: "운영 시간",
            content: "I'm the content of the Section 1"
        },
        {
            id: 1,
            title: "운영 종료",
            content: "I'm the content of the Section 2"
        }
    ];

    console.log("운영 시작 시간 :", startFormData.hour, ":", startFormData.minute )
    console.log("운영 종료 시간 :", endFormData.hour, ":", endFormData.minute )

    return (
        <div className="timepicker">

            <p className="timepicker__title">TimePicker</p>

            <div className="timepicker__content">
                <p className="operating_hour-title">
                    운영 시간 설정
                </p>

                <div className="operating_hour">
                    <button
                        onClick={() => {
                            setModal(true)
                            setTimeSet(0)
                        }}
                    >
                        {startFormData.apm && startFormData.apm
                            ?
                            <p>
                                {startFormData.apm } {startFormData.hour}:{startFormData.minute}
                            </p>
                            :
                            <p>AM 08:00</p>
                        }
                    </button>

                    <div className="operating_hour-space">
                        -
                    </div>

                    <button
                        onClick={() => {
                            setModal(true)
                            setTimeSet(1)
                        }}
                    >
                        {endFormData.apm && endFormData.apm
                            ?
                            <p>
                                {endFormData.apm } {endFormData.hour}:{endFormData.minute}
                            </p>
                            :
                            <p>PM 11:00</p>
                        }
                    </button>
                </div>
            </div>

            <Modal

                //tabs
                tabsItem={tabsItem}
                initialTab={timeSet}
                activeTab={setTimeSet}

                //Modal
                open={ modal }
                close={() => setModal(!modal)}
                modalTitle={"운영 시간 설정"}
                content={
                    <TimePickerDetail
                        close={() =>setModal(!modal)}
                        hours={hours}
                        minutes={minutes}
                        handleSubmit={handleSubmit}
                    />
                }
            />
        </div>
    );
};

export default TimePicker;
