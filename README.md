# flexy-ui
flexy ui/frontend technical task

# Flexy - Loading component

### Initial instructions
We're looking for a visually pleasing UI component with some animation or something to draw the attention of the user. This would feature front and centre to our employers on a transition screen between the Create Job journey on our employer dashboard and the Job Details screen, and would also be shown in a less primary fashion inline on the Job Details screen.

We're looking for just a react component here that renders in a self-contained mini project. There is no requirement to integrate it into a wider screen or any other code.

The component would feature on a transition screen for visual effect to convey to the employer the idea that some work is happening in the background to fill the vacancy posted (as opposed to indicating loading or any other actual background process). The idea is to represent the job being 'beamed out' to Flexy workers as the employer transitions from creating the job to viewing the job. 

So you have an idea of what we're looking for, [this](https://share.getcloudapp.com/7KuyWD4v) is our static and un-interesting version of what we're describing. This currently only showed inline on the job details screen, and as you can see it's not suitable to feature front and centre on a transition screen.

This task should give us a chance to see how you interpret the specification, get a feel for your UI/UX capabilities and validate your HTML, CSS and React skills. Please spend a maximum of 3 hours on this task, and when you're done please commit your code to a git repository and share it with us (preferably a local repo so that it's not published online). Structure your commits as you would on a commercial project with several other team members.

## Getting Started

1. Clone this repository 
2. At a command prompt, navigate to the project's directory (flexy-ui).
3. Run `$ npm install` or `$ yarn`
4. Run `$ npm start` or `$ yarn start`
5. Click `Loader` or `Inline` buttons to imitate use cases with default settings
6. Click on Modal background to exit use-case imitation

## Limitations

The solution provided solely focuses on `React`, `HTML`, `CSS`.

Based on the initial requirements, it is assumed there is no need for testing, UI sketching with `Sketch`/`Figma`, deployement & hosting, no need to use specific tools (e.g. Redux, Typescript) or patterns (Container/Representational components).

Provided solution purely focuses on re-creating Loading component that is extended with controlling (Controls.js) flexibility to follow React general ecosystem & reusability pattern. 

The proposed UI component is set to default parameters. Functionality to control paramteres was added to allow testing of React skills. Adding max amount of bubbles (100) is likely to be suboptimal in terms of speed/UI. 

## Justifying the solution

While the UI component is required to be used in both `transition screen` and `employer dashboard` it is important to assess the reusability and potential effect on UX. 

When testing the current [system](https://employer.flexy.com/), it was noticed that `spinner` was quite fast (approx. 0.4 sec), 
thus by creating nice, complex animation (e.g. document that gets folded into paper plane and sent to Flexy 'logo' to visualise 'we recieved it' operation) will break the UX (getting from A to B as fast as possible).
Complex storytelling animation will require users to wait & watch it rather than get to the dashboard screen asap. 

Thus, the most feasible solution is to provide an alternative to `spinner`, potentially with better company's branding. 

#### UI explanation
After assessing company's branding, logo and color scheme, several conclusions can be made: 
* Primary colors are green (`#4FADB5`) and orange (`#FF7D45`)
* The logo uses U-shaped 'connector' or smile (positive branding like Amazon)
* 2 Bubbles can be visualised as `Employer` and `Employee`, while Flexy (U shape) connects them

The proposed animation/loader (Bubbles moving towards Flexy logo) intends to convey one of the following:
* Job's data (nodes) submitted by user gets collated at Flexy for further analysis 
* Employers (e.g. Orange bubbles) or Employees (e.g. Green bubbles) go to Flexy to respond to the created job

#### Improvements
Provided solution is by no means the best version and several improvements could be made.

For example: 
* Trigger `indefinite` animation in inline component to allow bubbles to get collected only once.
* Animation could be linked to background process (e.g. 50% - bubles still comming, 100% - no more bubbles are appearing) to visualise finite progress. 
* Re-configure animation to make bubbles integrate into logo more natively (better to use [lottie](https://lottiefiles.com/), rather than `CSS`)

#### Extras

Proposed (potentially improved solution) can be used in the [mobile app](https://ibb.co/Yjf9009) upon launching it (e.g. Splash Screen).

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Styled-components](https://styled-components.com/docs/basics) - Styling and UI. 
* [Bulma](https://bulma.io/) - CSS Framework + extensions for uncommon components (e.g. Slider)



