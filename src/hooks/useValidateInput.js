import { useState, useEffect } from 'react';

//Позже допишу вывод сообщений в зависимости от ошибки
const useValidation = (value, validations) => {
	const [isEmpty, setEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(true);
	const [emailError, setEmailError] = useState(false);
	const [formValidation, setFormValidation] = useState(false);

	useEffect(() => {
		if (isEmpty || minLengthError || emailError) {
			setFormValidation(false);
		} else {
			setFormValidation(true);
		}
	}, [isEmpty, minLengthError, emailError]);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation]
						? setMinLengthError(true)
						: setMinLengthError(false);
					break;
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true);
					break;
				case 'isEmail':
					const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
					re.test(String(value).toLowerCase())
						? setEmailError(false)
						: setEmailError(true);
					break;
				default:
			}
		}
	}, [validations, value]);

	return {
		isEmpty,
		minLengthError,
		emailError,
		formValidation,
	};
};

export const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setIsDirty] = useState(false);
	const valid = useValidation(value, validations);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const onBlur = (e) => {
		setIsDirty(true);
	};

	return {
		value,
		isDirty,
		onChange,
		onBlur,
		...valid,
	};
};
