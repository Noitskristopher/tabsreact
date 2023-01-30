import React from 'react';

const DisplayTabs = ({allTabs, currentTab}) => {
    return (
        <div>
            <p className='content'>{allTabs[currentTab].content}</p>
        </div>
    );
}

export default DisplayTabs;
