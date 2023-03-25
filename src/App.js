import React from 'react'
import Button from './Button'


const App = () => {
  return (
    <div>
        <div>
            <Button primary outline>Click Me</Button>
        </div>
        <div>
            <Button>Buy Now!</Button>
        </div>
        <div>
            <Button>See Deal!</Button>
        </div>
        <div>
            <Button>Hide Ads!</Button>
        </div>
        <div>
            <Button>Welcome</Button>
        </div>
    </div>
  )
}

export default App