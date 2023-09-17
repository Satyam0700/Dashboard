import Card from "./Card"
import { todos } from '../constants/index'

const TodoList = () => {
    return (
        <div className="flex flex-col gap-4 w-[259px]">
            <div className="flex items-center justify-between">
                <span className="text-white font-bold text-[20px]">To-Do List (24)</span>
                <div className="bg-[#6418C3] cursor-pointer px-4 py-1 rounded-lg font-bold text-xl text-white">
                    +
                </div>
            </div>

            <div>
                {todos.map((todo) => (
                    <Card
                        key={todo.title}
                        title={todo.title}
                        subTitle={todo.subTitle}
                        peoples={todo.peoples}
                        color={todo.color}
                        width={todo.width}
                        height={todo.height}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList