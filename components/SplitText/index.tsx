import React from 'react'

//React.CloneEl ??????????

export default function SplitText({children,classAdd}:{children:React.ReactNode,classAdd?:string}) {
  return (
    <div><p className={classAdd}>{children}</p></div>
  )
}
