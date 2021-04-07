import {Component } from 'react'
import api  from '../utils/api'

class Home extends Component {

	state = {
		routes: [
			{title: '', 
			startPosition: {
				latitude: Number,
				longitude: Number
			},
			endPosition: {
				latitude: Number,
				longitude: Number
			}}
		] 
	}

	componentDidMount(){
	 api.get('/routes')
		.then(res => {
			this.setState({routes: res.data})
		});
	}
	render(){

		const {routes} = this.state;
		return(
			<div>
				{routes.map(dado => 
				<ul style={{listStyleType:'none'}}>
					<li>titulo: {dado.title}</li>  
					<li>startPosition: lat {dado.startPosition.latitude} lng: {dado.startPosition.longitude}</li> 
					<li>endPosition: lat {dado.startPosition.latitude} lng: {dado.startPosition.longitude}</li> 
				</ul>)}
			</div>
		)
	}
}
	
export default Home
