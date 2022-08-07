import * as toast from 'izitoast';
import { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';



export default function MailtoBuilder() {
	const [toField, setToField] = useState('');
	const [fromField, setFromField] = useState('');
	const [ccField, setCCField] = useState('');
	const [subField, setSubField] = useState('');
	const [bodyField, setBodyField] = useState('');
	const [mailto, setMailto] = useState('');


	const updateToField = (e) => setToField(e.target.value);
	const updateFromField = (e) => setFromField(e.target.value);
	const updateCCField = (e) => setCCField(e.target.value);
	const updateSubField = (e) => setSubField(e.target.value);
	const updateBodyField = (e) => setBodyField(e.target.value);

	useEffect(() => {
		const mailto = `mailto:${toField}?from=${fromField}&subject=${encodeURIComponent(subField)}&cc=${ccField}&body=${encodeURIComponent(bodyField)}`;
		setMailto(mailto);
	}, [toField, fromField, ccField, subField, bodyField, mailto]);

	const addToClipBoard = () => {
		navigator.clipboard.writeText(mailto);
		toast.success({
			timeout: 1500,
			position: 'topRight',
			message: 'Copied to clipboard',
		});
	};


    return (
		<div id='comp-mailto'>
			<Container className='coloring-book-container rounded p-4 shadow mailto-container mt-3 mb-5'>
				<Row>
					{/* TO  */}
					<div className='input-group col-12 mb-2'>
						<span className='input-group-text'>To</span>
						<input
							type='email'
							className='form-control'
							onInput={updateToField}
							value={toField}
							placeholder='SomebodyMcPerson@gmail.com'
						/>
					</div>

					{/* FROM  */}
					<div className='input-group col-12 mb-2'>
						<span className='input-group-text'>From</span>
						<input
							type='email'
							className='form-control'
							onInput={updateFromField}
							value={fromField}
							placeholder='SomeSender@gmail.com'
						/>
					</div>

					{/* CC  */}
					<div className='input-group col-12 mb-2'>
						<span className='input-group-text'>CC</span>
						<input
							type='email'
							className='form-control'
							onInput={updateCCField}
							value={ccField}
							placeholder='eavesdropper@gmail.com'
						/>
					</div>

					{/* SUBJECT  */}
					<div className='input-group col-12 mb-2'>
						<span className='input-group-text'>Subject</span>
						<input
							type='text'
							className='form-control'
							onInput={updateSubField}
							value={subField}
							placeholder='About that one thing'
						/>
					</div>

					{/* BODY  */}
					<div className='input-group col-12 mb-3'>
						<span className='input-group-text'>Body</span>
						<textarea
							type='text'
							className='form-control'
							onInput={updateBodyField}
							value={bodyField}
							placeholder='Hello!'
							rows='6'
						></textarea>
					</div>

					{/* BUTTONS  */}
					<div className='col-md-3 col-12 d-flex'>
						<div className='col-12 m-auto'>
							<Button href={mailto} className='btn col-12 mb-2 custom-primary-btn'>
								<i className='bi bi-envelope me-2'></i> Try
							</Button>
							<Button
								onClick={addToClipBoard}
								className='btn col-12 mb-2 custom-primary-btn'
							>
								<i class='bi bi-clipboard me-2'></i>
								Copy
							</Button>
						</div>
					</div>

					{/* OUTPUT  */}
					<div className='col-md-9 col-12 d-flex'>
						<textarea
							id='output-area'
							className='form-control my-auto bg-light'
							name='output-area'
							cols='30'
							rows='4'
							value={mailto}
							readOnly
						></textarea>
					</div>
				</Row>
			</Container>
		</div>
	);
}
