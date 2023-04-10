
const initialState={
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
};
const friendBarReducer=(state=initialState, action)=>{

    return state;
}

export default friendBarReducer;