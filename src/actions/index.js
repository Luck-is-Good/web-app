import * as types from './actionTypes'

export const _cretae_user =() =>{
    return {
        type: types._CREATE_USER
    }
}

export const _update_loc =() =>{
    return {
        type: types._UPDATE_LOC
    }
}

export const _update_user_list =() =>{
    return{
        type: types._UPDATE_USER_LIST
    }
}

export const _init_store =(user_data) => {
    return{
        type: types._INIT_STORE,
        data: user_data
    }
}

export const _user_select =() => {
    return{
        type: types._USER_SELECT
    }
}

export const _load_userlist =() => {
    return{
        type: types._LOAD_USERLIST
    }
}    

export const _user_delete =() => {
    return{
        type: types._USER_DELETE
    }
}