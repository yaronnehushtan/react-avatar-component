import React from 'react';

export function Avatar(props) {
	console.log(props.shape);

	let imgStyle = {
		'border-radius': '0%'
		};  
	
	if (props.shape==='circle'){
		imgStyle = {
		'border-radius': '50%'
		};  
	}

	return (<div className="Avatar" >
		<img src={props.url} width={props.width} style={imgStyle}/>
	</div>);
}