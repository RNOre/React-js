import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendBarReducer from "./friendBar-reducer";


let store= {
    _state: {
        profilePage: {
            posts: {
                postsData: [
                    {id: 1, message: 'Hello world!', likesCount: 10},
                    {id: 2, message: 'Second post', likesCount: 12},
                    {id: 3, message: 'Last post', likesCount: 15}

                ]
            },
            newPostText: ''
        },
        messagePage: {
            dialogs: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Alexey'},
                {id: 3, name: 'Zhenya'}
            ],
            messages: [//direction:0- мне 1-от меня
                {
                    id: 1,
                    message: 'Hello',
                    direction: false
                },
                {
                    id: 2,
                    message: 'Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf',
                    direction: true
                },
                {
                    id: 3,
                    message: 'How are you How are you How are you How are you How are you How are you How are you',
                    direction: false
                },
                {id: 1, message: 'Hello', direction: true},
                {id: 1, message: 'Hello', direction: false},
                {
                    id: 2,
                    message: ' sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf Привет sdfdsf',
                    direction: true
                },
                {
                    id: 3,
                    message: 'How are you How are you How are you How are you How are you How are you How are you',
                    direction: false
                },
                {id: 1, message: 'Hello', direction: true}
            ],
            newMessageBody:''
        },
        friendBar: {
            friends: [
                {
                    id: 1,
                    name: 'Andrew',
                    avatar: "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png",
                    status: true
                },
                {
                    id: 2,
                    name: 'Alexey',
                    avatar: "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png",
                    status: false
                },
                {
                    id: 3,
                    name: 'Zhenya',
                    avatar: "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png",
                    status: false
                },
                {
                    id: 4,
                    name: 'Luka',
                    avatar: "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png",
                    status: false
                },
            ]
        }
    },
    _callSubscriber(state) {
        console.log(state);
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage=dialogReducer(this._state.messagePage,action);
        this._state.friendBar=friendBarReducer(this._state.friendBar,action);

        this._callSubscriber(this._state);
    }
}
export default store;