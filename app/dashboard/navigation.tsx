'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Navigation() {
  const [isExpanded, setIsExpanded] = useState(true)
  const handleExpandClicked = () => setIsExpanded(true)
  const handleCollapsClicked = () => setIsExpanded(false)

  return (
    <div className={`${isExpanded ? 'w-48' : 'w-24'} h-full flex-shrink-0 overflow-auto p-3 bg-neutral-950 transition-all duration-300 ease-linear`}>
      <nav className='flex flex-col h-full'>
        <Link href={'/'} >HOME</Link>
        <Link href={'/blog'} >BLOG</Link>
        <div className="mt-auto" onClick={isExpanded ? handleCollapsClicked : handleExpandClicked}>
          BOTTOM
        </div>
      </nav>
    </div>
  )
}

export default Navigation