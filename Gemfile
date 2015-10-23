source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.4'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
gem 'unicorn', group: [:production, :staging]
gem 'thin'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'haml-rails'
gem 'annotate', github: 'ctran/annotate_models'
gem 'rails-i18n', github: 'svenfuchs/rails-i18n', branch: 'master'
gem 'draper'
gem 'gon'
gem 'devise'

gem "rmagick"
gem "carrierwave", github:'carrierwaveuploader/carrierwave'
gem 'carrierwave-aws'

gem 'kaminari'
gem 'pg_search'

gem 'js-routes'
gem 'simple_form'
gem 'active_model_serializers'
gem 'i18n-js', '>= 3.0.0.rc11'

group :development, :test do
  gem 'byebug'
  gem 'ffaker'
  gem 'spring-commands-rspec'
  gem 'rspec-rails'
  gem 'guard-rspec'
  gem 'factory_girl_rails'
  gem 'pry-rails'
  gem 'launchy'
end

group :development do
  gem 'web-console', '~> 2.0'
  gem 'spring'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'quiet_assets'
  gem 'guard-livereload', require: false
  gem 'foreman'
  gem 'letter_opener'
  gem 'bullet'
end

group :test do
  gem 'database_cleaner'
  gem 'capybara'
  gem 'poltergeist', github: 'teampoltergeist/poltergeist'
end

