import { useEffect, useState } from 'react'

export const Timer = () => {
  const [CurrentDate, setCurrentDate] = useState(
    new Date().toLocaleTimeString()
  )

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentDate(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(time)
  }, [])

  return CurrentDate
}
