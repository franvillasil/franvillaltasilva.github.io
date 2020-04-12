import './WorkInProgress.scss';
import React from 'react';
import Animation from '../../components/Animation/Animation';
import Button from '../../components/Button/Button';
import workInProgress from '../../assets/lotties/work-in-progress.json';
import dog from '../../assets/lotties/dog.json';
import cv from '../../assets/francisco-villalta-cv.pdf';

const  WorkInProgress = () => {

    const dogWidth = 120;
 
    return (
        <section>
             <div className="work-in-progress-container">
                <Animation src={workInProgress}/>
                <Animation src={dog} width={dogWidth}/>
                <Button cv={cv}/>
        
      </div>

        </section>
     
    );
}

export default WorkInProgress;