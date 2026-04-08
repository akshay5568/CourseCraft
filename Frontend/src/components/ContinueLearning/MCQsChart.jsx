import React from 'react'
import MCQBarChart from './MCQBarChart';

export const MCQsChart = ({allMcqsData}) => {
    console.log(allMcqsData);

    const rightAnswers = allMcqsData.reduce((acc,curr) => acc + curr.rightAnswers?.length,0)

  return (
    <div>
        <div>
            <h1>Total Questions attemped : {allMcqsData?.length * 5}</h1>
            <h3>Total right answers :{rightAnswers}</h3>
            <h3>Total wrong answers :{Math.abs(allMcqsData?.length * 5 - rightAnswers)}</h3>
        </div>

        <div>
             <MCQBarChart data={[rightAnswers,Math.abs(allMcqsData?.length * 5 - rightAnswers)]}/>   
        </div>

        <div>
            Total Score : {(rightAnswers / (allMcqsData?.length * 5)) * 100}%
        </div>
    </div>
  )
}
export default MCQsChart;