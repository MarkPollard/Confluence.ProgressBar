import React from 'react';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        
        //document.body.style.setProperty('background-color', props.backGroundColor,'important');
    }

    componentDidUpdate() {
        document.body.style.setProperty('background-color', this.props.backGroundColor,'important');
    }

    render() {
        const {
            toDoWidth, inProgressWidth, doneWidth,
            toDoColor, inProgressColor, doneColor,
            showBorder
        } = this.props;
        const toDoDisplay = toDoWidth > 0 ? 'inline-block' : 'none';
        const inProgressDisplay = inProgressWidth > 0 ? 'inline-block' : 'none';
        const doneDisplay = doneWidth > 0 ? 'inline-block' : 'none';
        const border = showBorder ? '2px solid rgb(230,68,65)' : '0 solid rgb(230,68,65)';

        return (
          <div style={{width: '96%', height: 20, margin: 0, padding: 0, border: border}}>
            <div style={{backgroundColor: toDoColor, width: toDoWidth + '%', height: '100%', display: toDoDisplay, float: 'left', margin: 0, padding: 0 }}>&nbsp;</div>
            <div style={{backgroundColor: inProgressColor, width: inProgressWidth + '%', height: '100%', display: inProgressDisplay, float: 'left', margin: 0, padding: 0}}>&nbsp;</div>
            <div style={{backgroundColor: doneColor, width: doneWidth + '%', height: '100%', display: doneDisplay, float: 'left', margin: 0, padding: 0}}>&nbsp;</div>
          </div>
        );
    }
}

export default ProgressBar;