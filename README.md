<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/altrawan/telegram-app">
    <img src="https://lh3.googleusercontent.com/d/1VmImOVcKX-U-8k8jd3Ha70u8_hMJOEiy" alt="Logo" width="150px">
  </a>

  <h3 align="center">Telegram Chatting</h3>

  <p align="center">
    Send your Message to the World🌎.
    <br />
    <a href="#table-of-contents"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://bit.ly/telegram-app">View Demo</a>
    ·
    <a href="https://github.com/altrawan/telegram-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/altrawan/telegram-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup-env-example">Setup .env example</a></li>
      </ul>
    </li>
    <li><a href="#screenshoots">Screenshots</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#related-project">Related Project</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

**Telegram Chatting** is a web site-based two-way real-time chat communication application. Has features including two-way private messaging between users, searching user lists, viewing profiles between users, and updating user data.

### Built With

This app was built with some technologies below:

- [SCSS](https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=id)
- [Javascript](https://www.javascript.com/)
- [React](https://vuejs.org/v2)
- [Axios](https://axios-http.com/)
- [Socket.io](https://socket.io/)
- [React Redux](https://react-redux.js.org/introduction/getting-started)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Before going to the installation stage there are some software that must be installed first.

- [NodeJs](https://nodejs.org/en/download/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

If you want to run this project locally, I recommend you to configure the [back-end](https://github.com/altrawan/realtime-chat-api) first before configuring this repo front-end.

- Clone the repo

```
git clone https://github.com/altrawan/telegram-app.git
```

- Go To Folder Repo

```
cd telegram-app
```

- Install Module

```
npm install
```

- <a href="#setup-env">Setup .env</a>
- Type ` npm run dev` To Start Website
- Type ` npm run start` To Start Production

<p align="right">(<a href="#top">back to top</a>)</p>

### Setup .env example

Create .env file in your root project folder.

```
REACT_APP_APP_NAME = [APP_NAME]
REACT_APP_NODE_ENV = [NODE_ENV]
REACT_APP_API_URL = [API_URL]
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Screenshoots

<p align="center" display=flex>
   
<table>
 
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1MdEwUYFSoeCMh9iwoPRNuXU3ObA0ZIJA" alt="Login Page" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/1zg2mNDwEu2onK5XfmqKA_GdKEmstUHQT" alt="Register Page" width=100%/></td>
  </tr>
   <tr>
    <td>Login Page</td>
    <td>Register Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1j-jdWYYGbj4FMbWo9ofhCQ-8v_E3C8dY" alt="Forgot Password Page" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/1ZmeU4Bdld4y_HvNzBam9HDZgsX1-iMXT" alt="Reset Password Page" width=100%/></td>
  </tr>
   <tr>
    <td>Forgot Password Page</td>
    <td>Reset Password Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1qtmZ9ryDcI--7q_7x9MAwBzxY70IRZlM" alt="Chat List" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/1s8XFAxc7zMz9CyVQLFWm9IH_-hDqcaUB" alt="Menu" width=100%/></td>
  </tr>
  <tr>
    <td>Chat List</td>
    <td>Menu</td>
  </tr>

  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1pPlyOCT3HRr1BDQsbVREZcZKCU6IsBtY" alt="Message" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/1X6BmEaR5ym4LgTV7jbS-CFzNoaJUQB-_" alt="Choice Emoji" width=100%/></td>
  </tr>
  <tr>
      <td>Message</td>
      <td>Choice Emoji</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1N__oOoEOspvL4wnnN7g5EuxmQbcCVTwi" alt="Profile" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/1j8jIphokzu-WJSgzxtWLA1nW8Ot-SLN9" alt="Contact Info" width=100%/></td>
  </tr>
  <tr>
    <td>Profile</td>
    <td>Contact Info</td>
  </tr>

</table>
      
</p>
<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## Related Project

:rocket: [`Backend Telegram Chatting`](https://github.com/altrawan/realtime-chat-api)

:rocket: [`Frontend Telegram Chatting`](https://github.com/altrawan/telegram-app)

:rocket: [`Web Service`](https://telegram-chatting.herokuapp.com/)

:rocket: [`Demo Telegram Chatting`](https://bit.ly/telegram-chatting)

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

My Email : muhammadalifputra8888@gmail.com

Project Link: [https://github.com/altrawan/telegram-app](https://github.com/altrawan/telegram-app)

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the [MIT](/LICENSE) License.

<p align="right">(<a href="#top">back to top</a>)</p>
