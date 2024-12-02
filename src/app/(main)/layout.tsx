import Navbar from '@/src/components/Navbar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
      <div className="flex min-h-screen flex-col">
          <Navbar/>
      {children}
    </div>
  )
}

export default layout
