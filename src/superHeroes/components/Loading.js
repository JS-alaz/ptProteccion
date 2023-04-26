import React from 'react'
import { useSelector } from 'react-redux'

export const Loading = () => {
    const {isLoading} = useSelector(state => state.superHero)
    
  return (
    <span>{isLoading && 'Loading...'}</span>
  )
}
