import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../../components/User/UserHeader/UserNavbar'
import UserFooter from '../../components/User/UserFooter'

const MainRoot = () => {
  return (
    <>
      <div>
        <UserNavbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <UserFooter />
      </div>
    </>
  )
}

export default MainRoot