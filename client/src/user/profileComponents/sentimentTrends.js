import React, { Component } from 'react';
import {ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import '../../style/Charts.css';

class SentimentTrends extends Component {
	render() {
		const data = this.props.data;

		const getPercent = (value, total) => {
			const ratio = total > 0 ? value / total : 0;  
		  	return toPercent(ratio, 2);
		};

		const toPercent = (decimal, fixed = 0) => {
			return `${(decimal * 100).toFixed(fixed)}%`;
		};

		const renderTooltipContent = (props) => {
			const { payload, label } = props;
			const total = payload.reduce((result, entry) => (result + entry.value), 0);
		  
		  	return (
		  		<div className="customizedToolTip" style={{ backgroundColor: '#fff', border: '1px solid #999', margin: 0, padding: 10 }}>
		    		<p className="total">{`${label}`}</p>
		      	<ul className="ToolTiplist">
		      		{
		        		payload.map((entry, index) => (
		          		<li key={`item-${index}`} style={{color: entry.color}}>
		            		{`${entry.name}: (${getPercent(entry.value, total)})`}
		            	</li>
		          	))
		        	}
		      	</ul>
		    	</div>
		  	);
		};

		return(
			
			<ResponsiveContainer  height={400}>
				<AreaChart data={data} stackOffset="expand"
		            margin={{top: 10, right: 0, left: 0, bottom: 0}} >
			        <XAxis dataKey="date"/>
			        <YAxis hide/>
			        <CartesianGrid strokeDasharray="3 3"/>
			        <Tooltip content={renderTooltipContent}/>
			        <Area type='monotone' dataKey='positive' stackId="1" stroke='#A1D4E3' fill='#A1D4E3' />
			        <Area type='monotone' dataKey='negative' stackId="1" stroke='#F98285' fill='#F98285' />
			        <Area type='monotone' dataKey='neutral' stackId="1" stroke='#BD70B3' fill='#BD70B3' />
			        <Area type='monotone' dataKey='mixed' stackId="1" stroke='#E9CC84' fill='#E9CC84' />
			    </AreaChart>
			</ResponsiveContainer>
		)
	}
}


export default SentimentTrends;

