import Random from "./components/Random"
import Tag from "./components/Tag"
import React from "react"

function App() {
  return (
    <div className="w-full h-full relative flex flex-col background items-center">
      <h1 className="bg-white w-11/12 text-center text-4xl
      font-bold mt-[40px] rounded-lg">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  )
}
export default App
