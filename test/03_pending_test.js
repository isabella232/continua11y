'use strict';

var assert    = require('chai').assert;
var reporter  = require('../lib/reporter');
var models    = require('../models');

describe('Route tests', function () {
    it('serves a home page with recent tests');
    it('shows commits on repo page');
    it('shows urls on commit page');
});

describe('HTML conversion tests', function () {
    it('stores HTML in the database');
    it('converts JSONified HTML to plain HTML');
    it('displays the HTML correctly');
})
