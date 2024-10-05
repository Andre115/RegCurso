import "./main.scss";


import { Outlet } from 'react-router-dom';
import LeftSide from "../sides/leftSide/LeftSide"
import RightSide from "../sides/rightSide/RightSide"

function Main() {
  return (
    <main className='main_container'>
        <LeftSide/>
        <Outlet/>
        <RightSide/>
    </main>
  )
}

export default Main