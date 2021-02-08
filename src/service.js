import xhr from './xhr';


const getRestarauntList = (data) => xhr(`https://developers.zomato.com/api/v2.1/search?entity_id=${data[0]}&entity_type=city&q=${data[1]}`);
const getCityID =(data)=>xhr(`https://developers.zomato.com/api/v2.1/locations?query=${data}`)

export { getRestarauntList ,getCityID};
