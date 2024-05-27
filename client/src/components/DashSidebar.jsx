import { Sidebar } from 'flowbite-react'

import {
    HiUser,
    HiArrowSmRight
   
  } from 'react-icons/hi';
  import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const DashSidebar = () => {
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
   <Sidebar className='w-full md:w-56'>
    <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Sidebar.Item active = {tab === 'profile'} icon={HiUser} label={'User'} labelColor='dark'>
                Profile
            </Sidebar.Item>
            <Sidebar.Item  icon={HiArrowSmRight} className='cursor-pointer'>
                Sign Out
            </Sidebar.Item>
        </Sidebar.ItemGroup>
    </Sidebar.Items>
   </Sidebar>
  )
}

export default DashSidebar