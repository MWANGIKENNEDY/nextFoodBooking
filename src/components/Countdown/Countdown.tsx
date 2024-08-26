"use client"

import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2024-12-12")
const MyCountdown = () => {
  return (
    <Countdown className=' text-yellow-500 text-4xl font-bold lg:text-start' date={endingDate}/>
  )
}

export default MyCountdown