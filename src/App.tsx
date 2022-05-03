import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MountEffect from './components/MountEffect'
import AfterEvent from './components/AfterEvent'
import Interval from './components/Interval'

function App() {
	const MOUNT = "mount", AFTER = "after", INTERVAL = 'interval';
	const [tab, setTab] = useState<string>('')

	let content: (string | JSX.Element) = <div>'Choose a tab'</div>;
	if (tab === MOUNT) {
    content = <MountEffect />;
  } else if (tab === AFTER) {
    content = <AfterEvent />;
  } else if( tab === INTERVAL ) {
		content = <Interval />
	}

	return (
    <div className='app'>
      <div className='tab-container'>
        <div className='tab-header'>
          <button onClick={() => setTab(MOUNT)}> Mount </button>
          <button onClick={() => setTab(AFTER)}> Efter event </button>
          <button onClick={() => setTab(INTERVAL)}> Interval </button>
        </div>
        <div className='tab-content'>{content}</div>
      </div>
    </div>
  );
}

export default App
