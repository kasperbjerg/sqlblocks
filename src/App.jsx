import { useState } from 'react'
import logo from '/logo.svg'
import Sql from './Sql.jsx'
import BlocklyApp from './BlocklyApp.jsx'

function App() {

  return (
    <>
      <header className="bg-gray-200 text-3xl text-white sans-serif  min-h-16">
        <img src={logo} className="relative left-8" alt="React logo" />
      </header>
      <div className="grid grid-cols-5 gap-4 top-4 relative">
        <div className="col-span-1 indent-8 text-2xl min-w-120 font-semibold">Menu</div>
        <div className="col-span-4">
          <p className="text-2xl">Opgavebeskrivelser</p>
          <p className="text-1xl">Her kan der stå opgaver</p>
          <div className="grid grid-cols-2 gap-4 text-center relative top-12">
            <div className="">
              <BlocklyApp />
            </div>
            <div className="text-3xl font-serif">
                <Sql />
            </div>
          </div>  
        </div>
      </div>
    </>
  )
} 

export default App