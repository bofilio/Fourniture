import React from 'react'
import TopBar from './TopBar'

export default function Layout({children,className}) {
    return (
        <div className={className} >
            <TopBar/>
            {children}
        </div>
    )
}
