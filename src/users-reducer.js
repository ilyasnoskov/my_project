const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'



let initialState = {
    posts: [
        // {id:1, photoUrl: 'https://th.bing.com/th/id/R.ec75044f3d09e9e46dffba6c5b7fd314?rik=K2mCCMREfJOVyw&riu=http%3a%2f%2fdashboard.olucaro.com%2folucarodashboard%2fassets%2fprofiles%2fuser_male_portrait.png&ehk=DIspKB9KXJ7ENwEzXSoQo9RmR85bHuvkOKheBqamQlo%3d&risl=&pid=ImgRaw&r=0', followed: false, fullName: 'Dima', status:'Hello', location:{city:'Kiev',country:'Ukraine'}},
        // {id:2, photoUrl: 'https://th.bing.com/th/id/R.ec75044f3d09e9e46dffba6c5b7fd314?rik=K2mCCMREfJOVyw&riu=http%3a%2f%2fdashboard.olucaro.com%2folucarodashboard%2fassets%2fprofiles%2fuser_male_portrait.png&ehk=DIspKB9KXJ7ENwEzXSoQo9RmR85bHuvkOKheBqamQlo%3d&risl=&pid=ImgRaw&r=0', followed: true, fullName: 'Andrey', status:'Bye', location:{city:'Uzhgorod',country:'Ukraine'}},
        // {id:3, photoUrl: 'https://th.bing.com/th/id/R.ec75044f3d09e9e46dffba6c5b7fd314?rik=K2mCCMREfJOVyw&riu=http%3a%2f%2fdashboard.olucaro.com%2folucarodashboard%2fassets%2fprofiles%2fuser_male_portrait.png&ehk=DIspKB9KXJ7ENwEzXSoQo9RmR85bHuvkOKheBqamQlo%3d&risl=&pid=ImgRaw&r=0', followed: false, fullName: 'Max', status:'Loading...', location:{city:'Vinnytsya',country:'Ukraine'}},
    ]
};


const userReducer = (state=initialState,action) => {
    switch(action.type) {
        case FOLLOW:
            return {...state, posts: state.posts.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed:true}
                    }
                    return u;
                } )
            }


        case UNFOLLOW:
            return {...state, posts: state.posts.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed:false}
                    }
                    return u;
                } )
            }
        case SET_USERS: {
            return { ...state, posts: [ ...action.posts] }
        }


        default: return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (posts) => ({type: SET_USERS,posts})

export default userReducer;