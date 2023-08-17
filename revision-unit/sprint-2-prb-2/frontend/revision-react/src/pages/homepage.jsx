import React from 'react';
import Card from '../components/card';
function Home({data,onDelete}){
    return(
        <div className='bigcont'>
            {
                data.map((el) => {
                    return (
                        <div key={el._id}>
                            <Card data={el}></Card>
                            <button onClick={()=>onDelete(el._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home