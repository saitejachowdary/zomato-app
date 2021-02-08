import React from 'react'

const Restaurant = ({ name, img, location, add, cuisine, price , rating, votes, ratingcolor }) => {
	return (
		<div className="restaurant-tile">
			<img alt="" src={img} className="rest-img" />
			<div className="rest-details">
				<h2 role="presentation" className="rest-name">{name}</h2>
				<div className="rest-loc">{location}</div>
				<div className="rest-add">{add}</div>
				<div role="presentation">&nbsp;</div>
				<div className="rest-cusines"><strong>CUISINES:</strong> {cuisine}</div>
				<div className="rest-rating pull-right">
				<p style={{backgroundColor: `${ratingcolor}`}}>{rating}<span class="sr-only">Rating</span></p>
				<div>{votes} votes</div>
			</div>
			</div>
		</div>
	)
}

export default Restaurant
