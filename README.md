<img src="https://socialify.git.ci/Qhathizwe/Chat-Mobile_UI/image?language=1&name=1&owner=1&stargazers=1&theme=Auto" alt="Chat-Mobile_UI" width="640" height="320" />
# Messaging App UI – UI Challenge

## 📌 Project Overview

This project is a **Messaging Application User Interface (UI)** developed as part of an mLab UI challenge.

The main objective of the challenge was to recreate a modern messaging application design using React Native while demonstrating an understanding of component-based development, reusable components, styling, scrolling, responsive layouts, and interactive hover effects.

The application focuses entirely on the frontend user interface. It demonstrates what a messaging application could look like, without implementing backend services, authentication, databases, or real-time messaging functionality.

## 🎯 Challenge Objectives

The project was developed with the following objectives in mind:

- Recreate a messaging application interface based on a selected design.
- Build reusable components to avoid repeating code.
- Use React Native's `StyleSheet` API for styling.
- Implement horizontal and vertical scrolling.
- Create hover effects for supported web interactions.
- Make the interface responsive across different screen sizes.
- Maintain a clean and organised project structure.
- Develop a visually appealing and user-friendly interface.

## 🎨 UI Design and Features

The application uses a modern messaging dashboard layout with a purple colour theme, rounded containers, profile images, and clear visual indicators.

### 1. Header Section

The header introduces the messaging interface and includes:

- A welcome greeting.
- A message overview showing the number of received messages.
- A menu icon.
- A purple background to establish the application's visual identity.

### 2. Contacts Section

The contacts section displays a horizontally scrollable list of contacts.

Each contact includes:

- A profile image.
- A contact name.
- An online status indicator.

Horizontal scrolling allows users to view additional contacts without overcrowding the interface.

### 3. Messaging Categories

The interface includes messaging categories such as:

- Direct Messages.
- Group Messages.

These categories are presented using rounded buttons and visual notification indicators.

### 4. Search Section

A search bar is included in the messaging panel to represent how users could search for conversations or contacts.

The search element is part of the visual interface and does not perform an actual search operation.

### 5. Messages Section

The messages section displays a list of conversations.

Each conversation includes:

- Contact profile image.
- Contact name.
- Message preview.
- Message time.
- Unread message indicators.
- Read or delivered status indicators.

The conversation list uses vertical scrolling to allow users to browse through multiple messages.

### 6. Floating Action Button

A floating action button is positioned near the bottom of the interface to represent an action for starting a new conversation.

It is included as a UI element and does not currently create a conversation.

### 7. Hover Effects

Reusable hover interactions were implemented using React Native's `Pressable` component and hover event handlers.

These effects provide visual feedback when users move their mouse over supported interface elements in the web version.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React Native | Building the application interface |
| React | Component-based development |
| TypeScript | Type safety and component props |
| Expo | Development and application runtime |
| Expo Router | Application navigation and entry point |
| React Native StyleSheet | Styling and layout management |
| React Native ScrollView | Horizontal and vertical scrolling |
| React Native Pressable | Interactive and hoverable elements |
| Expo Vector Icons | Icons used throughout the interface |

## 📁 Project Structure

The main application files are organised as follows:

