class UserMailer < ApplicationMailer
  default from: ENV['MAILGUN_EMAIL_HOST']
  layout 'mailer'

  # send a message with token to recovery password
  def recovery_email(user)
    @user = user
    mail(to: @user.email, subject: '[Hope] Recuperação de senha')
  end

  # send automatically after user created an account
  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Bem Vindo a Plataforma Hope')
  end
end
