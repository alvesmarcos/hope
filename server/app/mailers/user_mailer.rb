class UserMailer < ApplicationMailer
  # send a message to recovery password
  def recovery(email, token)
    send(email, 
    '[Hope] Recuperação de senha', 
    "O token para recuperação de senha é #{token}. Você tem até duas horas para utiliza-lo antes de ser expirado.
    Caso você não tenha solicitado a recuperação de senha, por favor, desconsidere essa mensagem.")
  end
  
  ##
  ## TODO: write here others template of email (e.g Welcome, Notification etc.)
  ## 

  private

  def send(email, subject, message)
    mg_client = Mailgun::Client.new(ENV['MAILGUN_API_KEY'])
    message_params = { from: ENV['MAILGUN_EMAIL_HOST'], to: email, subject: subject, text: message }
    mg_client.send_message(ENV['MAILGUN_DOMAIN'], message_params)
  end
end
