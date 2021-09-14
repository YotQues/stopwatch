import '../src/index.css';
import { addDecorator } from '@storybook/react'


addDecorator((story) => (
  <div className="flex justify-center items-center">{story()}</div>
))
//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}