import { configure, setAddon } from '@kadira/storybook';
import IntlAddon from 'react-storybook-addon-intl';
import { addLocaleData } from 'react-intl';
import pt from 'react-intl/locale-data/pt';

setAddon(IntlAddon);
addLocaleData(pt);

const req = require.context('../app', true, /(stor(y|ies).js|.stor(y|ies).js$)/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
