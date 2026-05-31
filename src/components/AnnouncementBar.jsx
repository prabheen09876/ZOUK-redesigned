import { useState, useEffect, useRef } from 'react'

const announcements = [
  '2-Day Express Delivery Now Live',
  'Sling BOGO at ₹1499',
  'Hot Bag Summer',
]

export default function AnnouncementBar() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % announcements.length)
    }, 3000)

    return () => clearInterval(timeoutRef.current)
  }, [])

  return (
    <div className="bg-primary py-2 overflow-hidden relative" role="marquee" aria-live="polite">
      <div className="h-5 relative">
        {announcements.map((text, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
              index === activeIndex
                ? 'translate-y-0 opacity-100'
                : index === (activeIndex - 1 + announcements.length) % announcements.length
                ? '-translate-y-full opacity-0'
                : 'translate-y-full opacity-0'
            }`}
          >
            <p className="text-white text-xs uppercase tracking-widest font-body font-medium text-center">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
