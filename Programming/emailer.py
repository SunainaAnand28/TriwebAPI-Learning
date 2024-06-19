import yagmail
user = "sunainaanand350@gmail.com"
app_code = "1234"
to = "sunainanand28@gmail.com"
subject = 'My email subject'
content = ["my email "]
with yagmail.SMTP(user, app_code) as yag:

    yag.send(to,subject,content)
    