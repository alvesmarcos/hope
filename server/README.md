
# NOTE :construction:
API in development.

# REST API Hope 
--------

The Hope API was built using framework Ruby on Rails, Amazon S3 and Mailgun. To date, the service has not been deployed.

## Open Endpoints

Open endpoints require no Authentication.

### Session related

* Login:  `POST v1/sessions.json`
* Verify Email: `POST v1/verify_emails/create.json`
* Reset Password:  `POST v1/reset_password.json`
* Forgot Password: `POST v1/forgot_password.json`

### Account related

* Create Account `POST v1/users/create.json`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the request. A Token can be acquired from the Login above.

### Current User related

* Show Info: `GET v1/users/show.json`
* Update Info: `PUT v1/users/update.json`
* Delete Account: `DELETE v1/users/destroy.json`
* Upload Avatar: `POST avatars/update.json`
* Delete Avatar: `DELETE avatars/destroy.json`

### Account related

* List All Accounts: `GET v1/users/list.json`
* Show An Account: `GET v1/users/show/:id.json`
* Update An Account: `PUT v1/users/update/:id.json`
* Delete An Account: `DELETE v1/users/destroy/:id.json`

### Role related

* List All Roles: `GET v1/roles/list.json`

### Profile related

* List All Profiles: `GET v1/profiles/list.json`

### Feed related

* Show Feed: `GET v1/feeds/list.json`

### Article related

* List All Articles: `GET v1/articles/list.json`
* Create an Article: `POST v1/articles/create.json`
* Show an Article: `GET v1/articles/show/:id.json`
* Update an Article: `PUT v1/articles/update/:id.json`
* Delete an Article: `DELETE v1/articles/destroy/:id.json`
* Upload Thumbnail: `POST v1/thumbnail_articles/update/:id.json`
* Delete Thumbnail: `POST v1/thumbnail_articles/destroy/:id.json`

### Fact related

* List All Facts: `GET v1/facts/list.json`
* Create a Fact: `POST v1/facts/create.json`
* Show a Fact: `GET v1/facts/show/:id.json`
* Update a Fact: `PUT v1/facts/update/:id.json`
* Delete a Fact: `DELETE v1/facts/destroy/:id.json`

### Tip related

* List All Tips: `GET v1/tips/list.json`
* Create a Tip: `POST v1/tips/create.json`
* Show a Tip: `GET v1/tips/show/:id.json`
* Update a Tip: `PUT v1/tips/update/:id.json`
* Delete a Tip: `DELETE v1/tips/destroy/:id.json`

### Quote related

* List All Quotes: `GET v1/quotes/list.json`
* Create a Quote: `POST v1/quotes/create.json`
* Show a Quote: `GET v1/quotes/show/:id.json`
* Update a Quote: `PUT v1/quotes/update/:id.json`
* Delete a Quote: `DELETE v1/quotes/destroy/:id.json`


### FAQ related

* List All Faqs: `GET v1/faqs/list.json`
* Create a Faq: `POST v1/faqs/create.json`
* Show a Faq: `GET v1/faqs/show/:id.json`
* Update a Faq: `PUT v1/faqs/update/:id.json`
* Delete a Faq  : `DELETE v1/faqs/destroy/:id.json`

### Expert Opinion related

* List All Expert Opinions: `GET v1/expert_opinions/list.json`
* Create an Expert Opinion: `POST v1/expert_opinions/create.json`
* Show an Expert Opinion: `GET v1/expert_opinions/show/:id.json`
* Update an Expert Opinion: `PUT v1/expert_opinions/update/:id.json`
* Delete an Expert Opinion  : `DELETE v1/expert_opinions/destroy/:id.json`

### Documentary related

* List All Documentaries: `GET v1/documentaries/list.json`
* Create a Documentary: `POST v1/documentaries/create.json`
* Show a Documentary: `GET v1/documentaries/show/:id.json`
* Update a Documentary: `PUT v1/documentaries/update/:id.json`
* Delete a Documentary: `DELETE v1/documentaries/destroy/:id.json`
* Upload Thumbnail: `POST v1/thumbnail_documentaries/update/:id.json`
* Delete Thumbnail: `POST v1/thumbnail_documentaries/destroy/:id.json`

### Testimony related

* List All Testimonies: `GET v1/testimonies/list.json`
* Create a Testimony: `POST v1/testimonies/create.json`
* Show a Testimony: `GET v1/testimonies/show/:id.json`
* Update a Testimony: `PUT v1/testimonies/update/:id.json`
* Delete a Testimony: `DELETE v1/testimonies/destroy/:id.json`
* Upload Thumbnail: `POST v1/thumbnail_testimonies/update/:id.json`
* Delete Thumbnail: `POST v1/thumbnail_testimonies/destroy/:id.json`

## References

* [Ruby On Rails](https://rubyonrails.org/)
* [Build a RESTful JSON API With Rails 5](https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one)
* [REST API Docs](https://github.com/jamescooke/restapidocs/tree/master/examples)
