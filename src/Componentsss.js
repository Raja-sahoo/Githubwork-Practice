import React, {useState} from 'react';

const QuestionBox = ({question,options, selected}) =>{
    const [answer, setAnswer] = useState(options);
    return (
        <div className="questionBox">
            <div className="question">
                {question}
            </div>
            {/* <h1>new commit changes</h1> practicing about how to commiting the data into github */}

            {answer.map((text, index)=>(
                <button key={index} className="answerBtn" onClick={()=>{
                    setAnswer([text]);
                    selected(text);
                }}>
                    {text}
                </button>
            )
            )}
        </div>
    )
}
export default QuestionBox;


