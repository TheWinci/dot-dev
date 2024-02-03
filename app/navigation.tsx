'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Navigation() {
  const [isExpanded, setIsExpanded] = useState(true)
  const handleExpandClicked = () => setIsExpanded(true)
  const handleCollapsClicked = () => setIsExpanded(false)

  return (
    <div className={`${isExpanded ? 'w-48' : 'w-24'} flex-shrink-0 overflow-auto border-r border-slate-50/[0.06] p-3 bg-zinc-900`}>
      <nav className='flex flex-col bg-slate-400 h-full'>
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