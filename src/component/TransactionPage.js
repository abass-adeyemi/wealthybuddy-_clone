import Transaction from './Transcation';
import CreateTransaction from './CreateTransaction';

const TransactionPage = () => {
	const items = [
		{
			name: 'Vacation',
			savingsID: 'e090ce43-315b-4852-bcca-ee5a1f4223ba',
			amountToSave: 50000.0,
			amountSaved: 0.0,
			totalInterestEarned: 0,
			estimatedTerminationDate: '2022-03-08T00:00:00',
			startDate: '2022-02-26T00:00:00',
			savingsType: 1,
			status: 1,
			imageURL: '',
			interestRate: 15.5,
			schedule: 1,
			installmentalContribution: 5000.0,
			isPaused: false,
		},
		{
			name: 'Testing Personal Target',
			savingsID: '72824131-b4ae-49d0-bcae-29e553deb51c',
			amountToSave: 2000.0,
			amountSaved: 2500.0,
			totalInterestEarned: 10.616438356164383561643835616,
			estimatedTerminationDate: '2022-02-23T00:00:00',
			startDate: '2022-02-20T00:00:00',
			savingsType: 1,
			status: 2,
			imageURL: '',
			interestRate: 15.5,
			schedule: 1,
			installmentalContribution: 666.666666666666666667,
			lastPaymentDate: '2022-02-20T00:00:00',
			isPaused: true,
		},
		{
			name: 'G Challenge Weekly',
			savingsID: 'c6a1f776-ab92-4c89-aceb-9fdcfc70abb2',
			amountToSave: 2000.0,
			amountSaved: 0.0,
			totalInterestEarned: 0,
			estimatedTerminationDate: '0001-01-01T00:00:00',
			startDate: '0001-01-01T00:00:00',
			savingsType: 5,
			status: 1,
			imageURL:
				'https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/22fe2b2b-46ab-4971-8a87-72da6085e09b.jpeg',
			interestRate: 12.5,
			schedule: 2,
			installmentalContribution: 250.0,
			isPaused: false,
		},
		{
			name: 'G challenge week',
			savingsID: '286c453f-3910-4df7-9b02-87ae6d9844e2',
			amountToSave: 5000.0,
			amountSaved: 0.0,
			totalInterestEarned: 0,
			estimatedTerminationDate: '0001-01-01T00:00:00',
			startDate: '0001-01-01T00:00:00',
			savingsType: 5,
			status: 1,
			imageURL:
				'https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/897b9d7a-5030-446b-99b2-7248e80e9a95.jpeg',
			interestRate: 12.5,
			schedule: 1,
			installmentalContribution: 166.666666666666666667,
			isPaused: false,
		},
	];

	return (
		<>
			<div>
				<div
					className=" d-flex flex-row justify-content-center flex-wrap rw rw-cols-2 border border-danger "
					// style={{ border: '2px solid red' }}
				>
					{/* beging create transcation card */}
					<div className="c d-flex flex-row">
						<CreateTransaction />
						{/* <br />
						{/* beging transcation details card 
						{items.map((NewItem) => (
							<Transaction data={NewItem} />
						))}

						end transction details card */}
					</div>
					{/* end of  create transcation card */}

					<div className="cl-6 d-flex flex-row flex-wrap">
						{/* <div className="col-sm-6 col-lg-5 border"> */}
						{/* beging transcation details card  */}
						{items.map((NewItem) => (
							<Transaction data={NewItem} />
						))}
					</div>

					{/* end transction details card */}
					{/* </div> */}
				</div>
			</div>
		</>
	);
};
export default TransactionPage;
