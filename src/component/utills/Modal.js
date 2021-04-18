import React from 'react';
import TimePickerDetail from "../timePicker/TimePickerDetail";
import Tabs from './Tabs';

const Modal = ({
    open,

    modalTitle,
    tabsItem,
    hours,
    minutes,
    formData,
    setFormData,
    handleSubmit,
    initialTab,
    activeTab,
    content
}) => {
    return (
        <div
            className={`modal ${open ? 'modal-active' : "" }`}
        >
            { open ? (
                <div className="modal__wrapper">
                    <p className="modal__title">
                        {modalTitle}
                    </p>

                    <Tabs
                        tabsItem={tabsItem}
                        initialTab={initialTab}
                        activeTab={activeTab}
                    />

                    {content}
                    {/*<TimePickerDetail*/}
                    {/*    close={close}*/}
                    {/*    hours={hours}*/}
                    {/*    minutes={minutes}*/}
                    {/*    formData={formData}*/}
                    {/*    setFormData={setFormData}*/}
                    {/*    handleSubmit={handleSubmit}*/}
                    {/*/>*/}

                </div>
            ) : null }
        </div>
    )
}
export default Modal;
