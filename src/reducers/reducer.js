/* eslint-disable */
import Reducer_setting from './reducer_setting';//state 초기값을 가져온다.
import * as types from '../actions/actionTypes'; //액션 코드로 가져온다.
 
function reducer (state = Reducer_setting, action){ 
    //state는 reducer가 갖고 있는 state고 만약 없을시 초기값을 가져온다.
    //action은 dispatch함수로 connect를 통해서 들어 오게 된다.

    switch (action.type){//리듀서를 통해서 들어온 action 
        case types._CREATE_USER: //acionTyeps에서 구분
           
            // setState처럼 사용 할 부분
            return { setting :  //setting : 한 이유는 초기 setting을 했기에 변경 후에도 setting key를 유지하기 위함 
                {...setting}.concat(action.data)
            }

        case types._UPDATE_LOC: //acionTyeps에서 구분
            return { setting : setting.map( (key, i) => {
                    if(i === action.index){ //action index.js에서 지정한 index
                        return {...key, boolean:true}
                    }else{
                        return {...key};
                    }
                })
            }
        case types._UPDATE_USER_LIST:
            return {

            }
        case types._USER_SELECT:
            console.log(action.centerid);
            return {...state, centerid: action.centerid }
        case types._LOAD_USERLIST:
            return {...state, users: action.users}
        default: return state; //action을 이용하지 않을때 기본 this.props.setting을 사용할 때 사용
    }
} 
 
 
export default reducer; 
