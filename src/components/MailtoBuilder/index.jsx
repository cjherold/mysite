import main from './mailtobuilder';

function MailtoBuilder() {
    return (
		<div id='comp-mailto'>
			<div id='form-container' class='container bg-light rounded p-3 shadow mailto-container'>
				<div class='row'>
					<div class='col-12 text-center'>
						<h3 class='p-3 cust-font'>Fill the form to create your mailto</h3>
					</div>
				</div>

				<div class='row px-3'>
					<div class='col-12 p-3'>
						<div class='col-12 input-group mb-2'>
							<span class='input-group-text'>To</span>
							<input
								id='to-field'
								type='text'
								class='form-control form-field'
								placeholder='SomebodyMcPerson@gmail.com'
							/>
						</div>
						<div class='col-12 input-group mb-2'>
							<span class='input-group-text' id=''>
								From
							</span>
							<input
								id='from-field'
								type='text'
								class='form-control form-field'
								placeholder='SomeSender@gmail.com'
							/>
						</div>
						<div class='col-12 input-group mb-2'>
							<span class='input-group-text' id=''>
								Subject
							</span>
							<input
								id='subject-field'
								type='text'
								class='form-control form-field'
								placeholder='About that one thing'
							/>
						</div>

						<div class='col-12 input-group mb-3'>
							<span class='input-group-text' id=''>
								CC
							</span>
							<input
								id='cc-field'
								type='text'
								class='form-control form-field'
								placeholder='eavesdropper@gmail.com'
							/>
						</div>
						<div class='col-12 input-group mb-2'>
							<span class='input-group-text' id=''>
								Body
							</span>
							<textarea
								id='body-field'
								type='text'
								class='form-control form-field'
								rows='6'
								placeholder='Hello!'
							></textarea>
						</div>
					</div>
				</div>

				<div class='row px-3'>
					<div class='col-md-3 col-12  mb-md-0 mb-2'>
						<a
							id='try-button'
							href='mailto:email@example.com?from=SomeSender@gmail.com&subject=About%20that%20one%20thing&cc=eavesdropper@gmail.com&body=Hello!'
							class='btn btn-outline-primary me-2 col-12 mb-1'
						>
							<i class='bi bi-envelope me-1'></i>Try
						</a>
						<button
							id='copy-button'
							href='mailto:email@example.com'
							class='btn btn-outline-primary me-2 col-12'
						>
							<i class='bi bi-clipboard me-1'></i>Copy
						</button>
					</div>
					<div class='col-md-9 col-12'>
						<textarea id='output-area' class='form-control' rows='3'>
							mailto:email@example.com?from=SomeSender@gmail.com&subject=About%20that%20one%20thing&cc=eavesdropper@gmail.com&body=Hello!
						</textarea>
					</div>
				</div>

				<script src="./mailtobuilder.js"></script>
			</div>
		</div>
	);
}

export default MailtoBuilder;