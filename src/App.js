import React, {  useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {  GET_RESTAURANT_LIST,GET_CITY_ID } from './actions';
import Restaurant from './Restaurant';
import {InputGroup,FormControl,Button} from 'react-bootstrap'

const App = ({ loading, list, cityId, getRestarauntList,getCityID }) => {
  console.log(list, '7::', cityId);
  const [city ,setCity]= useState('florida');
 

  const handleChange = (val) => {
  setCity(val.target.value);
 
  
  }
  const handleSubmit =()=>{
   getRestarauntList([cityId ,city]);
  }
  const getCityId =(e)=>{
    console.log(e.target.value ,'39');
    setCity(e.target.value);
    getCityID(city)
  }
 
 
 
  return (
    <div>
     
         
    <InputGroup>
    
    <FormControl
      placeholder="Enter your city Name"
      aria-label="This is text box to input your search city"
      aria-describedby="basic-addon2"
      onChange={getCityId}
    />
    </InputGroup>  
     
      
     
    
    <InputGroup>
    <FormControl
      placeholder="Search "
      aria-label="This is text box to input your Restaurent Name, Address, or cusine Name to filter the List"
      aria-describedby="basic-addon2"
      onChange={handleChange}
    />
    <InputGroup.Append>
      <Button  onClick={handleSubmit} variant="outline-secondary">Search</Button>
    </InputGroup.Append>
  </InputGroup>
   
    <div>
    {list.map(rest => (
				<Restaurant
					name = {rest.restaurant.name}
					img = {rest.restaurant.thumb}
					location = {rest.restaurant.location.locality}
					add = {rest.restaurant.location.address}
					cuisine = {rest.restaurant.cuisines}
					price = {rest.restaurant.average_cost_for_two}
					rating = {rest.restaurant.user_rating.aggregate_rating}
					votes = {rest.restaurant.user_rating.votes}
					ratingcolor = {rest.restaurant.user_rating.rating_obj.bg_color.type}
				/>	  
			))}
    </div>
</div>

  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    loading: state.loading,
    list: state.list,
    cityId:state.cityId
  }
};

const mapDispatchToProps = {
  getRestarauntList: GET_RESTAURANT_LIST,
  getCityID: GET_CITY_ID
};

export { App };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
