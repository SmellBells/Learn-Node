import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocompete from './modules/autocomplete';

autocompete( $('#address'), $('#lat'), $('#lng'));