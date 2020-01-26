import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const ModalPortal = ({ children }) => {
	// React does *not* create a new div. It renders the children into `domNode`.
	// `domNode` is any valid DOM node, regardless of its location in the DOM.

	const element = document.createElement('div');
	element.id = 'modal-id';

	useEffect(
		() => {
			document.body.appendChild(element);
			//cleans up modal when unmounts
			return () => document.body.removeChild(element);
		},
		[ element ]
	);
	return ReactDOM.createPortal(children, element);
};

export default ModalPortal;
