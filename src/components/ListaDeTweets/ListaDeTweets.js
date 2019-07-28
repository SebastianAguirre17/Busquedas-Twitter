import React from 'react';

function ListaDeTweets( tweets ) {
    return (
        <div className='m-5'>
            { tweets.map( tw => {
                return(
                    <Tweet/>
                )
            })}
        </div>
    )
}

export default ListaDeTweets

