import React from 'react'
import Top from '../top'
import Footer from '../footer'
import Helmet from 'react-helmet'

import './index.scss'

export const Layout = ({ children, title }) => (
  <>
    <Helmet>
      <meta 
        name="google-site-verification"
        content="PbckaZEG4R6mAQ8vefqPLmYbaftIqcI9Bi-VJ1Fj2so" />
    </Helmet>
    <Top title={title} />
    <div className='layout-body'>
      {children}
    </div>
    <Footer />
  </>
)

export default Layout;