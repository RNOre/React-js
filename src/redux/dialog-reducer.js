const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE='SEND-MESSAGE';

const initialState={
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
        {
            id: 1,
            message: 'Hello',
            direction: true}
    ],
        newMessageBody:''
};
const dialogReducer=(state=initialState, action)=>{

    let stateCopy;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                messages:[...state.messages,
                    {id: 6, message: state.newMessageBody,direction: true}],
                newMessageBody: ''
            };
        }
    }
    return state;
}

export default dialogReducer;
export const sendMessageCreator=()=>({type: SEND_MESSAGE});
export const updateNewBodyCreator=(text)=>({ type: UPDATE_NEW_MESSAGE_BODY, body:text});