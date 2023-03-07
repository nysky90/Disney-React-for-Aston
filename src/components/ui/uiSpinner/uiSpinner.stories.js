import { UiSpinner } from './UiSpinner';

export default {
	title: 'Ui-Kit/UiSpinner',
	component: UiSpinner,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		primary: true,
	},
};

const Template = (args) => <UiSpinner {...args} />;
export const Spinner = Template.bind({});
