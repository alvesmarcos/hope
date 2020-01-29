module V1
  class FeedsController < ApplicationController
    # only feed admin can post a feed
    before_action do
      authorize_request(:superuser, :user)
    end
      
    # allowed => superuser, user
    # feeds/
    def index
      fact = to_json(Fact.last)
      tip = to_json(Tip.last)
      quote = to_json(Quote.last)
      expert_opinion = to_json(ExpertOpinion.last)
      faq = to_json(Faq.last)
      article = to_json(Article.last)
      testimony = to_json(Testimony.last)
      documentary = to_json(Documentary.last)
      
      json_response({ 
        fact: fact,
        tip: tip, 
        quote: quote,
        expert_opinion: expert_opinion,
        faq: faq,
        article: article,
        testimony: testimony,
        documentary: documentary
      })
    end

    private
    
    # do better
    def to_json(record)
      if record.nil?
        return record
      end
      record.as_json(:include => { 
        created_by: { 
          :include => [:role, :profile], 
          :except => [:password_digest, :reset_password_token, :reset_password_sent_at, :profile_id, :role_id] }
      }, :except => [:created_by_id])
    end
  end
end