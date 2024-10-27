export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="background-image:url('../template/Cloud.jpg'); background-attachment:fixed; background-repeat: no-repeat; background-size: cover; font-family: 'Segoe UI'">
  <div style="position: absolute; margin: 0; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding:20px; border-radius: 20px;">
    <h1 style="text-align: center; color: #6F85DF;">Verify Your Email</h1>
    <p>Hello, </p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px;">
      <span style="font-size: 42px; font-weight: bold; letter-spacing: 5px;color: #6F85DF;">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Bes regards,<br>TravelBuddy</p>
    <div>
      <p>This is an automated message, please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = ``;