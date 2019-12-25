# Set version ruby.
FROM ruby:2.6.5

# Some needed libraries.
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# Set workspace.
RUN mkdir -p /www/hope
WORKDIR /www/hope
COPY Gemfile /www/hope/Gemfile
COPY Gemfile.lock /www/hope/Gemfile.lock
RUN bundle install
COPY . /www/hope

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]