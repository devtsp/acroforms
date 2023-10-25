import React from 'react';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

export default function Renderer({ documentPath }) {
	const [file, setFile] = React.useState(documentPath);
	const [numPages, setNumPages] = React.useState(null);

	function onFileChange(event) {
		setFile(event.target.files[0]);
	}

	function onDocumentLoadSuccess({ numPages: nextNumPages }) {
		setNumPages(nextNumPages);
	}

	return (
		<div>
			<div>
				<label htmlFor="file">Load from file:</label> <input onChange={onFileChange} type="file" />
			</div>
			<div>
				<Document file={file} onLoadSuccess={onDocumentLoadSuccess}></Document>
			</div>
		</div>
	);
}
