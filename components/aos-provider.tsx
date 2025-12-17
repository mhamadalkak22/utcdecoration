'use client'

import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function AOSProvider() {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  return null
}

