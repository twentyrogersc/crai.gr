
const harp = require('harp');

harp.server('src', { port: process.env.PORT || 5000 }, () => {});
