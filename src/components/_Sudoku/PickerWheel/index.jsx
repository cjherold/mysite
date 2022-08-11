
import { Button } from 'react-bootstrap';

export default function PickerWheel() {
	return (
		<div id='comp-pickerwheel' data-tilenumber='' className='d-none'>
			<Button id='close-wheel-btn' className='close'>
				&times;
			</Button>
			{[...Array(9)].map((each, index) => {
				const number = index + 1;
				return (
					<Button key={index} id={'btn-' + number} className='num-btn' value={number}>
						{number}
					</Button>
				);
			})}
		</div>
	);
}
