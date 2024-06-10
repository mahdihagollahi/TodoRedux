import {ADD_TODO ,EDIT_TODO , MARK_TODO , DELETE_TODO} from './actionType'


const initialState = {
    todos: []
  };
  


 const raducer = (state = initialState , action) => {
   switch(action.type) {
    case  ADD_TODO :
        return{
            ...state,
            todos: [
                // ...state,todos,
                ...state.todos,
                {id :Date.now() , title: action.payload.title , completed: false  }
            ]
        }

    

   case EDIT_TODO :
    return{
        ...state,
        todos : state.todos.map((todo) =>
            todo.id === action.payload.id
        ?{...todo , title : action.payload.title}
        :todo
        )
    }

    case MARK_TODO:
        return{
            ...state,
            todos : state.todos.map((todo)=>
                todo.id === action.payload.id
            ?{...todo , completed : !todo.completed}
            :todo
            )
        }

    case DELETE_TODO: 
    return{
        ...state,
        todos : state.todos.filter((todo)=> todo.id != action.payload.id)
       }
    default:
        return state  
     }
}

export default raducer;


