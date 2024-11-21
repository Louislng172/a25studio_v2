import React from 'react'

export default function Tag({children,classAdd,classParent}:{children:React.ReactNode,classAdd?:string,classParent?:string}) {
  return (
    <div className={classParent}><span className={classAdd}>{children}</span></div>
  )
}
