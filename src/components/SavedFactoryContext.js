import PropTypes from 'prop-types';
import React from 'react';
import useSavedFactory from '../hooks/useSavedFactory';

function getState(saved, toggleSaveBtn = () => {}, unsaveFactory = () => {}) {
	return {
		saved,
		toggleSaveBtn,
		unsaveFactory
	};
}

const SavedFactoryContext = React.createContext(getState());

const SavedFactoryContextProvider = ({ children }) => {
	const [ saved, toggleSaveBtn, unsaveFactory ] = useSavedFactory();

	return (
		<SavedFactoryContext.Provider value={getState(saved, toggleSaveBtn, unsaveFactory)}>
			{children}
		</SavedFactoryContext.Provider>
	);
};

export { SavedFactoryContext, SavedFactoryContextProvider };

SavedFactoryContextProvider.propTypes = {
	children: PropTypes.node.isRequired
};
