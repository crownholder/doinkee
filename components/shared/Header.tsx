import React from 'react'

const Header = ({ title, subtitle }: { title: string, subtitle?:string}) => {
  return (
    <>
    <h2 className="h2-bold text-dark-600 mt-20 ml-2">{title}</h2>
    {subtitle && <p className="p-16-regular mt-5 ml-4">{subtitle}</p>}
    </>
  )
}

export default Header