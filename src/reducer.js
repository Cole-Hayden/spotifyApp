export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE AFTER FINISHED DEVELOPING
    token: 'BQAI36eLwjlm3ElhVx_J8zqV69N5ZZ2Y8U-tc6kIBZrq0g9PnVadBdOh_bW1Te4Vmne-79MLreym0jD7pB6ht8EoFdcyKFLrlMIQIRYRCnotBVpa7_9wjur0KHiQq6lR3wuRvG561g-yrb1nfo24GV_z4yaTNRTA'
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER': 
         return {
             ...state,
             user: action.user
         };
         case 'SET_TOKEN':
             return {
                 ...state,
                 token: action.token
             };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
         default: 
         return state;
    }
}

export default reducer;