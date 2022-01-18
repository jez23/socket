# NC Messenger

Over the next two days you will be making a full stack web app. It will be a chat-room style messenger app but the implementation is largely up to you!

The goal is to practice your teamwork and communication skills, whilst learning a new technology. All of which will be developed using agile practices.

To get you started we have provided some user stories and done a little bit of research into tech choices for you. These include a few non-traditional _developer_ ones that are just for learning purposes.

## User Stories

- As a user, I can use a web-app to view the chat.
- As a user, I can post a message to the chat.
- As a user, I receive messages from other users in real-time.
- As a user, I receive messages with a username and avatar image, telling me who posted it.
- As a user, I can change my username.
- As a user, I can change my avatar image using a url.
- As a user, I can see which other users are online.
- As a user, I received a message when another user connects / disconnects.

### A few not-really-user-stories

- As a developer, I will use proper GIT practices.
- As a developer, I will use a kanban board to track the teams progress.
- As a developer, I will separate the concerns between my front end and back end.

In order to handle the real-time the modern solution is [WebSockets](https://en.wikipedia.org/wiki/WebSocket). We've done some preliminary research for you and come across a popular package called [socket.io](https://socket.io/), which uses WebSockets to send live data between a node http servers and a client. They include an excellent [getting started guide](https://socket.io/get-started/chat/).

## Day 1 - Agile Practices

Spend today planning how your team is going to embark on its first project.
You should not be committing to the "real" code on day 1.

### 1. Break down user stories into individual tasks

Think about all the component parts that will make that story doable

### 2. Organise these into a kanban board

For each task you could include: - assignees - due dates - difficulty levels

### 3. Spike and perform RATS (Riskiest Assumption Tests)

Based on your user stories and kanban board tasks isolate the technologies / integrations you're not so sure of. Perform small scale unit / integration tests to prove you can do smaller sections before you embark on the whole project or user story.

### 4. STAND UP (no, really, stand up!)

Get used to communicating in a larger group.

- Communicate your spike and RAT findings - What issues might you face? How can you over come them?
- Review tasks in progress, completed or even adding new tasks

## Day 2 - Git Practices

The sprint starts in full swing and you should start working on completing your user stories, now fully broken down into bite size tasks.

As ever, your aim is not to finish every task but to work well and communicate as group and use git more carefully. Have regular stand-ups, pair programme, move tasks on your kanban board utilise those Agile practices.

You should make full use of git version control including but not limited to:

- a protected _main_ branch
- feature branches
- using pull requests to merge changes
