import * as toast from 'izitoast';
import { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';


export default function MailtoBuilder() {
	const [mailto, setMailto] = useState({
		toField: '',
		fromField: '',
		ccField: '',
		subField: '',
		bodyField: '',
	});
	const [textResult, setTextResult] = useState('');

	// Update field values on change
	function handleChange(e) {
		setMailto({
			...mailto,
			[e.target.name]: e.target.value,
		});
	}

	function addToClipBoard () {
		navigator.clipboard.writeText(textResult);
		toast.success({
			timeout: 1500,
			position: 'topRight',
			message: 'Copied to clipboard',
		});
	};

	// Update output area when field values change
	useEffect(() => {
		const {toField, fromField, subField, ccField, bodyField } = mailto;
		const text = `mailto:${toField}?from=${fromField}&subject=${encodeURIComponent(subField)}&cc=${ccField}&body=${encodeURIComponent(bodyField)}`;
		setTextResult(text);
	}, [mailto]);


	return (
		<div id='comp-mailto'>
			<Container className='coloring-book-container rounded p-4 shadow mailto-container mt-3 mb-5'>
				<Row>
					{/* TO  */}
					<div className='input-group col-12 mb-2'>
						<span htmlFor="toField" className='input-group-text'>To</span>
						<input
							id="toField"
							name="toField"
							type='email'
							className='form-control'
							onInput={handleChange}
							value={mailto.toField}
							placeholder='SomebodyMcPerson@gmail.com'
						/>
					</div>

					{/* FROM  */}
					<div className='input-group col-12 mb-2'>
						<span htmlFor="fromField" className='input-group-text'>From</span>
						<input
							id="fromField"
							name="fromField"
							type='email'
							className='form-control'
							onInput={handleChange}
							value={mailto.fromField}
							placeholder='SomeSender@gmail.com'
						/>
					</div>

					{/* CC  */}
					<div className='input-group col-12 mb-2'>
						<span htmlFor="ccField" className='input-group-text'>CC</span>
						<input
							id="ccField"
							name="ccField"
							type='email'
							className='form-control'
							onInput={handleChange}
							value={mailto.ccField}
							placeholder='eavesdropper@gmail.com'
						/>
					</div>

					{/* SUBJECT  */}
					<div className='input-group col-12 mb-2'>
						<span htmlFor="subField" className='input-group-text'>Subject</span>
						<input
							id="subField"
							name="subField"
							type='text'
							className='form-control'
							onInput={handleChange}
							value={mailto.subField}
							placeholder='About that one thing'
						/>
					</div>

					{/* BODY  */}
					<div className='input-group col-12 mb-3'>
						<span id="bodyField" className='input-group-text'>Body</span>
						<textarea
							id="bodyField"
							name="bodyField"
							type='text'
							className='form-control'
							onInput={handleChange}
							value={mailto.bodyField}
							placeholder='Hello!'
							rows='6'
						></textarea>
					</div>

					{/* BUTTONS  */}
					<div className='col-md-3 col-12 d-flex'>
						<div className='col-12 m-auto'>
							<Button href={textResult} className='btn col-12 mb-2 custom-primary-btn'>
								<i className='bi bi-envelope me-2'></i> Try
							</Button>
							<Button
								onClick={addToClipBoard}
								className='btn col-12 mb-2 custom-primary-btn'
							>
								<i className='bi bi-clipboard me-2'></i>
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
							value={textResult}
							readOnly
						></textarea>
					</div>
				</Row>
			</Container>
		</div>
	);
}
