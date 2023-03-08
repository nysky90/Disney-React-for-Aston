import { UiButton } from './UiButton';

export default {
	title: 'Ui-Kit/UiButton',
	component: UiButton,
	argTypes: {
		text: {
			defaultValue: 'Button',
		},
		theme: {
			options: ['girls', 'boys'],
			control: { type: 'radio' },
		},
		size: {
			options: ['small', 'medium', 'big'],
			control: { type: 'radio' },
		},
	},
};

const Template = (args) => <UiButton {...args} />;

export const UIButton = Template.bind({});