```text
project-folder/
│
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   │
│   └── components/
│       ├── Contact.tsx
│       ├── Message.tsx
│       └── HoverButton.tsx
│
├── assets/
│
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

### Component Responsibilities

**`src/app/index.tsx`**

The main application screen. It brings together the header, contacts, messaging categories, search section, conversation list, and floating action button.

**`src/app/_layout.tsx`**

Defines the application's root layout using Expo Router and configures the screen presentation and status bar.

**`src/components/Contact.tsx`**

A reusable component responsible for displaying an individual contact, including their profile image, name, and online status.

**`src/components/Message.tsx`**

A reusable conversation component responsible for displaying a contact's information, message preview, timestamp, and notification status.

**`src/components/HoverButton.tsx`**

A reusable interactive wrapper built with React Native's `Pressable`. It manages hover state and applies different styles when an element is hovered over.

## 🧩 Development Approach

The project was developed using a component-based approach.

Instead of placing the entire interface inside one large component, the interface was divided into smaller reusable components.

For example, the `Contact` component can display different contacts by receiving different properties, while the `Message` component can display different conversations using the same structure.

This approach helps to:

- Reduce code duplication.
- Improve code readability.
- Make components easier to maintain.
- Keep the application organised.
- Make future improvements easier.

### Styling Approach

The application uses React Native's `StyleSheet.create()` to manage styling.

Styles are kept close to the components they belong to, making it easier to understand how each section is designed.

The design uses:

- Flexbox for layout organisation.
- Rounded corners for modern UI elements.
- Consistent spacing and padding.
- Profile images and status indicators.
- A consistent purple and light-coloured theme.
- ScrollViews for displaying content that exceeds the available screen space.

### Responsive Layout

The interface uses flexible React Native layouts to adapt to different screen sizes.

A maximum content width is applied to keep the messaging interface organised on wider screens, while flexible containers allow the layout to use available space on smaller screens.

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)
- [Expo Go](https://expo.dev/go/) if you want to test on a physical mobile device.

### 1. Clone the Repository

Open your terminal or command prompt and run:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the Project Folder

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Expo Vector Icons

If the icon package is not already installed, run:

```bash
npx expo install @expo/vector-icons
```

### 5. Start the Development Server

```bash
npx expo start -c
```

The `-c` option clears the Expo cache before starting the development server.

### 6. Run the Application

After Expo starts, you can choose how to view the application:

**Run in a web browser**

Press:

```text
w
```

**Run on a physical mobile device**

1. Install Expo Go on your phone.
2. Connect your phone and development computer to the same network.
3. Scan the QR code displayed in the terminal using Expo Go.

## 🧪 Testing

The application can be tested by checking the following:

- The main messaging interface loads correctly.
- The contacts section scrolls horizontally.
- The messages section scrolls vertically.
- Contact information displays correctly.
- Message previews and timestamps are visible.
- Unread message indicators appear.
- Hover effects work in supported web environments.
- The interface adjusts to different screen sizes.

## 🚧 Current Limitations

This project focuses on UI development and does not include functional messaging services.

The following features are visual representations only:

- Searching for contacts or messages.
- Sending and receiving messages.
- Opening conversations.
- Creating group chats.
- User authentication.
- Online status updates from a server.
- Push notifications.
- Backend or database integration.

These features could be introduced in a future version if the project is extended into a fully functional messaging application.

## 🔮 Possible Future Improvements

If the project is expanded beyond the UI challenge, possible improvements include:

- Implementing functional search.
- Adding individual conversation screens.
- Integrating a backend API.
- Implementing user authentication.
- Supporting real-time messaging.
- Adding message notifications.
- Allowing users to create group conversations.
- Adding profile management.

## 📚 What I Learned

Through this challenge, I had the opportunity to practise and improve my understanding of:

- Building interfaces with React Native and TypeScript.
- Breaking down a design into reusable components.
- Passing data to components through props.
- Managing component state with React hooks.
- Styling interfaces using `StyleSheet`.
- Working with horizontal and vertical `ScrollView` components.
- Using `Pressable` to create interactive UI elements.
- Applying hover effects for web-based interactions.
- Organising a React Native project using Expo Router.

## 👨‍💻 Author

**Scelo Mike Phoswa**

Junior Full-Stack Developer | IT Technician | Systems Development

GitHub: [@Qhathizwe](https://github.com/Qhathizwe)

---

## 📄 Project Note

This application was created for educational purposes as part of an mLab UI challenge. It demonstrates frontend UI development using React Native, Expo, and TypeScript. It is not intended to function as a complete messaging platform.
