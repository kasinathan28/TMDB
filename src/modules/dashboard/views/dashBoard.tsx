import React from 'react'
import Navbar from '../components/navbar'
import DashboardAd from '../components/dashboardAd'
import Contents from '../components/contents'
import SearchBar from '@/modules/app/components/searchBar'
function DashBoard() {

  return (
    <div>
        <Navbar></Navbar>
        <DashboardAd></DashboardAd>
        <SearchBar placeholder='Search'></SearchBar>
        <Contents></Contents>
    </div>
  )
}

export default DashBoard