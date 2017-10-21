App Flascards - created with create-react-native-app

Installation:
  From root directory run 'npm install'
  Start application run 'npm start'

 Application runs on port 3000  ex: localhost:3000


 Application functionality:

  Home page
    Reset Deck - Deletes all decks and associcated cards.
    Create New Deck - Navigates to 'Add Deck'  
    Shows list of available decks.
    Clicking on a Deck navigates to 'Cards' page where you can add a card or start quiz.

  Add Deck
     Enter Title for new add - press Add Deck
     Navigates to Cards page.
     Add card button navigates to 'Card' page where you can enter a Question and answer card.
     Save button saves card and returns to 'Cards' page
     Star Quiz button navigates to Quiz page.

  Quiz
     Quiz pages allows user to step through all questions.
     Answer button will show answer for question.
     Pressing Correct or Incorrect saves score and moves to next question.
     When quiz is complete Number of correct answers is displayed with percentage correct.
     Press 'Restar Quiz' to restart 'Back' to return to 'Cards' 

There is a notification that will notify the user at 5:00pm if no quizes are taken for the day.
