import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, select, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.add('icon', () => {
  const selectedClass = select('class', {
    'icon twitter': 'icon twitter',
    'icon facebook': 'icon facebook',
    'icon github': 'icon github',
    'icon youtube': 'icon youtube',
    'icon close': 'icon close',
    'octocat animate': 'octocat animate',
    'icon trophy': 'icon trophy',
    'nes-logo': 'nes-logo',
    'nes-jp-logo': 'nes-jp-logo',
    'snes-logo': 'snes-logo',
    'snes-jp-logo': 'snes-jp-logo',
  }, 'icon twitter');
  const selectedSize = radios('size', {
    default: '',
    'is-medium': 'is-medium',
    'is-large': 'is-large',
  }, '');

  return `<i class="${selectedClass} ${selectedSize}"></i>`;
});
