Package.describe({
  name: 'studio127:tap-i18n-semantic-ui',
  summary: 'Semantic-UI User interface for the tap-i18n package',
  git: 'https://github.com/studio127/tap-i18n-semantic-ui',
  version: '0.4.1'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use("tap:i18n-ui@0.4.1");
  api.use(['coffeescript','underscore','templating','amplify'], 'client');


  api.add_files([
  'lib/i18n_ui.html',
  'lib/i18n_ui.coffee',
], 'client');


});
