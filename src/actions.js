import { getRestarauntList, getCityID } from './service';

export function GET_RESTAURANT_LIST(data) {
  return dispatch => {
    dispatch({ type: 'LOADING', value: true });
    return getRestarauntList(data).then(res => {
      console.log(res ,'7::')
      dispatch({ type: 'LIST', value: res.restaurants });
    });
  }
}
export function GET_CITY_ID(data){

return  dispatch=>{
 dispatch({type: 'LOADING',value:true});
 return getCityID(data).then(res => {
   console.log(res ,'17::')
  dispatch({ type: 'CITY_ID', value: res && res.location_suggestions &&  res.location_suggestions[0]&& res.location_suggestions[0].entity_id });
});
}
}


