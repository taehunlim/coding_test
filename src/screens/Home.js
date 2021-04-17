import React from 'react';
import InputFile from "../component/InputFile";
import Accordion from "../component/Accordion";
import TimePicker from "../component/timePicker/TimePicker";


const Home = () => {
    return (
        <div
            className="d-flex"
            style={{
                justifyContent: "center",
                height: "640px"
            }}
        >
            {/*<InputFile/>*/}
            {/*<Accordion/>*/}
            <div>
                <TimePicker/>
            </div>
        </div>
    );
};

export default Home;
