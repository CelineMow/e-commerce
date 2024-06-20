import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.sass';

// importer jquery

const $ = require('jquery');

// importer bootstrap

require('bootstrap');

// importer showAndHidePassword.js

import './showAndHidePassword';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
