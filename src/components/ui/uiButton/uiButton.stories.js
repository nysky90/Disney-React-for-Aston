import { UiButton } from './UiButton';

export default {
	title: 'Ui-Kit/UiButton',
	component: UiButton,
};

const Template = (args) => <UiButton {...args} />;

export const Fun = Template.bind({});

Fun.args = {
	text: 'Hello',
	theme: 'fun',
	onClick: () => console.log('Fun button'),
	disabled: false,
};
