import { Footer, FooterDivider, FooterTitle } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterCom = () => {
  return (
    <Footer container className='border border-t-8 border-teal-500' >
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white' >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sharan</span>
        Blog
        </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>

                  <div>
                    <FooterTitle title='ABOUT'/>
                      <Footer.LinkGroup col>
                        <Footer.Link
                        href=''
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Our Projects
                        </Footer.Link>
                        <Footer.Link
                        href=''
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Sharan's Blog
                        </Footer.Link>
                      </Footer.LinkGroup>
                     
             
                  </div>

                  <div>
                    <FooterTitle title='FOLLOW US'/>
                      <Footer.LinkGroup col>
                        <Footer.Link
                        href=''
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Github
                        </Footer.Link>
                        <Footer.Link
                        href=''
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Discord
                        </Footer.Link>
                      </Footer.LinkGroup>
                     
             
                  </div>

                  <div>
                    <FooterTitle title='legal'/>
                      <Footer.LinkGroup col>
                        <Footer.Link
                        href=''
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link
                        href=''
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Terms &amp; Conditions
                        </Footer.Link>
                      </Footer.LinkGroup>
                     
             
                  </div>

                </div>
                
                
            </div>
            <FooterDivider/>
            <div className=''>
              <Footer.Copyright
              href='#'
              by="Sharan's Blog"
              year={new Date().getFullYear()}
              />

            </div>
        </div>
    </Footer>
  )
}

export default FooterCom