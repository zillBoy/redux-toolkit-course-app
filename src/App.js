import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/slices/counterSlice'

const App = () => {
  
  const counterValue = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <div>
      <h1>Count: {counterValue}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default App
