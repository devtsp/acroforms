const db = {
	_db: {
		BlankDocuments: [
			{
				Id: '0',
				OriginalName: 'Acknowledgement HIPAA.pdf',
				Alias: 'Acknowledgement HIPAA',
				AcroFields: [
					{
						id: '0',
						type: 'text',
						boxTopLeftCoordinate: { x: '123215365613', y: '15635613561563' },
						boxSize: { x: '200', y: '30' },
					},
					{
						id: '1',
						type: 'checkbox',
						boxTopLeftCoordinate: { x: '2342342516334234', y: '6678915635163' },
						boxSize: { x: '20', y: '20' },
					},
					{
						id: '2',
						type: 'signature',
						boxTopLeftCoordinate: { x: '4963115615633', y: '1563156311563' },
						boxSize: { x: '300', y: '200' },
					},
				],
			},
		],
	},
	getById(table, id) {
		return this._db[table].find(({ Id }) => Id === id);
	},
};

module.exports = { db };
