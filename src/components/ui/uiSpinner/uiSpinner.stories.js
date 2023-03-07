import { UiSpinner } from './UiSpinner';

export default {
	title: 'Ui-Kit/UiSpinner',
	component: UiSpinner,
	argTypes: {
		size: {
			options: ['small', 'medium', 'big'],
			control: { type: 'radio' },
		},
	},
};

const Template = (args) => <UiSpinner {...args} />;
export const Spinner = Template.bind({});
