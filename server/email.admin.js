Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://postmaster%40sandbox5fd91adbdf9a4e329c270f4204e97f45.mailgun.org:42490b170eb223fc71ac3cbc5acdddb6@smtp.mailgun.org:587';
});

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});
