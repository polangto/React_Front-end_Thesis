import React, { useState } from 'react';
import '../../../style.css';
function Engage(props) {
	const [colapse, setColapse] = useState(false);
	let { info } = props;
	let checkNull = true;
	let list = "";
	if (typeof info !== 'undefined'){
		checkNull = false;
		list = info.map((item) =>   <tr>
			<td><input type="checkbox" class="checkthis" /></td>
			<td>{item.name_incident}</td>
			<td>{item.detail}</td>
		</tr>);
	}

	return (
		<div className="container-fruld">
			<div className="row">
				<h4 className="my-2 mx-2">Engage</h4>
				<p className="engage"></p>
				{colapse ? (
					<button
						onClick={() => setColapse(!colapse)}
						type="button"
						className="m-2 btn btn-outline-dark btn-sm"
						data-toggle="collapse"
						data-target="#demo"
					>
						<i className="fas fa-plus"></i>
					</button>
				) : (
					<button
						onClick={() => setColapse(!colapse)}
						type="button"
						className="m-2 btn btn-outline-dark btn-sm"
						data-toggle="collapse"
						data-target="#demo"
					>
						<i className="fas fa-minus"></i>
					</button>
				)}
				{!colapse && !checkNull ?
					<table id="mytable" class="table table-bordred table-striped">
						<tbody>
						{list}
						</tbody>
					</table>:''}

			</div>
		</div>
	);
}

export default Engage;