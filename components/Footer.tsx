
import React from 'react'

const Footer = () => {
  const date = new Date()

  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">&copy; {date.getFullYear()} Vikendica M&L | Sva prava zadžava.</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer