import React from 'react'
import Navbar from '../components/navbar'
import DashboardAd from '../components/dashboardAd'
import Contents from '../components/contents'

function DashBoard() {

  return (
    <div>
        <Navbar></Navbar>
        <DashboardAd></DashboardAd>
        <Contents></Contents>
    </div>
  )
}

export default DashBoard