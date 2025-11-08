# Overview

Create a base structure for a an app to manage projects roadmap. This app will be used for customers to follow the progress of our projects.

# Colors

The background color is #fff.
The accent color is #6657eb.

# Page Structure

In the header section, we have a navigation bar with title a title "Code Roadmap" centralized.

In the main section, we have a list of projects that'll be inside a white card with box-shadow. Each project card will have the following information:
- Title
- Description
- Status
  
# Technologies

For this project, we'll be using the following technologies:
- Tailwind CSS v4.0.0
- Angular v20.2.1
- DaisyUI v5

# Project Structure

The project structure will be the following:

```
├── src
│   ├── app
│   │   ├── features // put pages here
│   │   │   ├── home // home page folder
│   │   │   |   ├── routes.ts // file with routes
│   │   │   |   ├── pages // pages folder
│   │   │   |   ├── components // shared components folder from home 
```

Here's the rules: 

- All shared resources will be inside the `shared` folder
- All core resources will be inside the `core` folder
- All features (pages) will be inside the `features` folder

Constraints:
- Feature can depend on shared resources and core.
- Shared resources can depend on core resources.
- Core resources can not depend on shared resources or features.

For project's card, create a component to keep its code.