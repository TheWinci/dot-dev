'use client'
import { delay } from '@/utils/delay'
import Show from '@/utils/show'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { FocusEventHandler, useEffect, useState } from 'react'

const initialName = 'WINCI.DEV'
const initialPassword = ''

function Content() {
  const [name, setName] = useState<string>(initialName)
  const [password, setPassword] = useState<string>('')
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false)
  const [isQueryEnabled, setIsQueryEnabled] = useState(false)

  const queryClient = useQueryClient()
  const { data, isFetching, isError, isRefetching, refetch } = useQuery({
    queryKey: ['user'],
    refetchOnMount: false,
    enabled: isQueryEnabled,
    queryFn: async () => {
      if (name === 'ERROR') {
        throw new Error('TEST ERROR')
      }

      if (name === initialName || password === initialPassword || password.length < 3) {
        return false
      }

      await delay(2000)

      return true
    }
  })

  const handleNameOnBlur: FocusEventHandler<HTMLDivElement> = (event) => {
    setName(event.target.innerText)
  }
  const handlePasswordOnBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value)
  }

  useEffect(() => {
    setIsInputVisible(name !== initialName)
  }, [name])

  useEffect(() => {
    if (!isQueryEnabled) {
      setIsQueryEnabled(password.length > 3)
      return
    }
    refetch()
  }, [password, refetch, isQueryEnabled])

  return (
    <div className='bg-gray-950 overflow-hidden min-w-full min-h-full flex justify-center items-center flex-col'>
      <div className={`absolute md:p-56 sm:p-40 rounded-full motion-safe:animate-spin-slow hover:[animation-play-state:paused] filter blur-xl from-blue-600 to-indigo-900 bg-gradient-eclips2 z-0`} />
      <div className='absolute md:p-52 sm:p-36 rounded-full bg-gray-950 z-0' />
      <Show if={!isFetching && !isRefetching}>
        <div
          className='motion-safe:animate-bounce hover:[animation-play-state:paused] text-4xl font-bold bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 inline-block text-transparent bg-clip-text'
          contentEditable
          onBlur={handleNameOnBlur}
        >
          {name}
        </div>
        <Show if={isInputVisible}>
          <input
            type="password"
            placeholder='************'
            onBlur={handlePasswordOnBlur}
            className='bg-transparent text-4xl text-center max-w-56 z-10 placeholder-indigo-800 bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 text-transparent bg-clip-text'
          />
        </Show>
      </Show>
      <Show if={isFetching || isRefetching}>
        <span className="loader"></span>
      </Show>
      <Show if={isError}>
        <span className='z-10'>ERROR</span>
      </Show>
      <Show if={!!data}>

      </Show>
    </div>
  )
}

export default Content