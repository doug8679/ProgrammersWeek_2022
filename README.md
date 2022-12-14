# Micro Front End Talk Code Repository

This repo holds the code and progressions from a monolithic React application to a MFE application
as progressed in the Programmer's Week 2022 Talk by Dan Hoffman and myself.

Source repository for original content: https://github.com/neuland/micro-frontends

Refactored the original demo site to use React in all stages.

## Staged Approach

This repository demonstrates a gradual, staged approach in refactoring a single, monolithic web application
into a set of micro frontend components that can be incorporated into a host application.  The branches
available here demonstrate the various stages, below is a list of those brnaches and what they represent:

|Branch Name|Description|
|-----------|-----------|
|dev|The always-current version of the site as the progressions have been applied.  `dev` will show the final product at the most recent stage of refactor.|
|feature/monolithic-react-app|An initial application.  Created in haste, using a single component to hold the entire functionality of the site.|
|feature/componetize-monolithic-app|A refactoring of the application into individual components representing the functionality required for various aspects of the site.|
|feature/introducing-team-inspire|Breaks the recommendations component out as a separate micro-frontend.  This will be the first use of Modue Federation to provide a remote component to the host applicaiton.|
|feature/introducing-team-checkout|Breaks the basket and buy button components out as separate micro-frontend remote objects.  A new remote module using Module Federation.|