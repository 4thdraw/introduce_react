import React from 'react';

const Hd = ({datainfo, id, cls}) => {
    return (
        <header id={id} className={ cls }>
            <div className='d-flex 
            justify-content-between 
            align-items-center'>
                <h1>
                    <a href="/">
                        WEBdeveloper:방보영;
                    </a>
                </h1>
                <nav>
                    <ul className='d-flex gap-3'>
                       {
                          datainfo.map((v, i)=>{
                            return(
                                <li key={`navi${i}`}>
                                    <a href={v.path}>
                                        {v.id}
                                    </a>
                                </li>
                            )
                          })
                       }
                    </ul>
                </nav>


            </div>
        </header>
    );
};

export default Hd;