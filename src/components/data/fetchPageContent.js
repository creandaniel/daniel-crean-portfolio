import ReactDOM from 'react-dom';
import React, { useState,useEffect} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';



//https://medium.com/thecodefountain/fetch-api-data-using-useeffect-react-hook-465809ca12c6


const GetData = (props) => {
	const [posts, setData] = useState([])
	
	useEffect(() => {
		loadData();
	}, []);	


	const loadData = async () => {
		let lowerCasePropsName = props.name.toLowerCase();		
		fetch(`http://127.0.0.1:5000/api/${lowerCasePropsName}`)
			.then((response) => response.json())
			.then((data) => {
				setData(data) // new
				console.log(props.name.toLowerCase());
			})
	 
	  }
	return (
		
				<div className=''>
				
			
					<h1>{posts.email}</h1>

					<p>{posts.title}</p>
					<p>{posts.opening}</p>
					<p>{posts.outside_work}</p>
					<p>{posts.closing}</p>
			
		

				</div>
			
		
		)
}


export default GetData;
