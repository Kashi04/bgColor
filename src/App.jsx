import { useState } from 'react'

function App() {
  
    const [newColor, setNewColor] = useState('')
  
  return (
     <div className='w-full h-screen duration-200'
   style={{backgroundColor: newColor}}
   >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button
        onClick={() => setNewColor('red')}
        className='outline-none px-4 py-1
        rounded-full text-white shadow-lg cursor-pointer'
        style={{backgroundColor: 'red'}}
        >Red</button>
        <button
        onClick={() => setNewColor('green')}
        className='outline-none px-4 py-1
        rounded-full text-white shadow-lg cursor-pointer'
        style={{backgroundColor: 'green'}}
        >Green</button>
        <button
        onClick={() => setNewColor('blue')}
        className='outline-none px-4 py-1
        rounded-full text-white shadow-lg cursor-pointer'
        style={{backgroundColor: 'blue'}}
        >Blue</button>
        <button
        onClick={() => setNewColor('yellow')}
        className='outline-none px-4 py-1
        rounded-full text-gray shadow-lg cursor-pointer'
        style={{backgroundColor: 'yellow'}}
        >Yellow</button>
        <button
        onClick={() => setNewColor('black')}
        className='outline-none px-4 py-1
        rounded-full text-white shadow-lg cursor-pointer'
        style={{backgroundColor: 'black'}}
        >Black</button>
       
      </div>
      </div>
   </div>
  )
}

export default App
