import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import ProgressBar from './Components/ProgressBar';

function App() {
  const [data, setData] = useState(null);
  
  const defaultConfig = {
    toDoWidth: 100,
    inProgressWidth: 0,
    ownerReviewWidth: 0,
    doneWidth: 0,
    showBorder: false,
    backGroundColor: '#d1d1d1',
    toDoColor: '#d1d1d1',
    inProgressColor: '#d1d1d1',
    ownerReviewColor: '#d1d1d1',
    doneColor: '#d1d1d1'
  };

  useEffect(() => {
    invoke('getUserConfiguration', { }).then(setData);
  }, []);

  return (
    <div style={{backgroundColor: data ? data.backGroundColor : defaultConfig.backGroundColor, width: '100%', height: '100%', margin: 0, padding: 0}}>
      <ProgressBar 
        toDoWidth={data ? data.toDoWidth : defaultConfig.toDoWidth} 
        inProgressWidth={data ? data.inProgressWidth : defaultConfig.inProgressWidth} 
        ownerReviewWidth={data ? data.ownerReviewWidth : defaultConfig.ownerReviewWidth} 
        doneWidth={data ? data.doneWidth : defaultConfig.doneWidth} 
        showBorder={data ? data.showBorder : defaultConfig.showBorder} 
        backGroundColor={data ? data.backGroundColor : defaultConfig.backGroundColor} 
        toDoColor={data ? data.toDoColor : defaultConfig.toDoColor} 
        inProgressColor={data ? data.inProgressColor : defaultConfig.inProgressColor} 
        ownerReviewColor={data ? data.ownerReviewColor : defaultConfig.ownerReviewColor} 
        doneColor={data ? data.doneColor : defaultConfig.doneColor} />
    </div>
  );
}

export default App;
