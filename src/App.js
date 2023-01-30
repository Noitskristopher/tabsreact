import './App.css';
import Tabs from './components/Tabs';
import { useState } from 'react';
import DisplayTabs from './components/DisplayTabs';

function App() {
  const tabsArray = [
    {
      label: 'Tab 1',
      content: 'Tab 1 content showing here.'
    },
    {
      label: 'Tab 2',
      content: 'Tab 2 content showing here.'
    },
    {
      label: 'Tab 3',
      content: 'Tab 3 content showing here.'
    }
  ];

  const [allTabs, setAllTabs] = useState(tabsArray)

  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div className="App">
      <Tabs className="tabs" allTabs={allTabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <DisplayTabs className="content" allTabs={allTabs} currentTab={currentTab} />
    </div>
  );
}

export default App;
