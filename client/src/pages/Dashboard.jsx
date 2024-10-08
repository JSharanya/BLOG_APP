import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPost from '../components/DashPost';
import DashComment from '../components/DashComment';
import DaashboardComp from '../components/DaashboardComp';

export const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFormUrl = urlParams.get('tab')
    if(tabFormUrl){
      setTab(tabFormUrl)
    }
  },[location.search])

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
            {/* Sidebard */}
            <DashSidebar/>
        </div>
        {/* Profile  */}
        {tab === 'profile' && <DashProfile/>}
        {/*Posts*/}
        {tab === 'posts' && <DashPost/>}
        {tab === 'comments' && <DashComment/>}
        {tab === 'dash' && <DaashboardComp/>}
    </div>
  )
}
