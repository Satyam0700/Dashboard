import Member from '../../components/Member'
import TodoList from '../../components/TodoList'
import Progress from '../../components/Progress'
import Completed from '../../components/Completed'
import Drag from '../../components/Drag'

const page = () => {
  return (
    <div className='px-4 py-8'>
      <Member />

      <div className='flex flex-wrap justify-center mt-9 gap-5 '>
        <TodoList />
        <Progress />
        <Completed />
        <Drag />
      </div>
    </div>
  )
}

export default page