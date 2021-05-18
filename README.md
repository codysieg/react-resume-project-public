# Demo of the Application

![Image of The Portfolio Landing Page](./sharex-portfolio.png)

You can view a live demonstration of the React Portfolio Website [here](https://react-resume-project-public.herokuapp.com/).

## Installation Instructions

1. Ensure that you have the latest version of Node.js installed, that can be downloded [here](https://nodejs.org/en/download/).

2. Fork this repo and install the dependencies.
Once you have forked this repository and have Node.js installed, you can either type ```npm i```, or ```yarn install``` depending on your preference of dependency packages. This project was built with a few great NPM modules, see below.
- React Google-Recaptcha, this is not necessary if you don't want to set up the Contact Form. But if you would like to learn more, their documentation can be found [here](https://www.npmjs.com/package/react-google-recaptcha)
- React Router Hash Link, this is the module I used for the smooth transitions between the different areas of the portfolio. Their documentation can be found [here](https://www.npmjs.com/package/react-router-hash-link)

3. Change the configurations of the portfolio manifest JSON file to tell people who you are! I have tried to push all the content responsible for being displayed on the portfolio to be managed by a single JSON file that can be configurable by the user. All of them are pretty self-explanatory and control obvious areas of the page, but there are a few that I want to explicitly call out for their functionality.
- ```display_email_form```: This value can be true/false, if true, it will display a contact email form under the "Contact" section of the portfolio, if it's false, it will fall back to just a simple mailto anchor tag.
- ```social_icon_links```: At this time, if you add or remove any of the ones given to you, you will have to change the code under `./src/components/UI/SocialItems/` as these Components are hard-coded at this time, the configuration simply handles the href.
- ```resume.work```: You may have noticed that this is a multi-dimensional array, this is by design. As some people at companies receive promotions or move to different positions, I wanted to change the styling of the UI a bit to support these use-cases.

4. If you are setting up the email form portion of the portfolio instead of the basic mailto href (I recommend you do!), then I encourage you to check out the simply web server I built out that supports this [here](https://github.com/codysieg/react-resume-project-email-server-public). Note: You will have to find a hosting solution for this if you go this route - I am currently using [Heroku](https://www.heroku.com/), or you can find a third party solution that offers email services that you can integrate into the Contact component.

5. Replace the images, favicon, and title
- You will need to replace both the profile image as well as the main background image.
- If you would like to change the favicon, you can replace it under /public.
- If you would like to change the title, you can do so under /public/index.html.

6. Make it your own, I realize that you won't love everything that I've chosen in this project. So feel free to add, remove, or edit anything you would like. I built this entire project out with [Material-UI](https://material-ui.com/), check out their documentation.

7. Once you've made all your edits, if you haven't already at this stage, run ```npm start``` or ```yarn start``` to see your website. If you are happy with everything, start looking at buying a domain name and hosting your new website! Feel free to email me at codysiegmann09@gmail.com if you have any issues at all with deploying your application.
