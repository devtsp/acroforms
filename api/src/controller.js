const path = require('path');
const fs = require('fs');

const PDFDocument = require('pdfkit');
const fs = require('fs');

const { db } = require('./db');

async function getPdfInfo(req, res) {
	const pdfSelected = db.getById('BlankDocuments', req.params.pdfId);
	res.json(pdfSelected);
}

async function postPdfFields(req, res) {
	const { Id } = req.params;
	const { AcroFields } = req.body;
	const doc = new PDFDocument();
	res.json('Attempted to post a pdf acro-form!');
}

module.exports = { getPdfInfo, postPdfFields };
