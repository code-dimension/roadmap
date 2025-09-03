# Overview

Create a base structure for a an app to manage course requests from my customers. This app will be used to create a course requests and 
also able customer voting for the course request that they are interested.

# Colors

The background color is #fff.
The accent color is #6657eb.

# Page Structure

In the header section, we have a navigation bar with title a title "Cursos da Code" and a button on the right side to sign in the user (that's the my customer).

In the main section, we have a list of course requests that'll be inside a white card with box-shadow. Each course request card will have the following information:
- Title
- Description
- Number of votes
- Author
- Date
- Status
- Button to vote for the course request
  
# Technologies

For this project, we'll be using the following technologies:
- Tailwind CSS v4.0.0
- Angular v20.2.1
- DaisyUI v5
- Supabase

# Project Structure

The project structure will be the following:

```
.
├── src
│   ├── app
│   │   ├── core // core resources
│   │   │   ├── <name-of-feature> // feature folder containing resources related to the feature (services, pipes) 
│   │   ├── features // put pages here
│   │   │   ├── home // home page folder
│   │   │   |   ├── routes.ts // file with routes
│   │   │   |   ├── pages // pages folder
│   │   │   |   ├── components // shared components folder from home 
│   │   ├── shared // shared resources should be inside this folder
```

Here's the rules: 

- All shared resources will be inside the `shared` folder
- All core resources will be inside the `core` folder
- All features (pages) will be inside the `features` folder

Constraints:
- Feature can depend on shared resources and core.
- Shared resources can depend on core resources.
- Core resources can not depend on shared resources or features.

Crate only folders that are needed.