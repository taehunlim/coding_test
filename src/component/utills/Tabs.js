import React, {useState} from 'react';

const Tabs = ({items, initialTab, activeTab}) => {

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

    const { currentItem, changeItem } = useTab(initialTab, items);

    console.log("1", activeTab)
    console.log("2", currentItem)

    return (
        <div className="tab d-flex justify-content-between">
            {items.map((section, index) => (
                <div
                    key={index}
                    className={
                        `${currentItem.id === index ? "tabs-active" : "tabs-no-active"}`
                    }
                    onClick={() => changeItem(index)}

                >

                    {section.title}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
