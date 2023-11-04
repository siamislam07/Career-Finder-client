import { Outlet } from "react-router-dom";
import Main from "./layout/Main";
import MainHome from "./page/MainHome";


function Home() {


      
  return (
    <>
      <Main>
        <MainHome></MainHome>
        <Outlet></Outlet>
      </Main>
    </>
  )
}

export default Home
