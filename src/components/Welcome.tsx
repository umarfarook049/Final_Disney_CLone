import React from 'react'
import avengers from "../images/avengers.png"

const Welcome = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${avengers})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='h-screen grid grid-cols-2 ml-10'>
            <div>
                <h1 className='text-slate-300 pt-60 font-bold text-4xl'>Endgame</h1>
                <h1 className='text-slate-300 mt-3'>23-10-13</h1>
                <h1 className='text-slate-300 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatum commodi obcaecati amet, incidunt enim similique. Sequi illo rem eius, nulla saepe magnam tempore rerum praesentium aliquam minus laudantium excepturi?</h1>
                <h1 className='text-yellow-500 font-bold text-3xl mt-8'>Review</h1>
                <button className='bg-gray-600 mt-10 w-80 h-12 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-500 hover:scale-[1.03] ml-2'>
                    Watch Now
                </button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Welcome