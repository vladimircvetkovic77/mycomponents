import React, { FC } from 'react'

interface ExampleComponentProps {
      title?: string
      mainText?: string
}

const ExampleComponent : FC<ExampleComponentProps> = ({ title, mainText }) : JSX.Element => {
  return (
    <div style={{marginTop: '50vh'}}>
          <h1>{title}</h1>
          <p>{mainText}</p>
    </div>
  )
}
export default ExampleComponent
