const Transaction = (props) => {
	const item = props.data;
	return (
		<div className=" ol-lg-4  my-5 mx-5 border">
			<div class="card  bg-warning p-3 rounded-3" style={{ width: '20rem' }}>
				<div class="card-body  border  border-success">
					<div className="row col-12 ">
						{/* profile info start */}

						<div className=" col-9 ">
							<p className="fs-bold"> {item.name}</p>
						</div>

						<div className="col-3 border ">
							<img
								src="https://picsum.photos/seed/picsum/50/50"
								class="card-img-top img-fluid"
								alt="profile_picture"
							/>
						</div>
					</div>
					{/* profile name end*/}

					{/* investment info start */}
					<div>
						<div className="row row-cols-2 border">
							<div className="col border">
								<p className="fs-6 ">Total Saved</p>
								<h6 className="h6">{item.amountToSave}</h6>
							</div>
							<div class="col border">
								<p className="fs-6">Interest Rate</p>
								<h6 className="h6">{item.interestRate}</h6>
							</div>
							<div class="col border">
								<p className="fs-6">Start Date</p>
								<h6 className="h6">{item.startDate}</h6>
							</div>
							<div className="col border">
								<p className="fs-6">Maturity Date</p>
								<h6 className="h6">{item.estimatedTerminationDate}</h6>
							</div>
						</div>
					</div>
				</div>
				{/* investment info end */}
			</div>
		</div>
	);
};

export default Transaction;
