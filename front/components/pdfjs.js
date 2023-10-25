import React from 'react';
import { PDFDocument } from 'pdf-lib';

export const Pdfjs = ({ initialDoc }) => {
	const viewer = React.useRef();
	const [updatedPdf, setUpdatedPdf] = React.useState(initialDoc);
	const [formFields, setFormFields] = React.useState({});

	async function handlePdfChange(field, value) {
		console.log('Field changed: ' + field.name + ', ' + value);
		setFormFields((prev) => ({ ...prev, [field.name]: value }));
	}

	React.useEffect(() => {
		import('@pdftron/pdfjs-express').then(() => {
			WebViewer(
				{
					path: '/lib/pdfjs-express',
					initialDoc,
				},
				viewer.current
			).then((instance) => {
				const { annotationManager, documentViewer } = instance.Core;

				annotationManager.addEventListener('fieldChanged', handlePdfChange);
			});
		});
	}, []);

	async function flattenPDF() {
		const pdfBuffer = await fetch(initialDoc).then((res) => res.arrayBuffer());
		const pdfDoc = await PDFDocument.load(pdfBuffer);
		const form = pdfDoc.getForm();
		const fields = form.getFields();
		fields.forEach((field) => {
			const type = field.constructor.name;
			const name = field.getName();
			if (type === 'PDFTextField') {
				const field = form.getTextField(name);
				field.setText(formFields[name]);
			}
		});

		form.flatten();
		const pdfBytes = await pdfDoc.save();
		setUpdatedPdf(pdfBytes);
	}

	return (
		<div>
			<button onClick={flattenPDF} style={{ margin: '20px' }}>
				FLATTEN
			</button>
			<div
				className="webviewer"
				ref={viewer}
				style={{ height: '130vh', width: '100%', display: 'inline-block' }}
			></div>
			{/* <iframe
				src={URL.createObjectURL(new Blob([updatedPdf], { type: 'application/pdf' }))}
				style={{
					border: 'none',
					height: '80vh',
					width: '50%',
					display: 'inline-block',
				}}
			></iframe> */}
		</div>
	);
};
