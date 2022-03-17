import React from 'react'
import ReactDOM from 'react-dom'

import Count from './components/count/count.jsx'

ReactDOM.render(<div>
  <Count initCount={0}></Count>
</div>, document.getElementById('app'))

