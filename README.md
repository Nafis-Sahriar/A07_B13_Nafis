# KeenKeeper

KeenKeeper is a simple web app that helps users stay connected with their friends. 
It allows users to track interactions like calls,texts, and video chats, and see how well they are maintaining their relationships.


## Introduction

KeenKeeper helps you manage your friendships in an organized way. You can see all your friends, check their current status, and keep track of when you last contacted them. It gives you a clear idea of who you should reach out to next.


## Main Features

- View all friends on the homepage with their current status  
  (On Track, Overdue, Almost Due) Also includes how many days ago the recent interaction was. 

- Click on any friend to see detailed information, by clicking the friend's name, you will be redirected to the details page and see the interaction history with that friend, including the type of interaction and the date it occurred.

- Perform quick actions:
  - Call
  - Text
  - Video

- Every action is saved as an interaction

- Timeline page:
  - Shows all interaction history
  - Sorted by most recent first
  - Filter by Call, Text, or Video

- Individual friend details page:
  - Shows interaction history for that specific friend

- Stats page:
  - Displays total interactions
  - Shows a pie chart of Calls, Texts, and Videos

## How to Use

1. Open the app and go to the homepage  
2. View your list of friends and their status in the homepage.
3. Click on a friend to open their details page .
4. Use the buttons (Call,Text,Video) to interact  
5. Go to the Timeline page to see all interactions  
6. Use the filter to view specific types of interactions  
7. Visit the Stats page to see your interaction summary  

## Features-by-Page

1. **Homepage**: Displays a list of friends with their current status (On Track, Overdue, Almost Due) and how many days ago the recent interaction was. The datas shown in the card all are dynamically calculated. 
2. **Friend Details Page**: Shows detailed information about a specific friend, including their interaction history with the type of interaction and the date it occurred.
3. **Timeline Page**: Displays all interaction history sorted by most recent first, with the ability to filter by Call,Text,or Video. ALso you can filter the interactions by type (Call, Text, Video).
   - Extra added - If you click on a specific interaction in the timeline, it will take you to the details page of that friend again. And then you can make other interactions with that friend.

4. **Stats Page**: Displays total interactions and a pie chart of Calls, Texts, and Videos.

## Tech Stack

- React  
- React Router  
- Context API(for state management)  
- Tailwind CSS  
- DaisyUI  
- Recharts (for charts)  
- React Toastify (for notifications)
- React Icons (for icons)
- Google Fonts (for typography)
- Netlify (for deployment)
- ImageBB for image hosting.

