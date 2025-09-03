# Course Request Application - Project Documentation

## Overview

This is a course request management application that allows customers to:
1. Create course requests
2. Vote for courses they're interested in

## Technologies Used

- Tailwind CSS v4.0.0
- Angular v20.2.1
- DaisyUI v5
- Supabase

## Project Structure

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

### Structure Rules

- All shared resources will be inside the `shared` folder
- All core resources will be inside the `core` folder
- All features (pages) will be inside the `features` folder

### Dependency Constraints

- Features can depend on shared resources and core
- Shared resources can depend on core resources
- Core resources cannot depend on shared resources or features

## Color Scheme

- Background color: #fff
- Accent color: #6657eb

## Page Structure

### Header Section
- Navigation bar with title "Cursos da Code"
- Sign-in button on the right side

### Main Section
- List of course requests inside white cards with box-shadow
- Each course request card contains:
  - Title
  - Description
  - Number of votes
  - Author
  - Date
  - Status
  - Vote button

## Current Implementation Status

✅ Basic structure created
✅ Home page with header and course request cards implemented
✅ Color scheme applied
✅ Correct project structure following guidelines
✅ Dependencies properly organized