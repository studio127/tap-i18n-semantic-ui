Template.i18n_semantic_ui_dropdown.rendered = ->
  $('select.dropdown').dropdown()

Template.i18n_semantic_ui_dropdown.events
  # set language to selected option's tag
  'change .tap-i18n-dropdown select' : (e) -> TAPi18n.setLanguageAmplify $(e.currentTarget).val()

Template.i18n_semantic_ui_buttons.events
  # set language to context tag
  'click .tap-i18n-buttons button' : (e,tmpl) -> TAPi18n.setLanguageAmplify @tag
