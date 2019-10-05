# Project Tracker

A basic project tracking app for sorting, statusing, organizing and recording tasks associated with different projects. This is a means to keep them organized.

**Concept**

- Card: a card is a set of tasks or todos each with it's own tags, comments, due dates, attachments, etc.
  - Each Card contains:
    - Tasks
    - Comments
    - Due Dates
    - Attachments
- TaskLists: a task list is just a list of tasks that's stored within a Card
- Alerts/Notifications
  - Alerts/Notifications are tracked by Cards with pending/incomplete tasks

## Views

Top-left nav should provide access to the "ProjectsPage" where you can switch between projects easily.

## Features

- Includes "Project Buckets"
  - Which allows creating sets of tasks and assigning them a "Bucket"
- A "Bucket" includes a set of constraints, tasks, notes, comments etc.
- Add "Due Dates"
  - Include the `DatePicker` component that allows date selection for completion.
- Include Emojis as list items for adding details

## Component Hierarchy

- Project: is a collection of "Cards"
- Card: is one or more lists
- TaskList: is a collection of one or more "Tasks"
- Task: is a description of an action
- Comment: is an addition property added to a "Card", "Task", "TaskList" or "Project"

Project > Card > Card Task List > Card List Task

```
                        Project
                           |
                        /     \
                    Card       Card
                   /               \
                  |                 |
        CardTaskList                CardTaskList
       |  |  |  |  |                |  |  |  |  |
       |  |  |  |  |                |  |  |  |  |
        \         /                 \          /
         \       /                   \        /
          \     /                     \      /
           \   /                       \    /
           -----                       ------
           Tasks                        Tasks

```
