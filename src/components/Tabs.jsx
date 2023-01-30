import React from 'react';
import styles from './Tabs.module.css'

const Tabs = ({allTabs, currentTab, setCurrentTab}) => {

    const changeTab = (index) => {
        // console.log("Button is clicked!")
        setCurrentTab(index)
    }
    return (
        <div className={styles.tabs_parent}>
            {
                allTabs.map( (item, index) =>
                (
                    <button className={styles.tabs} onClick={() => changeTab(index) }>{item.label}</button>
                )
                )
            }
        </div>
    );
}

export default Tabs;
