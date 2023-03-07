import { UiButton } from './UiButton';

export default {
	title: 'Ui-Kit/UiButton',
	component: UiButton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

const Template = (args) => <UiButton {...args} />;

export const Fun = Template.bind({});
export const Boy = Template.bind({});

Fun.args = {
	text: 'Hello',
	theme: 'fun',
	onClick: () => console.log('Fun button'),
	disabled: false,
};

Boy.args = {
	text: 'Yo!',
	theme: 'boy',
	onClick: () => console.log('Im for boys'),
	disabled: false,
};
