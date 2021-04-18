import React, {useState} from 'react';

const Tabs = ({tabsItem, initialTab, activeTab}) => {

    const useTab = (initialTab, allTabs) => {
        const [currentIdx, setCurrentIdx] = useState(initialTab);
        if (!allTabs || !Array.isArray(allTabs)) {
            return;
        }

        activeTab(currentIdx)

        return {
            currentItem: allTabs[currentIdx],
            changeItem: setCurrentIdx
        };
    };

    const { currentItem, changeItem } = useTab(initialTab, tabsItem);

    return (
        <div className="tab d-flex justify-content-between">
            {tabsItem.map((tab, index) => (
                <div
                    key={index}
                    className={
                        `${currentItem.id === index ? "tabs-active" : "tabs-no-active"}`
                    }
                    onClick={() => changeItem(index)}

                >
                    {tab.title}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
