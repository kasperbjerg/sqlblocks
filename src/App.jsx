import { useState } from 'react'
import logo from '/logo.svg'
import Sql from './Sql.jsx'
import BlocklyApp from './BlocklyApp.jsx'

function App() {

  return (
    <>
      <header className="bg-blockly-blue text-3xl text-white sans-serif  min-h-24">
        <img src={logo} className="logo react" alt="React logo" />
      </header>
      <div className="grid grid-cols-5 gap-4 text-center">
        <div className="col-span-1 text-center text-2xl min-w-120">Menu</div>
        <div className="col-span-4">
          <p className="text-2xl">Opgavebeskrivelser</p>
          <p className="text-1xl">Her kan der stå opgaver</p>
          <div className="grid grid-cols-2 gap-4 text-center relative top-24">
            <div className="">
              <BlocklyApp />
            </div>
            <div className="text-3xl">
                <Sql />
            </div>
          </div>  
        </div>
      </div>
    </>
  )
} 

export default App