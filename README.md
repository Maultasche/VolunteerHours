# Volunteer Hours - An application for tracking school volunteer hours

Volunteer Hours is a web application for tracking school volunteer hours, and it is modelled after the parent volunteer policy at my childrens' school. 

The primary purpose of this web application is applying the React.js and Node.js knowledge I've been learning recently. It was not specifically requested by a school, but I'm certainly willing to polish it up for production if anyone is interested. 

The current website for tracking volunteer hours is outdated and not very user-friendly. It would have been a decent website around the year 2000, but I thought that I could certainly do better. So I chose tracking volunteer hours as the business domain for this application. 

I'm going to be starting off with an extremely simple page and then building the application up from there. The goal is to end up with a functional, usable application that demonstrates my web development skills and will be able to serve as a production application with a bit of polishing. 

In my experience, it's best to start off with something simple and basic allowing me to show off a working product sooner. I can then improve upon it later on in further iterations, ideally with feedback that helps guide those further iterations. If I'm fortunate with this project, I may get some actual feedback somewhere along the way that will help me with subsequent iterations.

## Current Status (as of August 30th, 2017)

The application is still in its early stages. I've started out with the page that allows parents to view and record their hours. The application currently has no concept of users, so there's one set of data for everyone.

The [component hierarchy](docs/AppComponentTree.md) has been planned out, documented, and revised repeatedly. There's now a simple, functioning page containing a grid with some populated rows. The add, edit, and remove functionality have been implemented. Validation still needs to be implemented and there aren't yet any automated tests.

The volunteer hours grid is currently an HTML table with minimal styling. Since I don't have strong artistic skills, I plan to eventually acquire a theme (probably a Bootstrap theme), customize the colors to match those of my childrens' school, and apply it to the page to make it prettier. Possibly a React bootstrap component library will prove useful.

The client code has an API layer, but so far I haven't built the API. Instead, the API layer interacts with a module containing an initial set of hardcoded data. The plan is to implement an API using Node.js and express that the client code can connect to.

See the [development plan]((docs/DevelopmentPlan.md) for a list of what I've done so far and what I intend on doing.

## Development Documents

The following documents are where I write down things that will help me (and anyone looking at this project) understand what I'm doing and planning as development is under way.

* [Domain Rules](docs/DomainRules.md) - These are the school policies and rules regarding parent volunteer hours. This is what my application is built around.
* [Development Plan](docs/DevelopmentPlan.md) - This is the current development plan where I've written down what I want to implement in order of implementation. In other words, it's the product backlog, and it will likely change significantly as development is under way. I also intend to add these as issues in Github.
* [Development Notes](docs/DevelopmentNotes.md) - This is where I make notes for myself (or anyone else who's interested) while I'm developing.
* [Application Component Hierarchy](docs/AppComponentTree.md) - This the current React application component hierarchy
* [Static Prototypes](docs/StaticPrototypes.md) - The collection of static prototypes I've created. I typically create an HTML/CSS static prototype and then transform that into dynamic React components.

## Building and running

To build and run the application, follow the following steps. This assumes you've already cloned the repository.

1. Make sure yarn is installed. Running "npm install -g yarn" is one way to do it or you can look a the [yarn website](https://yarnpkg.com/en/) for other instructions.
2. Install the dependencies by running "yarn install"
3. Build the application by running "yarn run build"
4. You can view the application in the browser by starting up the webpack dev server. Run running "yarn run dev-server" to start up the dev server.  Running the dev server will also cause a build to happen.

When using the webpack dev server, you can view the application by going to "http://localhost:8080/". The webpack dev server will watch for changes and the browser will automatically reload when the changes are built.