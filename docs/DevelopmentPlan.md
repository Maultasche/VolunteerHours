# Volunteer Hours Development Plan

This is the development plan for the Volunteer Hours application. We're starting off extremely small and simple and building it up from there.

* Create functionality list [Done]
* Visualize components and layout [Done]
* Create initial file layout [Done]
* Implement webpack and babel [Done]
* Copy static files to the dist directory with webpack [Done]
* Implement static prototype with a very basic table with minimal styling [Done]
* Implement static prototype with a basic table in edit mode with minimal styling [Done]
* Implement static prototype with a basic table in add mode with minimal styling [Done]
* Implement screen containing a display-only basic table with minimal styling and hardcoded JSON data on the page [Done]
* Modify screen with display-only table to allow edits [Done]
* Modify screen with editable table to allow adds [Done]
* Implement client-side validation
* Implement hours grid with generic grid component
* Implement screen with flex box styling
* Implement static prototype with Bootstrap
* Implement screen with Bootstrap
* Implement tests for client-side code
* Set up node server that serves the page 
* Modify the node server to store JSON data in memory and return JSON from an API endpoint
* Modify the page to pull data from an API endpoint and display it
* Modify the server to offer an API endpoint that saves all the data
* Modify the page to save all data via an API endpoint
* Modify the node server be able to add, update, and delete data via API endpoints
* Modify the page to be able to call the API endpoints instead of 
* Implement server-side validation
* Modify the node server to store school year data with a concept of the current school year
* Modify the hard-coded JSON data on the server to have different data per school year
* Modify the page to switch between available school years and load the correct data for that school year
* Modify the page to fetch and store its data in a MongoDB database
* Modify the app to become user-aware, where each user has different data
* Modify the app to have a home page with login functionality
* Display a page for a volunteer user to add volunteer hours
* Display a page showing the current status of the documents necessary for volunteering in the class or on field trips
* Display a page for an admin user to summarize the current volunteer hours
* Implement a relationship between students and volunteers, with sibling relationships (which modifies the required hours),
and volunteer-child relationships so that we can determine we can figure out which students have enough volunteer hours associated with them. This could get complicated if the family relationships are complicated, but we should make it as simple as possible. (Can't a volunteer put in hours for any student?)
* Only allow student hours for students on their approved list. (Perhaps list should be easily modified, since a volunteer should be free to volunteer for any student) (Is it a problem if a volunteer can see the names of all the students at the school?)
* Display on the admin screen who has enough hours and who still needs hours
* Allow receipts to be uploaded with dollar value (which is automatically converted to hours)
* Create admin page to allow receipts to be approved (possibly modifying the applicable amount, which changes the hours). Approved receipts can no longer be modified by the volunteer.
* Create admin landing page to allow them to access the functionality available to them
* Apply GraphQL to the API layer