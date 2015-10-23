require './i18n/translations'
require '../stylesheets/application.sass'

configureLocale = ->
  I18n.defaultLocale = 'en'
  I18n.locale = 'en'

configureLocale()

console.log I18n.t 'js.hello_world'
