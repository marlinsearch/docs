import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'
import { SearchWrapper } from '../search'

// Additional styles
import '../../../styles/app.css'
import '../../../styles/prism.css'

const DefaultLayout = ({ children, bodyClass, mainClass, header, headerDividerStyle }) => (
        <>
            <Helmet>
                <html lang="en" className="fs-base" />
                <link type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i" rel="stylesheet" />
                <body className={`${bodyClass} flex flex-column customfont f7 fw4 darkgrey readability`} />
            </Helmet>

            <SearchWrapper>
                {header || <Header dividerStyle={headerDividerStyle} />}

                <main className={mainClass || `bg-whitegrey-l2 pb5 pb10-ns`}>
                    {children}
                </main>

                <Footer />
            </SearchWrapper>
        </>
)

DefaultLayout.defaultProps = {
    headerDividerStyle: `shadow`,
    bodyClass: `bg-white`,
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    mainClass: PropTypes.string,
    header: PropTypes.element,
    headerDividerStyle: PropTypes.oneOf([`hairline`, `shadow`]),
}

export default DefaultLayout
