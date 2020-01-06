import { useState } from 'react';

function useSavedFactory() {
	const [ saved, setSaved ] = useState(false);

	function toggleSaveBtn() {
		setSaved(!saved);
	}

	function unsaveFactory() {
		if (saved) {
			setSaved(false);
		}
	}

	return [ saved, toggleSaveBtn, unsaveFactory ];
}

export default useSavedFactory;
