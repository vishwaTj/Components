import React from 'react'
import Button from './Button'


const App = () => {
  return (
    <div>
        <div>
            <Button success rounded outline>Click Me</Button>
        </div>
        <div>
            <Button danger outline>Buy Now!</Button>
        </div>
        <div>
            <Button primary runded>See Deal!</Button>
        </div>
        <div>
            <Button warning outline>Hide Ads!</Button>
        </div>
        <div>
            <Button danger rounded>Welcome</Button>
        </div>
    </div>
  )
}

export default App