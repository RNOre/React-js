const ADD_POST='ADD-POST';
const UPDATE_NEW_POST='UPDATE-NEW-POST';

const initialState={
    posts:
        [
            {id: 1, message: 'Hello world!', likesCount: 10},
            {id: 2, message: 'Second post', likesCount: 12},
            {id: 3, message: 'Last post', likesCount: 15}

        ],
    newPostText: ''
};
 const profileReducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts,
                    {id:5, message: state.newPostText, likesCount: 0}],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST: {
            return{
                ...state,
                newPostText: action.newText
            };
        }
    }
    return state;
}

export default profileReducer;
export const addPostActionCreator=()=>({type: ADD_POST});
export const updateNewPostActionCreator=(text)=>({ type:UPDATE_NEW_POST, newText:text});