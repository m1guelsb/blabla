export const getEmailofWhoYouTalking = (
  chatUsersEmails: string[],
  userLoggedInEmail: string
) => {
  const emailofWhoYouTalking = chatUsersEmails?.filter(
    email => email !== userLoggedInEmail
  )[0]

  return emailofWhoYouTalking
}
