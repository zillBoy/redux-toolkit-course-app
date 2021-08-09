import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/slices/counterSlice'
import { fetchPost } from './redux/slices/postSlice'

const App = () => {
  
  const counterValue = useSelector(state => state.counter.value)
  const post = useSelector(state => state.post)
  const { postList, loading } = post
  console.log({postList, loading})
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchPost())
  }, [])

  return (
    <div>
      <div>
        <h1>Post List</h1>
        {loading ? <h2>Loading</h2> : postList?.map((post, i) => (
          <p key={i}>{post?.title}</p>
        ))}
      </div>

      <div>

      </div>
      <h1>Count: {counterValue}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default App
