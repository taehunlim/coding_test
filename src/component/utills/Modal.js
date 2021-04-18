import React from 'react';

import Tabs from './Tabs';

const Modal = ({
    open,
    modalTitle,
    content,

    tabsItem,
    initialTab,
    activeTab,
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

                </div>
            ) : null }
        </div>
    )
}
export default Modal;
