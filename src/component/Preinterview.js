import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Preinterview = ({datainfo, id, cls}) => {
    return (
        <div id={id} className={cls}>
            <h2 className='text-center mt-5 pt-5'>사전인터뷰</h2>
            <Accordion defaultActiveKey="2">
                {
                    datainfo.map((v, i)=>  <Accordion.Item eventKey={i}>
                         <Accordion.Header>{v.question}</Accordion.Header>
                         <Accordion.Body>
                        {/* v.answer 여기까지는 문자
                        v.answer.split("|") 여기는 배열 */}
                            {v.answer.split("|").map((vv, ii)=>{
                                return(
                                    <span className='d-lg-block'>{vv}</span>
                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item> )
                }
            </Accordion>            
        </div>
    );
};

export default Preinterview;