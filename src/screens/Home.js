import React from 'react';

import InputFile from "../component/InputFile";
import Accordion from "../component/Accordion";
import TimePicker from "../component/timePicker/TimePicker";
import DatePicker from "../component/DatePicker";


const Home = () => {
    return (
        <div
            className="d-flex justify-content-center"
            style={{
                height: "640px"
            }}
        >

            <div className="row-cols-6">
                <div className="col-6">
                    <InputFile/>
                </div>
                <div className="col-6">
                    <Accordion/>
                </div>
            </div>

            <div className="row-cols-6">
                <div className="col-6">
                    <TimePicker/>
                </div>
                <div className="col-6">
                    <DatePicker/>
                </div>
            </div>
        </div>
    );
};

export default Home;
