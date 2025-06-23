const e=[{category:"",path:"/docs/get-started/quickstart",title:"Developer quickstart",description:`Developer quickstart
<Subtitle>
    Learn how to get started with LiveSession.
</Subtitle>
LiveSession is a powerful tool that helps you understand how users interact with your product.
This guide will help you get started with LiveSession and start capturing user interactions and analyzing them.
LiveSession is a powerful tool that helps you understand how users 
[interact](https://livesession.io/features)
interact
 with your product.
This guide will help you get started with LiveSession and start capturing user interactions and 
[analyzing](https://livesession.io/features)
analyzing
 them.`,content:`Developer quickstart
<Subtitle>
    Learn how to get started with LiveSession.
</Subtitle>
LiveSession is a powerful tool that helps you understand how users interact with your product.
This guide will help you get started with LiveSession and start capturing user interactions and analyzing them.
LiveSession is a powerful tool that helps you understand how users 
[interact](https://livesession.io/features)
interact
 with your product.
This guide will help you get started with LiveSession and start capturing user interactions and 
[analyzing](https://livesession.io/features)
analyzing
 them.`},{category:"",path:"/docs/get-started/quickstart#overview",title:"Overview",description:`Overview
LiveSession collects data about user interactions, such as clicks, scrolls or touches in different platforms like web
or mobile. Each platform can be accessed in different environment like specific web framework or via servier using a raw protocol like http.
That's why we provide a variety of ways to integrate LiveSession into your product.
LiveSession collects data about user interactions, such as clicks, scrolls or touches in different platforms like 
[web](https://en.wikipedia.org/wiki/Web_application)
web

or 
[mobile](https://en.wikipedia.org/wiki/Mobile_app)
mobile
. Each platform can be accessed in different environment like 
[specific web framework](https://en.wikipedia.org/wiki/Comparison_of_JavaScript-based_web_frameworks)
specific web framework
 or via servier using a raw protocol like 
[http](https://en.wikipedia.org/wiki/HTTP)
http
.
That's why we provide a variety of ways to integrate LiveSession into your product.
Browser SDKAPIInstall code snippetThis is the simplest way to get LiveSession up and running on browser environment. It only takes a few
minutes.First, install LiveSession browser SDK via package manager:npm install @livesession/browserAfter, copy the snippet below and replace YOUR_TRACK_ID with your project's values.Or, if you want to use window API then add snippet within the <head> tags at the base of your product - ideally just before the closing </head> tag.
This ensures LiveSession loads on any page users visit.
Full pre-filled snippet is available in your website settings.Identify usersTo identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.
Learn more about identify API here.User paramsYou can also set user properties to track additional information about your users.Learn more about user params API here.Send eventsMost of events are autocaptured by LiveSession, but you can also send custom
events.More details about events API can be found here.Choose a web frameworkLiveSession provides SDKs for popular frameworks and languages to make it easier to integrate into your
product
like React, Vue or Angular.
More information about how to install and use the web frameworks can be found here.Create and export a Personal Access Token (PAT)Create a PAT in the dashboard here, which you'll use to securely access the
API.
Store the key in a safe location, like a .zshrc file or another text file on
your computer.
Once you've generated a PAT, export it as an environment variable in your
terminal.mac OS / LinuxWindowsexport LIVESESSION_PAT="YOUR_PAT_HERE"setx LIVESESSION_PAT="YOUR_PAT_HERE"Making your first API RequestWith your LiveSession Personal Access Token exported as an environment
variable, you're ready to make your first API request.
You can either use the API directly with the HTTP client of your choice, or use one of our official SDKs as shown below.JavaScriptcurlTo use the LiveSession API in server-side JavaScript environments
like Node.js, Deno, or Bun, you can use the official LiveSession SDK
for TypeScript and JavaScript.
Get started by installing the SDK using npm or your preferred package manager:Once installed, copy one of the following examples into it:Get sessionsGet websitesimport livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);On Unix-based systems, you can test out the LiveSession API using curl.
The following commands assume that you have exported the LIVESESSION_PAT system environment
variable as shown above.Get sessionsGet websitescurl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
Browser SDK
Browser SDK
API
API
Install code snippetThis is the simplest way to get LiveSession up and running on browser environment. It only takes a few
minutes.First, install LiveSession browser SDK via package manager:npm install @livesession/browserAfter, copy the snippet below and replace YOUR_TRACK_ID with your project's values.Or, if you want to use window API then add snippet within the <head> tags at the base of your product - ideally just before the closing </head> tag.
This ensures LiveSession loads on any page users visit.
Full pre-filled snippet is available in your website settings.Identify usersTo identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.
Learn more about identify API here.User paramsYou can also set user properties to track additional information about your users.Learn more about user params API here.Send eventsMost of events are autocaptured by LiveSession, but you can also send custom
events.More details about events API can be found here.Choose a web frameworkLiveSession provides SDKs for popular frameworks and languages to make it easier to integrate into your
product
like React, Vue or Angular.
More information about how to install and use the web frameworks can be found here.`,content:`Overview
LiveSession collects data about user interactions, such as clicks, scrolls or touches in different platforms like web
or mobile. Each platform can be accessed in different environment like specific web framework or via servier using a raw protocol like http.
That's why we provide a variety of ways to integrate LiveSession into your product.
LiveSession collects data about user interactions, such as clicks, scrolls or touches in different platforms like 
[web](https://en.wikipedia.org/wiki/Web_application)
web

or 
[mobile](https://en.wikipedia.org/wiki/Mobile_app)
mobile
. Each platform can be accessed in different environment like 
[specific web framework](https://en.wikipedia.org/wiki/Comparison_of_JavaScript-based_web_frameworks)
specific web framework
 or via servier using a raw protocol like 
[http](https://en.wikipedia.org/wiki/HTTP)
http
.
That's why we provide a variety of ways to integrate LiveSession into your product.
Browser SDKAPIInstall code snippetThis is the simplest way to get LiveSession up and running on browser environment. It only takes a few
minutes.First, install LiveSession browser SDK via package manager:npm install @livesession/browserAfter, copy the snippet below and replace YOUR_TRACK_ID with your project's values.Or, if you want to use window API then add snippet within the <head> tags at the base of your product - ideally just before the closing </head> tag.
This ensures LiveSession loads on any page users visit.
Full pre-filled snippet is available in your website settings.Identify usersTo identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.
Learn more about identify API here.User paramsYou can also set user properties to track additional information about your users.Learn more about user params API here.Send eventsMost of events are autocaptured by LiveSession, but you can also send custom
events.More details about events API can be found here.Choose a web frameworkLiveSession provides SDKs for popular frameworks and languages to make it easier to integrate into your
product
like React, Vue or Angular.
More information about how to install and use the web frameworks can be found here.Create and export a Personal Access Token (PAT)Create a PAT in the dashboard here, which you'll use to securely access the
API.
Store the key in a safe location, like a .zshrc file or another text file on
your computer.
Once you've generated a PAT, export it as an environment variable in your
terminal.mac OS / LinuxWindowsexport LIVESESSION_PAT="YOUR_PAT_HERE"setx LIVESESSION_PAT="YOUR_PAT_HERE"Making your first API RequestWith your LiveSession Personal Access Token exported as an environment
variable, you're ready to make your first API request.
You can either use the API directly with the HTTP client of your choice, or use one of our official SDKs as shown below.JavaScriptcurlTo use the LiveSession API in server-side JavaScript environments
like Node.js, Deno, or Bun, you can use the official LiveSession SDK
for TypeScript and JavaScript.
Get started by installing the SDK using npm or your preferred package manager:Once installed, copy one of the following examples into it:Get sessionsGet websitesimport livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);On Unix-based systems, you can test out the LiveSession API using curl.
The following commands assume that you have exported the LIVESESSION_PAT system environment
variable as shown above.Get sessionsGet websitescurl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
Browser SDK
Browser SDK
API
API
Install code snippetThis is the simplest way to get LiveSession up and running on browser environment. It only takes a few
minutes.First, install LiveSession browser SDK via package manager:npm install @livesession/browserAfter, copy the snippet below and replace YOUR_TRACK_ID with your project's values.Or, if you want to use window API then add snippet within the <head> tags at the base of your product - ideally just before the closing </head> tag.
This ensures LiveSession loads on any page users visit.
Full pre-filled snippet is available in your website settings.Identify usersTo identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.
Learn more about identify API here.User paramsYou can also set user properties to track additional information about your users.Learn more about user params API here.Send eventsMost of events are autocaptured by LiveSession, but you can also send custom
events.More details about events API can be found here.Choose a web frameworkLiveSession provides SDKs for popular frameworks and languages to make it easier to integrate into your
product
like React, Vue or Angular.
More information about how to install and use the web frameworks can be found here.`},{category:"",path:"/docs/get-started/quickstart#install-code-snippet",title:"Install code snippet",description:`Install code snippet
This is the simplest way to get LiveSession up and running on browser environment. It only takes a few
minutes.
This is the simplest way to get LiveSession up and running on browser environment. It only takes a few
minutes.
First, install LiveSession browser SDK via package manager:
First, install 
[LiveSession browser SDK](https://github.com/livesession/livesession-browser)
LiveSession browser SDK
 via package manager:
npm install @livesession/browser
After, copy the snippet below and replace YOUR_TRACK_ID with your project's values.
After, copy the snippet below and replace 
YOUR_TRACK_ID
 with your project's values.
Or, if you want to use window API then add snippet within the <head> tags at the base of your product - ideally just before the closing </head> tag.
This ensures LiveSession loads on any page users visit.
Full pre-filled snippet is available in your website settings.
Or, if you want to use 
window API
 then add snippet within the 
<head>
 tags at the base of your product - ideally just before the closing 
</head>
 tag.
This ensures LiveSession loads on any page users visit.
Full pre-filled snippet is available in 
[your website settings](https://app.livesession.io/app/settings/websites)
your website settings
.`,content:`Install code snippet
This is the simplest way to get LiveSession up and running on browser environment. It only takes a few
minutes.
This is the simplest way to get LiveSession up and running on browser environment. It only takes a few
minutes.
First, install LiveSession browser SDK via package manager:
First, install 
[LiveSession browser SDK](https://github.com/livesession/livesession-browser)
LiveSession browser SDK
 via package manager:
npm install @livesession/browser
After, copy the snippet below and replace YOUR_TRACK_ID with your project's values.
After, copy the snippet below and replace 
YOUR_TRACK_ID
 with your project's values.
Or, if you want to use window API then add snippet within the <head> tags at the base of your product - ideally just before the closing </head> tag.
This ensures LiveSession loads on any page users visit.
Full pre-filled snippet is available in your website settings.
Or, if you want to use 
window API
 then add snippet within the 
<head>
 tags at the base of your product - ideally just before the closing 
</head>
 tag.
This ensures LiveSession loads on any page users visit.
Full pre-filled snippet is available in 
[your website settings](https://app.livesession.io/app/settings/websites)
your website settings
.`},{category:"",path:"/docs/get-started/quickstart#identify-users",title:"Identify users",description:`Identify users
To identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.
Learn more about identify API here.
To identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.
Learn more about identify API 
[here](/docs/api/browser/methods)
here
.`,content:`Identify users
To identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.
Learn more about identify API here.
To identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.
Learn more about identify API 
[here](/docs/api/browser/methods)
here
.`},{category:"",path:"/docs/get-started/quickstart#user-params",title:"User params",description:`User params
You can also set user properties to track additional information about your users.
You can also set user properties to track additional information about your users.
Learn more about user params API here.
Learn more about user params API 
[here](/docs/api/browser/methods)
here
.`,content:`User params
You can also set user properties to track additional information about your users.
You can also set user properties to track additional information about your users.
Learn more about user params API here.
Learn more about user params API 
[here](/docs/api/browser/methods)
here
.`},{category:"",path:"/docs/get-started/quickstart#send-events",title:"Send events",description:`Send events
Most of events are autocaptured by LiveSession, but you can also send custom
events.
Most of events are autocaptured by LiveSession, but you can also send custom
events.
More details about events API can be found here.
More details about events API can be found 
[here](/docs/api/browser/methods)
here
.`,content:`Send events
Most of events are autocaptured by LiveSession, but you can also send custom
events.
Most of events are autocaptured by LiveSession, but you can also send custom
events.
More details about events API can be found here.
More details about events API can be found 
[here](/docs/api/browser/methods)
here
.`},{category:"",path:"/docs/get-started/quickstart#choose-a-web-framework",title:"Choose a web framework",description:`Choose a web framework
LiveSession provides SDKs for popular frameworks and languages to make it easier to integrate into your
product
like React, Vue or Angular.
More information about how to install and use the web frameworks can be found here.
LiveSession provides SDKs for popular frameworks and languages to make it easier to integrate into your
product
like 
[React](https://react.dev)
React
, 
[Vue](https://vuejs.org/)
Vue
 or 
[Angular](https://angular.dev/)
Angular
.
More information about how to install and use the web frameworks can be found 
[here](/docs/get-started/frameworks)
here
.
Create and export a Personal Access Token (PAT)Create a PAT in the dashboard here, which you'll use to securely access the
API.
Store the key in a safe location, like a .zshrc file or another text file on
your computer.
Once you've generated a PAT, export it as an environment variable in your
terminal.mac OS / LinuxWindowsexport LIVESESSION_PAT="YOUR_PAT_HERE"setx LIVESESSION_PAT="YOUR_PAT_HERE"Making your first API RequestWith your LiveSession Personal Access Token exported as an environment
variable, you're ready to make your first API request.
You can either use the API directly with the HTTP client of your choice, or use one of our official SDKs as shown below.JavaScriptcurlTo use the LiveSession API in server-side JavaScript environments
like Node.js, Deno, or Bun, you can use the official LiveSession SDK
for TypeScript and JavaScript.
Get started by installing the SDK using npm or your preferred package manager:Once installed, copy one of the following examples into it:Get sessionsGet websitesimport livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);On Unix-based systems, you can test out the LiveSession API using curl.
The following commands assume that you have exported the LIVESESSION_PAT system environment
variable as shown above.Get sessionsGet websitescurl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"`,content:`Choose a web framework
LiveSession provides SDKs for popular frameworks and languages to make it easier to integrate into your
product
like React, Vue or Angular.
More information about how to install and use the web frameworks can be found here.
LiveSession provides SDKs for popular frameworks and languages to make it easier to integrate into your
product
like 
[React](https://react.dev)
React
, 
[Vue](https://vuejs.org/)
Vue
 or 
[Angular](https://angular.dev/)
Angular
.
More information about how to install and use the web frameworks can be found 
[here](/docs/get-started/frameworks)
here
.
Create and export a Personal Access Token (PAT)Create a PAT in the dashboard here, which you'll use to securely access the
API.
Store the key in a safe location, like a .zshrc file or another text file on
your computer.
Once you've generated a PAT, export it as an environment variable in your
terminal.mac OS / LinuxWindowsexport LIVESESSION_PAT="YOUR_PAT_HERE"setx LIVESESSION_PAT="YOUR_PAT_HERE"Making your first API RequestWith your LiveSession Personal Access Token exported as an environment
variable, you're ready to make your first API request.
You can either use the API directly with the HTTP client of your choice, or use one of our official SDKs as shown below.JavaScriptcurlTo use the LiveSession API in server-side JavaScript environments
like Node.js, Deno, or Bun, you can use the official LiveSession SDK
for TypeScript and JavaScript.
Get started by installing the SDK using npm or your preferred package manager:Once installed, copy one of the following examples into it:Get sessionsGet websitesimport livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);On Unix-based systems, you can test out the LiveSession API using curl.
The following commands assume that you have exported the LIVESESSION_PAT system environment
variable as shown above.Get sessionsGet websitescurl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"`},{category:"",path:"/docs/get-started/quickstart#create-and-export-a-personal-access-token-pat",title:"Create and export a Personal Access Token (PAT)",description:`Create and export a Personal Access Token (PAT)
Create a PAT in the dashboard here, which you'll use to securely access the
API.
Store the key in a safe location, like a .zshrc file or another text file on
your computer.
Once you've generated a PAT, export it as an environment variable in your
terminal.
[Create a PAT in the dashboard here](https://app.livesession.io/app/settings/api?tab=api_tokens)
Create a PAT in the dashboard here
, which you'll use to securely access the
API.
Store the key in a safe location, like a 
.zshrc file
 or another text file on
your computer.
Once you've generated a PAT, export it as an 
[environment variable](https://en.wikipedia.org/wiki/Environment_variable)
environment variable
 in your
terminal.
mac OS / LinuxWindowsexport LIVESESSION_PAT="YOUR_PAT_HERE"setx LIVESESSION_PAT="YOUR_PAT_HERE"
mac OS / Linux
mac OS / Linux
Windows
Windows
export LIVESESSION_PAT="YOUR_PAT_HERE"
export LIVESESSION_PAT="YOUR_PAT_HERE"
setx LIVESESSION_PAT="YOUR_PAT_HERE"
setx LIVESESSION_PAT="YOUR_PAT_HERE"`,content:`Create and export a Personal Access Token (PAT)
Create a PAT in the dashboard here, which you'll use to securely access the
API.
Store the key in a safe location, like a .zshrc file or another text file on
your computer.
Once you've generated a PAT, export it as an environment variable in your
terminal.
[Create a PAT in the dashboard here](https://app.livesession.io/app/settings/api?tab=api_tokens)
Create a PAT in the dashboard here
, which you'll use to securely access the
API.
Store the key in a safe location, like a 
.zshrc file
 or another text file on
your computer.
Once you've generated a PAT, export it as an 
[environment variable](https://en.wikipedia.org/wiki/Environment_variable)
environment variable
 in your
terminal.
mac OS / LinuxWindowsexport LIVESESSION_PAT="YOUR_PAT_HERE"setx LIVESESSION_PAT="YOUR_PAT_HERE"
mac OS / Linux
mac OS / Linux
Windows
Windows
export LIVESESSION_PAT="YOUR_PAT_HERE"
export LIVESESSION_PAT="YOUR_PAT_HERE"
setx LIVESESSION_PAT="YOUR_PAT_HERE"
setx LIVESESSION_PAT="YOUR_PAT_HERE"`},{category:"",path:"/docs/get-started/quickstart#making-your-first-api-request",title:"Making your first API Request",description:`Making your first API Request
With your LiveSession Personal Access Token exported as an environment
variable, you're ready to make your first API request.
You can either use the API directly with the HTTP client of your choice, or use one of our official SDKs as shown below.
With your LiveSession Personal Access Token exported as an environment
variable, you're ready to make your first API request.
You can either use the API directly with the HTTP client of your choice, or use one of our official SDKs as shown below.
JavaScriptcurlTo use the LiveSession API in server-side JavaScript environments
like Node.js, Deno, or Bun, you can use the official LiveSession SDK
for TypeScript and JavaScript.
Get started by installing the SDK using npm or your preferred package manager:Once installed, copy one of the following examples into it:Get sessionsGet websitesimport livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);On Unix-based systems, you can test out the LiveSession API using curl.
The following commands assume that you have exported the LIVESESSION_PAT system environment
variable as shown above.Get sessionsGet websitescurl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
JavaScript
JavaScript
curl
curl
To use the LiveSession API in server-side JavaScript environments
like Node.js, Deno, or Bun, you can use the official LiveSession SDK
for TypeScript and JavaScript.
Get started by installing the SDK using npm or your preferred package manager:Once installed, copy one of the following examples into it:Get sessionsGet websitesimport livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);
To use the LiveSession API in server-side JavaScript environments
like Node.js, Deno, or Bun, you can use the official LiveSession SDK
for TypeScript and JavaScript.
Get started by installing the SDK using npm or your preferred package manager:
To use the LiveSession API in server-side JavaScript environments
like Node.js, Deno, or Bun, you can use the official 
[LiveSession SDK](https://github.com/livesession/livesession-node)
LiveSession SDK

for TypeScript and JavaScript.
Get started by installing the SDK using npm or your preferred package manager:
Once installed, copy one of the following examples into it:
Once installed, copy one of the following examples into it:
Get sessionsGet websitesimport livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);
Get sessions
Get sessions
Get websites
Get websites
import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);
import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);
import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);
import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);
On Unix-based systems, you can test out the LiveSession API using curl.
The following commands assume that you have exported the LIVESESSION_PAT system environment
variable as shown above.Get sessionsGet websitescurl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
On Unix-based systems, you can test out the LiveSession API using curl.
The following commands assume that you have exported the LIVESESSION_PAT system environment
variable as shown above.
On Unix-based systems, you can test out the LiveSession API using curl.
The following commands assume that you have exported the LIVESESSION_PAT system environment
variable as shown above.
Get sessionsGet websitescurl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
Get sessions
Get sessions
Get websites
Get websites
curl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
curl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"`,content:`Making your first API Request
With your LiveSession Personal Access Token exported as an environment
variable, you're ready to make your first API request.
You can either use the API directly with the HTTP client of your choice, or use one of our official SDKs as shown below.
With your LiveSession Personal Access Token exported as an environment
variable, you're ready to make your first API request.
You can either use the API directly with the HTTP client of your choice, or use one of our official SDKs as shown below.
JavaScriptcurlTo use the LiveSession API in server-side JavaScript environments
like Node.js, Deno, or Bun, you can use the official LiveSession SDK
for TypeScript and JavaScript.
Get started by installing the SDK using npm or your preferred package manager:Once installed, copy one of the following examples into it:Get sessionsGet websitesimport livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);On Unix-based systems, you can test out the LiveSession API using curl.
The following commands assume that you have exported the LIVESESSION_PAT system environment
variable as shown above.Get sessionsGet websitescurl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
JavaScript
JavaScript
curl
curl
To use the LiveSession API in server-side JavaScript environments
like Node.js, Deno, or Bun, you can use the official LiveSession SDK
for TypeScript and JavaScript.
Get started by installing the SDK using npm or your preferred package manager:Once installed, copy one of the following examples into it:Get sessionsGet websitesimport livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);
To use the LiveSession API in server-side JavaScript environments
like Node.js, Deno, or Bun, you can use the official LiveSession SDK
for TypeScript and JavaScript.
Get started by installing the SDK using npm or your preferred package manager:
To use the LiveSession API in server-side JavaScript environments
like Node.js, Deno, or Bun, you can use the official 
[LiveSession SDK](https://github.com/livesession/livesession-node)
LiveSession SDK

for TypeScript and JavaScript.
Get started by installing the SDK using npm or your preferred package manager:
Once installed, copy one of the following examples into it:
Once installed, copy one of the following examples into it:
Get sessionsGet websitesimport livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);
Get sessions
Get sessions
Get websites
Get websites
import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);
import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const sessions = await ls.sessions.list();
console.log(sessions);
import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);
import livesession from 'livesession';

const ls = new livesession(
    livesession.optionApiKey(process.env.LIVESESSION_PAT)
);

const websites = await ls.websites.list();
console.log(websites);
On Unix-based systems, you can test out the LiveSession API using curl.
The following commands assume that you have exported the LIVESESSION_PAT system environment
variable as shown above.Get sessionsGet websitescurl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
On Unix-based systems, you can test out the LiveSession API using curl.
The following commands assume that you have exported the LIVESESSION_PAT system environment
variable as shown above.
On Unix-based systems, you can test out the LiveSession API using curl.
The following commands assume that you have exported the LIVESESSION_PAT system environment
variable as shown above.
Get sessionsGet websitescurl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
Get sessions
Get sessions
Get websites
Get websites
curl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
curl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
curl https://api.livesession.io/v1/websites \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"`},{category:"",path:"/docs/get-started/frameworks",title:"Web frameworks",description:`Web frameworks
Learn how to integrate LiveSession with popular web frameworks and services.
Learn how to integrate LiveSession with popular web frameworks and services.
Learn how to integrate LiveSession with popular web frameworks and services.`,content:`Web frameworks
Learn how to integrate LiveSession with popular web frameworks and services.
Learn how to integrate LiveSession with popular web frameworks and services.
Learn how to integrate LiveSession with popular web frameworks and services.`},{category:"",path:"/docs/get-started/frameworks#quick-start",title:"Quick Start",description:`Quick Start
First, install the LiveSession Browser SDK:
First, install the LiveSession Browser SDK:
Then initialize LiveSession in your application:
Then initialize LiveSession in your application:
import ls from "@livesession/browser"

ls.init("YOUR_TRACK_ID")
Start recording:
Start recording:
ls.newPageView()`,content:`Quick Start
First, install the LiveSession Browser SDK:
First, install the LiveSession Browser SDK:
Then initialize LiveSession in your application:
Then initialize LiveSession in your application:
import ls from "@livesession/browser"

ls.init("YOUR_TRACK_ID")
Start recording:
Start recording:
ls.newPageView()`},{category:"",path:"/docs/get-started/frameworks#angular",title:"Angular",description:`Angular
In your src/app/app.component.ts, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In your 
src/app/app.component.ts
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import ls from "@livesession/browser";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  ngOnInit() {
    ls.init("YOUR_TRACK_ID")
    
    ls.newPageView()
  }
}`,content:`Angular
In your src/app/app.component.ts, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In your 
src/app/app.component.ts
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import ls from "@livesession/browser";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  ngOnInit() {
    ls.init("YOUR_TRACK_ID")
    
    ls.newPageView()
  }
}`},{category:"",path:"/docs/get-started/frameworks#astro",title:"Astro",description:`Astro
In your src/components/LiveSession.astro, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In your 
src/components/LiveSession.astro
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
---
const trackID = "YOUR_TRACK_ID";
---

<livesession-astro data-track-id={trackID}></livesession-astro>

<script>
   import ls from "@livesession/browser";

  class LiveSessionAstro extends HTMLElement {
    connectedCallback() {
      const trackId = this.dataset.trackId;
      if (!trackId) {
        console.warn("(livesession-astro): no 'trackId' provided");
        return;
      }

      ls.init(trackId);
      ls.newPageView();
    }
  }

  customElements.define("livesession-astro", LiveSessionAstro);
<\/script>
then add the component to your layout:
then add the component to your layout:
---
import LiveSession from '../components/LiveSession.astro';
---

<!doctype html>
<html lang="en">
 <head>
  <title>Astro Basics</title>
 </head>
 <body>
  <slot />
  <LiveSession />
 </body>
</html>`,content:`Astro
In your src/components/LiveSession.astro, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In your 
src/components/LiveSession.astro
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
---
const trackID = "YOUR_TRACK_ID";
---

<livesession-astro data-track-id={trackID}></livesession-astro>

<script>
   import ls from "@livesession/browser";

  class LiveSessionAstro extends HTMLElement {
    connectedCallback() {
      const trackId = this.dataset.trackId;
      if (!trackId) {
        console.warn("(livesession-astro): no 'trackId' provided");
        return;
      }

      ls.init(trackId);
      ls.newPageView();
    }
  }

  customElements.define("livesession-astro", LiveSessionAstro);
<\/script>
then add the component to your layout:
then add the component to your layout:
---
import LiveSession from '../components/LiveSession.astro';
---

<!doctype html>
<html lang="en">
 <head>
  <title>Astro Basics</title>
 </head>
 <body>
  <slot />
  <LiveSession />
 </body>
</html>`},{category:"",path:"/docs/get-started/frameworks#nextjs",title:"Next.js",description:`Next.js
In your src/app/livesession.tsx, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In your 
src/app/livesession.tsx
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
'use client'

import { useEffect } from 'react'

import ls from '@livesession/browser'

export function LiveSession({ children }: { children: React.ReactNode }) {
    useEffect(() => {
      ls.init("YOUR_TRACK_ID")
      ls.newPageView()
  }, [])

  return children
}
then the provider to your root layout:
then the provider to your root layout:
import { LiveSession } from './livesession'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LiveSession>{children}</LiveSession>
      </body>
    </html>
  )
}`,content:`Next.js
In your src/app/livesession.tsx, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In your 
src/app/livesession.tsx
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
'use client'

import { useEffect } from 'react'

import ls from '@livesession/browser'

export function LiveSession({ children }: { children: React.ReactNode }) {
    useEffect(() => {
      ls.init("YOUR_TRACK_ID")
      ls.newPageView()
  }, [])

  return children
}
then the provider to your root layout:
then the provider to your root layout:
import { LiveSession } from './livesession'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LiveSession>{children}</LiveSession>
      </body>
    </html>
  )
}`},{category:"",path:"/docs/get-started/frameworks#nuxt",title:"Nuxt",description:`Nuxt
Create a plugin for LiveSession in plugins/livesession.ts and initialize LiveSession using your project tracking code.
You can find it in your project settings.
Create a plugin for LiveSession in 
plugins/livesession.ts
 and initialize LiveSession using your project tracking code.
You can find it in your project settings.
import { defineNuxtPlugin, useRuntimeConfig, useRouter, nextTick } from '#imports'

import ls from '@livesession/browser'

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()
    const router = useRouter()

    router.afterEach((to) => {
        nextTick(() => {
            if (!process.client) {
                return
            }

            ls.init("YOUR_TRACK_ID")
            ls.newPageView()
        })
    })
})`,content:`Nuxt
Create a plugin for LiveSession in plugins/livesession.ts and initialize LiveSession using your project tracking code.
You can find it in your project settings.
Create a plugin for LiveSession in 
plugins/livesession.ts
 and initialize LiveSession using your project tracking code.
You can find it in your project settings.
import { defineNuxtPlugin, useRuntimeConfig, useRouter, nextTick } from '#imports'

import ls from '@livesession/browser'

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()
    const router = useRouter()

    router.afterEach((to) => {
        nextTick(() => {
            if (!process.client) {
                return
            }

            ls.init("YOUR_TRACK_ID")
            ls.newPageView()
        })
    })
})`},{category:"",path:"/docs/get-started/frameworks#react",title:"React",description:`React
In your src/main.tsx, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In your 
src/main.tsx
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import ls from "@livesession/browser";

import './index.css'
import App from './App.jsx'

try {
    ls.init("YOUR_TRACK_ID")
    ls.newPageView()
} catch(e) {
    console.error(e)
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)`,content:`React
In your src/main.tsx, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In your 
src/main.tsx
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import ls from "@livesession/browser";

import './index.css'
import App from './App.jsx'

try {
    ls.init("YOUR_TRACK_ID")
    ls.newPageView()
} catch(e) {
    console.error(e)
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)`},{category:"",path:"/docs/get-started/frameworks#react-router",title:"React Router",description:`React Router
In your app/components/LiveSession.tsx, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In your 
app/components/LiveSession.tsx
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
import { useEffect } from "react";
import ls from "@livesession/browser";

export function LiveSession({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        ls.init("YOUR_TRACK_ID")
        ls.newPageView()
    }, [])

    return children
}
then add the component to your root layout:
then add the component to your root layout:
import { LiveSession } from './components/LiveSession'
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <LiveSession />
      </body>
    </html>
  );`,content:`React Router
In your app/components/LiveSession.tsx, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In your 
app/components/LiveSession.tsx
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
import { useEffect } from "react";
import ls from "@livesession/browser";

export function LiveSession({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        ls.init("YOUR_TRACK_ID")
        ls.newPageView()
    }, [])

    return children
}
then add the component to your root layout:
then add the component to your root layout:
import { LiveSession } from './components/LiveSession'
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <LiveSession />
      </body>
    </html>
  );`},{category:"",path:"/docs/get-started/frameworks#svelte-sveltekit",title:"Svelte (SvelteKit)",description:`Svelte (SvelteKit)
In src/routes/+layout.ts, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In 
src/routes/+layout.ts
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
import ls from '@livesession/browser'
import { browser } from '$app/environment';

export const load = async () => {
  if (browser) {
    ls.init("YOUR_TRACK_ID")
    ls.newPageView()
  }
  return
};`,content:`Svelte (SvelteKit)
In src/routes/+layout.ts, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In 
src/routes/+layout.ts
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
import ls from '@livesession/browser'
import { browser } from '$app/environment';

export const load = async () => {
  if (browser) {
    ls.init("YOUR_TRACK_ID")
    ls.newPageView()
  }
  return
};`},{category:"",path:"/docs/get-started/frameworks#vue",title:"Vue",description:`Vue
In src/main.ts, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In 
src/main.ts
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
import { createApp } from 'vue'

import ls from "@livesession/browser";

import './style.css'
import App from './App.vue'

try {
   ls.init("YOUR_TRACK_ID")
  ls.newPageView()
} catch(e) {
    console.error(e)
}

createApp(App).mount('#app')`,content:`Vue
In src/main.ts, initialize LiveSession using your project tracking code.
You can find it in your project settings.
In 
src/main.ts
, initialize LiveSession using your project tracking code.
You can find it in your project settings.
import { createApp } from 'vue'

import ls from "@livesession/browser";

import './style.css'
import App from './App.vue'

try {
   ls.init("YOUR_TRACK_ID")
  ls.newPageView()
} catch(e) {
    console.error(e)
}

createApp(App).mount('#app')`},{category:"",path:"/docs/get-started/frameworks#gatsby",title:"Gatsby",description:`Gatsby
Install gatsby-plugin-livesessionGo to gatsby-config.jsConfigure a plugin like in following example:
- Install gatsby-plugin-livesession
Install gatsby-plugin-livesession
Install 
[gatsby-plugin-livesession](https://www.gatsbyjs.com/plugins/@livesession/gatsby-plugin-livesession)
gatsby-plugin-livesession
- Go to gatsby-config.js
Go to gatsby-config.js
Go to gatsby-config.js
- Configure a plugin like in following example:
Configure a plugin like in following example:
Configure a plugin like in following example:
plugins: [
  {
    resolve: \`@livesession/gatsby-plugin-livesession\`,
    options: {
      trackID: YOUR_LIVESESSION_TRACKID, // Required, string
      keystrokes: true || false, // Optional, default to false
      rootHostname: ".example.com", // Optional
    },
  },
];
Read more about an options you can provide here.
Read more about an options you can provide 
[here](/docs/api/browser/methods)
here
.
Plugin adds code to your site only in production mode.
Plugin adds code to your site only in production mode.
Plugin adds code to your site only in production mode.`,content:`Gatsby
Install gatsby-plugin-livesessionGo to gatsby-config.jsConfigure a plugin like in following example:
- Install gatsby-plugin-livesession
Install gatsby-plugin-livesession
Install 
[gatsby-plugin-livesession](https://www.gatsbyjs.com/plugins/@livesession/gatsby-plugin-livesession)
gatsby-plugin-livesession
- Go to gatsby-config.js
Go to gatsby-config.js
Go to gatsby-config.js
- Configure a plugin like in following example:
Configure a plugin like in following example:
Configure a plugin like in following example:
plugins: [
  {
    resolve: \`@livesession/gatsby-plugin-livesession\`,
    options: {
      trackID: YOUR_LIVESESSION_TRACKID, // Required, string
      keystrokes: true || false, // Optional, default to false
      rootHostname: ".example.com", // Optional
    },
  },
];
Read more about an options you can provide here.
Read more about an options you can provide 
[here](/docs/api/browser/methods)
here
.
Plugin adds code to your site only in production mode.
Plugin adds code to your site only in production mode.
Plugin adds code to your site only in production mode.`},{category:"",path:"/docs/get-started/frameworks#capacitor",title:"Capacitor",description:`Capacitor
In general LiveSession support that technology, but you must be sure that resources on your app are available publicly on the Internet.
In general LiveSession support that technology, but you must be sure that resources on your app are available publicly on the Internet.
If you use local server for some reasons you'll need to pass baseURL option like the following:
If you use local server for some reasons you'll need to pass baseURL option like the following:
__ls("newPageView", {
  baseURL: "https://your-site.com"
});
For example if you set up your local server
with hostname:'frontend', androidScheme:'capacitor-app' and
href to css in your app is /static/style.css the following style resource must be available
at https://your-site.com/static/style.css assuming you set baseURL to https://you-site.com
For example if you set up your local server
with hostname:'frontend', androidScheme:'capacitor-app' and
href to css in your app is /static/style.css the following style resource must be available
at https://your-site.com/static/style.css assuming you set baseURL to https://you-site.com
For example if you set up your 
[local server](https://capacitorjs.com/docs/config#schema)
local server

with 
hostname:'frontend', androidScheme:'capacitor-app'
hostname:'frontend', androidScheme:'capacitor-app'
 and
href to css in your app is /static/style.css the following style resource must be available
at 
https://your-site.com/static/style.css
 assuming you set baseURL to 
https://you-site.com`,content:`Capacitor
In general LiveSession support that technology, but you must be sure that resources on your app are available publicly on the Internet.
In general LiveSession support that technology, but you must be sure that resources on your app are available publicly on the Internet.
If you use local server for some reasons you'll need to pass baseURL option like the following:
If you use local server for some reasons you'll need to pass baseURL option like the following:
__ls("newPageView", {
  baseURL: "https://your-site.com"
});
For example if you set up your local server
with hostname:'frontend', androidScheme:'capacitor-app' and
href to css in your app is /static/style.css the following style resource must be available
at https://your-site.com/static/style.css assuming you set baseURL to https://you-site.com
For example if you set up your local server
with hostname:'frontend', androidScheme:'capacitor-app' and
href to css in your app is /static/style.css the following style resource must be available
at https://your-site.com/static/style.css assuming you set baseURL to https://you-site.com
For example if you set up your 
[local server](https://capacitorjs.com/docs/config#schema)
local server

with 
hostname:'frontend', androidScheme:'capacitor-app'
hostname:'frontend', androidScheme:'capacitor-app'
 and
href to css in your app is /static/style.css the following style resource must be available
at 
https://your-site.com/static/style.css
 assuming you set baseURL to 
https://you-site.com`},{category:"",path:"/docs/get-started/frameworks#electron",title:"Electron",description:`Electron
Electron doesn't natively support cookies, so LiveSession JavaScript web tracking code won't work because internally we use client-side cookies. We're currently working on a of the electron-cookies package to support tracking.
Electron doesn't natively support cookies, so LiveSession JavaScript web tracking code won't work because internally we use client-side cookies. We're currently working on a of the electron-cookies package to support tracking.
In the future we'll switch to another browser storage instead of cookies and Electron should works out of the box.
In the future we'll switch to another browser storage instead of cookies and Electron should works out of the box.
In the future we'll switch to another browser storage instead of cookies and Electron should works out of the box.
So, to use LiveSession in Electron apps you should:
So, to use LiveSession in Electron apps you should:
Install electron-cookies packageConfigure a like in following example:
- Install electron-cookies package
Install electron-cookies package
Install electron-cookies package
- Configure a like in following example:
Configure a like in following example:
Configure a like in following example:
import ElectronCookies from '@livesession/electron-cookies';
// enable
ElectronCookies.enable({
  origin: 'https://example.com'
}); // or ElectronCookies.enable() for default
// disable
ElectronCookies.disable();
The browser cookies needs to know the current URL, but in Electron files are usually served from local filesystem which is not compatibile with cookies. Treat origin as a special key for cookies store within all data is saved.
The browser cookies needs to know the current URL, but in Electron files are usually served from local filesystem which is not compatibile with cookies. Treat origin as a special key for cookies store within all data is saved.
Read more about a package here.
Read more about a package 
[here](https://github.com/livesession/electron-cookies)
here
.`,content:`Electron
Electron doesn't natively support cookies, so LiveSession JavaScript web tracking code won't work because internally we use client-side cookies. We're currently working on a of the electron-cookies package to support tracking.
Electron doesn't natively support cookies, so LiveSession JavaScript web tracking code won't work because internally we use client-side cookies. We're currently working on a of the electron-cookies package to support tracking.
In the future we'll switch to another browser storage instead of cookies and Electron should works out of the box.
In the future we'll switch to another browser storage instead of cookies and Electron should works out of the box.
In the future we'll switch to another browser storage instead of cookies and Electron should works out of the box.
So, to use LiveSession in Electron apps you should:
So, to use LiveSession in Electron apps you should:
Install electron-cookies packageConfigure a like in following example:
- Install electron-cookies package
Install electron-cookies package
Install electron-cookies package
- Configure a like in following example:
Configure a like in following example:
Configure a like in following example:
import ElectronCookies from '@livesession/electron-cookies';
// enable
ElectronCookies.enable({
  origin: 'https://example.com'
}); // or ElectronCookies.enable() for default
// disable
ElectronCookies.disable();
The browser cookies needs to know the current URL, but in Electron files are usually served from local filesystem which is not compatibile with cookies. Treat origin as a special key for cookies store within all data is saved.
The browser cookies needs to know the current URL, but in Electron files are usually served from local filesystem which is not compatibile with cookies. Treat origin as a special key for cookies store within all data is saved.
Read more about a package here.
Read more about a package 
[here](https://github.com/livesession/electron-cookies)
here
.`},{category:"",path:"/docs/get-started/frameworks#sample-projects",title:"Sample Projects",description:`Sample Projects
Check out our sample projects for complete examples of LiveSession integration with each framework.
Check out our 
[sample projects](https://github.com/livesession/livesession-browser-samples)
sample projects
 for complete examples of LiveSession integration with each framework.`,content:`Sample Projects
Check out our sample projects for complete examples of LiveSession integration with each framework.
Check out our 
[sample projects](https://github.com/livesession/livesession-browser-samples)
sample projects
 for complete examples of LiveSession integration with each framework.`},{category:"",path:"/docs/capabilities/alerts",title:"Alerts",description:`Alerts
Learn how to react on events.
Learn how to react on events.
Learn how to react on events.
LiveSession event stream was designed to be a powerful tool helpful for example in monitoring and alerting purposes.
It allows you to react on events in real-time and take actions based on them.
LiveSession 
[event stream](https://livesession.io/features)
event stream
 was designed to be a powerful tool helpful for example in monitoring and alerting purposes.
It allows you to react on events in real-time and take actions based on them.`,content:`Alerts
Learn how to react on events.
Learn how to react on events.
Learn how to react on events.
LiveSession event stream was designed to be a powerful tool helpful for example in monitoring and alerting purposes.
It allows you to react on events in real-time and take actions based on them.
LiveSession 
[event stream](https://livesession.io/features)
event stream
 was designed to be a powerful tool helpful for example in monitoring and alerting purposes.
It allows you to react on events in real-time and take actions based on them.`},{category:"",path:"/docs/capabilities/alerts#quickstart",title:"Quickstart",description:`Quickstart
Alerts delivery can be configured in two ways. First, you can use third party delivery provider like Slack.
Second, you can set up a custom workflow using webhooks. All methods receive events in real-time.
Alerts delivery can be configured in two ways. First, you can use third party delivery provider like 
Slack
.
Second, you can set up a custom workflow using 
[webhooks](https://en.wikipedia.org/wiki/Webhook)
webhooks
. All methods receive events in real-time.
Once you have a webhook set up, you can create an alert to receive events in real-time.
Once you have a webhook set up, you can create an alert to receive events in real-time.
The main duty of alerts is to filter events and send them to the configured delivery provider.
You can for example create a custom event and based on that event send a message to your server.
The main duty of alerts is to filter events and send them to the configured delivery provider.
You can for example create a 
[custom event](https://help.livesession.io/en/articles/8496404-custom-events)
custom event
 and based on that event send a message to your server.`,content:`Quickstart
Alerts delivery can be configured in two ways. First, you can use third party delivery provider like Slack.
Second, you can set up a custom workflow using webhooks. All methods receive events in real-time.
Alerts delivery can be configured in two ways. First, you can use third party delivery provider like 
Slack
.
Second, you can set up a custom workflow using 
[webhooks](https://en.wikipedia.org/wiki/Webhook)
webhooks
. All methods receive events in real-time.
Once you have a webhook set up, you can create an alert to receive events in real-time.
Once you have a webhook set up, you can create an alert to receive events in real-time.
The main duty of alerts is to filter events and send them to the configured delivery provider.
You can for example create a custom event and based on that event send a message to your server.
The main duty of alerts is to filter events and send them to the configured delivery provider.
You can for example create a 
[custom event](https://help.livesession.io/en/articles/8496404-custom-events)
custom event
 and based on that event send a message to your server.`},{category:"",path:"/docs/capabilities/alerts#creating-an-alert",title:"Creating an alert",description:`Creating an alert
Alerts gives you a robust control which events you want to receive.
You can use built-in events like Error Click, Network Error or based on custom event which gives you a full control of
what and when you want to monitor.
Alerts gives you a robust control which events you want to receive.
You can use built-in events like 
Error Click
, 
Network Error
 or based on 
[custom event](https://help.livesession.io/en/articles/8496404-custom-events)
custom event
 which gives you a full control of
what and when you want to monitor.
Based on above example, please make sure you used custom event tracking like
ls.track("YOUR_CUSTOM_EVENT_NAME")
Based on above example, please make sure you used custom event tracking like
ls.track("YOUR_CUSTOM_EVENT_NAME")
Based on above example, please make sure you used custom event tracking like

ls.track("YOUR_CUSTOM_EVENT_NAME")`,content:`Creating an alert
Alerts gives you a robust control which events you want to receive.
You can use built-in events like Error Click, Network Error or based on custom event which gives you a full control of
what and when you want to monitor.
Alerts gives you a robust control which events you want to receive.
You can use built-in events like 
Error Click
, 
Network Error
 or based on 
[custom event](https://help.livesession.io/en/articles/8496404-custom-events)
custom event
 which gives you a full control of
what and when you want to monitor.
Based on above example, please make sure you used custom event tracking like
ls.track("YOUR_CUSTOM_EVENT_NAME")
Based on above example, please make sure you used custom event tracking like
ls.track("YOUR_CUSTOM_EVENT_NAME")
Based on above example, please make sure you used custom event tracking like

ls.track("YOUR_CUSTOM_EVENT_NAME")`},{category:"",path:"/docs/capabilities/funnels",title:"Funnels",description:`Funnels
Analyze user behavior and optimize conversion flows with funnels.
Analyze user behavior and optimize conversion flows with funnels.
Analyze user behavior and optimize conversion flows with funnels.
Funnels in LiveSession enable you to track and analyze the steps users take within your app to reach a desired outcome. Use this feature to:
Funnels in LiveSession enable you to track and analyze the steps users take within your app to reach a desired outcome. Use this feature to:
Identify drop-off points in key workflows.Measure the performance of your conversion funnels.Gain actionable insights to improve user engagement and retention.
Identify drop-off points in key workflows.
Identify drop-off points in key workflows.
Identify drop-off points in key workflows.
Measure the performance of your conversion funnels.
Measure the performance of your conversion funnels.
Measure the performance of your conversion funnels.
Gain actionable insights to improve user engagement and retention.
Gain actionable insights to improve user engagement and retention.
Gain actionable insights to improve user engagement and retention.`,content:`Funnels
Analyze user behavior and optimize conversion flows with funnels.
Analyze user behavior and optimize conversion flows with funnels.
Analyze user behavior and optimize conversion flows with funnels.
Funnels in LiveSession enable you to track and analyze the steps users take within your app to reach a desired outcome. Use this feature to:
Funnels in LiveSession enable you to track and analyze the steps users take within your app to reach a desired outcome. Use this feature to:
Identify drop-off points in key workflows.Measure the performance of your conversion funnels.Gain actionable insights to improve user engagement and retention.
Identify drop-off points in key workflows.
Identify drop-off points in key workflows.
Identify drop-off points in key workflows.
Measure the performance of your conversion funnels.
Measure the performance of your conversion funnels.
Measure the performance of your conversion funnels.
Gain actionable insights to improve user engagement and retention.
Gain actionable insights to improve user engagement and retention.
Gain actionable insights to improve user engagement and retention.`},{category:"",path:"/docs/capabilities/funnels#overview",title:"Overview",description:`Overview
Funnels allow you to define a sequence of steps that represent a process in your application, such as completing a purchase or signing up.
These sequences help you understand user behavior at each stage and where users might abandon the process.
Funnels allow you to define a sequence of steps that represent a process in your application, such as completing a 
purchase
 or 
signing up
.
These sequences help you understand 
[user behavior](https://livesession.io/features)
user behavior
 at each stage and where users might abandon the process.
With the LiveSession API, you can programmatically define, query,
and analyze funnels to optimize user journeys.
With the LiveSession API, you can programmatically define, query,
and analyze funnels to optimize user journeys.`,content:`Overview
Funnels allow you to define a sequence of steps that represent a process in your application, such as completing a purchase or signing up.
These sequences help you understand user behavior at each stage and where users might abandon the process.
Funnels allow you to define a sequence of steps that represent a process in your application, such as completing a 
purchase
 or 
signing up
.
These sequences help you understand 
[user behavior](https://livesession.io/features)
user behavior
 at each stage and where users might abandon the process.
With the LiveSession API, you can programmatically define, query,
and analyze funnels to optimize user journeys.
With the LiveSession API, you can programmatically define, query,
and analyze funnels to optimize user journeys.`},{category:"",path:"/docs/capabilities/funnels#compute",title:"Compute",description:`Compute
Thanks to compute you can analyze user behavior and conversion rates. Use the following API request to compute a funnel:
Thanks to compute you can analyze user behavior and conversion rates. Use the following API request to compute a funnel:
curl https://api.livesession.io/v1/compute/funnel \\\\
  -X POST \\\\
  -H "Content-Type: application/json" \\\\
  -H "Authorization: Bearer $LIVESESSION_PAT" \\\\
  -d '{
      "website_id": "YOUR_WEBSITE_ID",
      "date_range": {
        "from": "2024-12-01",
        "to": "2024-12-07"
      },
      "steps": [
        {
          "filters": {
            "must": [
              {
                "name": "event.location.",
                "group": "url",
                "data": {
                  "string": {
                    "operator": "eq",
                    "values": [
                      "https://example.com/signup"
                    ]
                  }
                }
              }
            ]
          }
        },
        {
          "filters": {
            "must": [
              {
                "name": "event.custom_name",
                "data": {
                  "string": {
                    "operator": "eq",
                    "values": [
                      "Signup Form: filled"
                    ]
                  }
                }
              }
            ]
          }
        },
        {
          "filters": {
            "must": [
              {
                "name": "event.location.",
                "group": "url",
                "data": {
                  "string": {
                    "operator": "eq",
                    "values": [
                      "https://example.com/signup/completed"
                    ]
                  }
                }
              }
            ]
          }
        }
      ]
    }'`,content:`Compute
Thanks to compute you can analyze user behavior and conversion rates. Use the following API request to compute a funnel:
Thanks to compute you can analyze user behavior and conversion rates. Use the following API request to compute a funnel:
curl https://api.livesession.io/v1/compute/funnel \\\\
  -X POST \\\\
  -H "Content-Type: application/json" \\\\
  -H "Authorization: Bearer $LIVESESSION_PAT" \\\\
  -d '{
      "website_id": "YOUR_WEBSITE_ID",
      "date_range": {
        "from": "2024-12-01",
        "to": "2024-12-07"
      },
      "steps": [
        {
          "filters": {
            "must": [
              {
                "name": "event.location.",
                "group": "url",
                "data": {
                  "string": {
                    "operator": "eq",
                    "values": [
                      "https://example.com/signup"
                    ]
                  }
                }
              }
            ]
          }
        },
        {
          "filters": {
            "must": [
              {
                "name": "event.custom_name",
                "data": {
                  "string": {
                    "operator": "eq",
                    "values": [
                      "Signup Form: filled"
                    ]
                  }
                }
              }
            ]
          }
        },
        {
          "filters": {
            "must": [
              {
                "name": "event.location.",
                "group": "url",
                "data": {
                  "string": {
                    "operator": "eq",
                    "values": [
                      "https://example.com/signup/completed"
                    ]
                  }
                }
              }
            ]
          }
        }
      ]
    }'`},{category:"",path:"/docs/capabilities/metrics",title:"Metrics",description:`Metrics
Analyze key metrics to gain insights into user behavior and performance.
Analyze key metrics to gain insights into user behavior and performance.
Analyze key metrics to gain insights into user behavior and performance.
Metrics in LiveSession allow you to compute and analyze various metrics over time. Use this feature to:
Metrics in LiveSession allow you to compute and analyze various metrics over time. Use this feature to:
Track key performance indicators (KPIs) and metrics.Identify metrics and patterns in user behavior.Gain actionable insights to improve your product.
Track key performance indicators (KPIs) and metrics.
Track key performance indicators (KPIs) and metrics.
Track key performance indicators (KPIs) and metrics.
Identify metrics and patterns in user behavior.
Identify metrics and patterns in user behavior.
Identify metrics and patterns in user behavior.
Gain actionable insights to improve your product.
Gain actionable insights to improve your product.
Gain actionable insights to improve your product.`,content:`Metrics
Analyze key metrics to gain insights into user behavior and performance.
Analyze key metrics to gain insights into user behavior and performance.
Analyze key metrics to gain insights into user behavior and performance.
Metrics in LiveSession allow you to compute and analyze various metrics over time. Use this feature to:
Metrics in LiveSession allow you to compute and analyze various metrics over time. Use this feature to:
Track key performance indicators (KPIs) and metrics.Identify metrics and patterns in user behavior.Gain actionable insights to improve your product.
Track key performance indicators (KPIs) and metrics.
Track key performance indicators (KPIs) and metrics.
Track key performance indicators (KPIs) and metrics.
Identify metrics and patterns in user behavior.
Identify metrics and patterns in user behavior.
Identify metrics and patterns in user behavior.
Gain actionable insights to improve your product.
Gain actionable insights to improve your product.
Gain actionable insights to improve your product.`},{category:"",path:"/docs/capabilities/metrics#overview",title:"Overview",description:`Overview
Metrics enable you to compute metrics based on user activity and other data points in your application. These metrics help you understand user behavior and performance over time.
Metrics enable you to compute metrics based on user activity and other data points in your application. These metrics help you understand 
[user behavior](https://livesession.io/features)
user behavior
 and performance over time.
With the LiveSession API, you can programmatically define, query, and analyze metrics to gain insights into metrics.
With the LiveSession API, you can programmatically define, query, and analyze metrics to gain insights into metrics.`,content:`Overview
Metrics enable you to compute metrics based on user activity and other data points in your application. These metrics help you understand user behavior and performance over time.
Metrics enable you to compute metrics based on user activity and other data points in your application. These metrics help you understand 
[user behavior](https://livesession.io/features)
user behavior
 and performance over time.
With the LiveSession API, you can programmatically define, query, and analyze metrics to gain insights into metrics.
With the LiveSession API, you can programmatically define, query, and analyze metrics to gain insights into metrics.`},{category:"",path:"/docs/capabilities/metrics#compute",title:"Compute",description:`Compute
Use the following API request to compute a metric:
Use the following API request to compute a metric:
curl https://api.livesession.io/v1/compute/metric \\\\
  -X POST \\\\
  -H "Content-Type: application/json" \\\\
  -H "Authorization: Bearer $LIVESESSION_PAT" \\\\
  -d '{
      "website_id": "YOUR_WEBSITE_ID",
      "compute": {
        "date_range": {
          "from": "2024-01-01",
          "to": "2024-12-31"
        },
        "filters": {
          "must": [
            {
              "name": "event.custom_name",
              "data": {
                "string": {
                  "operator": "eq",
                  "values": [
                    "Signup Form: filled"
                  ]
                }
              }
            }
          ]
        },
        "type": "sessions",
        "histogram": {
          "aggs_func": "sum",
          "interval": "week"
        }
      }
    }'
This request computes the number of sessions where the Signup Form: filled event occurred.
The result is aggregated by week in histogram format.
This request computes the number of sessions where the 
Signup Form: filled
 event occurred.
The result is aggregated by week in histogram format.
About more compute options read API reference.
About more compute options read 
[API reference](https://livesession.io)
API reference
.`,content:`Compute
Use the following API request to compute a metric:
Use the following API request to compute a metric:
curl https://api.livesession.io/v1/compute/metric \\\\
  -X POST \\\\
  -H "Content-Type: application/json" \\\\
  -H "Authorization: Bearer $LIVESESSION_PAT" \\\\
  -d '{
      "website_id": "YOUR_WEBSITE_ID",
      "compute": {
        "date_range": {
          "from": "2024-01-01",
          "to": "2024-12-31"
        },
        "filters": {
          "must": [
            {
              "name": "event.custom_name",
              "data": {
                "string": {
                  "operator": "eq",
                  "values": [
                    "Signup Form: filled"
                  ]
                }
              }
            }
          ]
        },
        "type": "sessions",
        "histogram": {
          "aggs_func": "sum",
          "interval": "week"
        }
      }
    }'
This request computes the number of sessions where the Signup Form: filled event occurred.
The result is aggregated by week in histogram format.
This request computes the number of sessions where the 
Signup Form: filled
 event occurred.
The result is aggregated by week in histogram format.
About more compute options read API reference.
About more compute options read 
[API reference](https://livesession.io)
API reference
.`},{category:"",path:"/docs/capabilities/metrics#next-steps",title:"Next steps",description:`Next steps
Explore the API reference and documentation for more details.
Explore the API reference and documentation for more details.
Explore the API reference and documentation for more details.`,content:`Next steps
Explore the API reference and documentation for more details.
Explore the API reference and documentation for more details.
Explore the API reference and documentation for more details.`},{category:"",path:"/docs/capabilities/user-paths",title:'User paths <Badge kind="warning">Canary</Badge>',description:`User paths 
<Badge kind="warning">
Canary
</Badge>
<Subtitle>
    Explore how to analyze user behavior and journeys in your product.
</Subtitle>
User paths allow you to uncover how users interact with your app by analyzing their navigation and actions. With this feature, you can:
<Steps>
<Steps.Item>
Understand the steps users take to complete critical workflows.
</Steps.Item>
<Steps.Item>
Identify points of friction or abandonment in user journeys.
</Steps.Item>
<Steps.Item>
Gain insights into feature usage and optimize for better engagement.
</Steps.Item>
</Steps>
User paths
User paths
 allow you to uncover how users interact with your app by analyzing their navigation and actions. With this feature, you can:

<Steps>

<Steps.Item>
Understand the steps users take to complete critical workflows.
</Steps.Item>
<Steps.Item>
Identify points of friction or abandonment in user journeys.
</Steps.Item>
<Steps.Item>
Gain insights into feature usage and optimize for better engagement.
</Steps.Item>

</Steps>`,content:`User paths 
<Badge kind="warning">
Canary
</Badge>
<Subtitle>
    Explore how to analyze user behavior and journeys in your product.
</Subtitle>
User paths allow you to uncover how users interact with your app by analyzing their navigation and actions. With this feature, you can:
<Steps>
<Steps.Item>
Understand the steps users take to complete critical workflows.
</Steps.Item>
<Steps.Item>
Identify points of friction or abandonment in user journeys.
</Steps.Item>
<Steps.Item>
Gain insights into feature usage and optimize for better engagement.
</Steps.Item>
</Steps>
User paths
User paths
 allow you to uncover how users interact with your app by analyzing their navigation and actions. With this feature, you can:

<Steps>

<Steps.Item>
Understand the steps users take to complete critical workflows.
</Steps.Item>
<Steps.Item>
Identify points of friction or abandonment in user journeys.
</Steps.Item>
<Steps.Item>
Gain insights into feature usage and optimize for better engagement.
</Steps.Item>

</Steps>`},{category:"",path:"/docs/capabilities/user-paths#overview",title:"Overview",description:`Overview
User Paths work by leveraging the events generated by user activity in your app. These events are captured, organized, and visualized to provide detailed insights into user behavior.
User Paths work by leveraging the events generated by user activity in your app. These events are captured, organized, and visualized to provide detailed insights into 
[user behavior](https://livesession.io/features)
user behavior
.
For developers, our experimental query builder queryx(qx) can be used to interact with these insights programmatically. While optional, qx is a convenient tool for advanced queries. Learn more about qx.
For developers, our experimental query builder 
queryx(qx)
queryx(
qx
)
 can be used to interact with these insights programmatically. While optional, 
qx
 is a convenient tool for advanced queries. Learn more about 
[qx](https://github.com/livesession/qx)
qx
.
<Callout>
    \`qx\` is still an experimental project. Share your [feedback](https://github.com/livesession/livesession) with us to help improve it.
</Callout>`,content:`Overview
User Paths work by leveraging the events generated by user activity in your app. These events are captured, organized, and visualized to provide detailed insights into user behavior.
User Paths work by leveraging the events generated by user activity in your app. These events are captured, organized, and visualized to provide detailed insights into 
[user behavior](https://livesession.io/features)
user behavior
.
For developers, our experimental query builder queryx(qx) can be used to interact with these insights programmatically. While optional, qx is a convenient tool for advanced queries. Learn more about qx.
For developers, our experimental query builder 
queryx(qx)
queryx(
qx
)
 can be used to interact with these insights programmatically. While optional, 
qx
 is a convenient tool for advanced queries. Learn more about 
[qx](https://github.com/livesession/qx)
qx
.
<Callout>
    \`qx\` is still an experimental project. Share your [feedback](https://github.com/livesession/livesession) with us to help improve it.
</Callout>`},{category:"",path:"/docs/capabilities/user-paths#querying",title:"Querying",description:`Querying
The qx  provides a structured, type-safe way to create queries for a user path analysis. Here's an example:
The 
qx
  provides a structured, type-safe way to create queries for a user path analysis. Here's an example:
import qx from '@queryx/qx'

qx()
  .range("2024-01-01", "2024-12-31")
  .where(
    qx.session.events.path.includes("/dashboard"),
    qx.session.user.geo.country.eq("US")
  )
This query fetches sessions where users visited /dashboard and are based in the United States during 2024.
This query fetches sessions where users visited 
/dashboard
 and are based in the United States during 2024.`,content:`Querying
The qx  provides a structured, type-safe way to create queries for a user path analysis. Here's an example:
The 
qx
  provides a structured, type-safe way to create queries for a user path analysis. Here's an example:
import qx from '@queryx/qx'

qx()
  .range("2024-01-01", "2024-12-31")
  .where(
    qx.session.events.path.includes("/dashboard"),
    qx.session.user.geo.country.eq("US")
  )
This query fetches sessions where users visited /dashboard and are based in the United States during 2024.
This query fetches sessions where users visited 
/dashboard
 and are based in the United States during 2024.`},{category:"",path:"/docs/capabilities/user-paths#real-world-use-case",title:"Real-world use case",description:`Real-world use case
Imagine you're analyzing why users abandon the checkout process. Here's how you can use user paths:
<Steps>
<Steps.Item>
Identify the flow of users reaching the /checkout page.
</Steps.Item>
<Steps.Item>
Detect drop-off points or repeated actions that indicate friction.
</Steps.Item>
<Steps.Item>
Programmatically query sessions with specific filters, such as device type or location.
</Steps.Item>
</Steps>
Imagine you're analyzing why users abandon the checkout process. Here's how you can use user paths:

<Steps>

<Steps.Item>
Identify the flow of users reaching the 
/checkout
 page.
</Steps.Item>
<Steps.Item>
Detect drop-off points or repeated actions that indicate friction.
</Steps.Item>
<Steps.Item>
Programmatically query sessions with specific filters, such as device type or location.
</Steps.Item>

</Steps>
import qx from '@queryx/qx'

qx()
  .range("2024-12-01", "2024-12-10")
  .where(
    qx.session.events.path.includes("/checkout"),
    qx.session.user.device.type.eq("mobile")
  )
This example narrows down to mobile users interacting with the checkout flow within a given time range.
This example narrows down to mobile users interacting with the checkout flow within a given time range.`,content:`Real-world use case
Imagine you're analyzing why users abandon the checkout process. Here's how you can use user paths:
<Steps>
<Steps.Item>
Identify the flow of users reaching the /checkout page.
</Steps.Item>
<Steps.Item>
Detect drop-off points or repeated actions that indicate friction.
</Steps.Item>
<Steps.Item>
Programmatically query sessions with specific filters, such as device type or location.
</Steps.Item>
</Steps>
Imagine you're analyzing why users abandon the checkout process. Here's how you can use user paths:

<Steps>

<Steps.Item>
Identify the flow of users reaching the 
/checkout
 page.
</Steps.Item>
<Steps.Item>
Detect drop-off points or repeated actions that indicate friction.
</Steps.Item>
<Steps.Item>
Programmatically query sessions with specific filters, such as device type or location.
</Steps.Item>

</Steps>
import qx from '@queryx/qx'

qx()
  .range("2024-12-01", "2024-12-10")
  .where(
    qx.session.events.path.includes("/checkout"),
    qx.session.user.device.type.eq("mobile")
  )
This example narrows down to mobile users interacting with the checkout flow within a given time range.
This example narrows down to mobile users interacting with the checkout flow within a given time range.`},{category:"",path:"/docs/capabilities/user-paths#advanced-queries",title:"Advanced queries",description:`Advanced queries
Utilize the qx to construct sophisticated queries for in-depth user path analysis.
This powerful tool allows developers to create detailed queries that can expose intricate patterns in user behavior.
Utilize the 
qx
 to construct sophisticated queries for in-depth user path analysis.
This powerful tool allows developers to create detailed queries that can expose intricate patterns in user behavior.
Here's an illustrative example:
Here's an illustrative example:
import livesession from 'livesession'
import qx from '@queryx/qx'
import subscription0x from '@queryx/subscription-0x'
import ijs, {$} from "@interaction-js/ijs"

const ls = new livesession();

const subscriptionUrlsUsage = [
    "plan-and-billing"
]
const query = qx()
    .where(
        qx.session.events.path.includes(subscriptionUrlsUsage),
        qx.session.events.click.target(
            ijs.stream([
                $.SubscribeButton({plan: "pro"}),
                $.SubscribeButton({plan: "basic"})
            ]),
        )
    )

/*
// alternative query using \`0x\` concept:

const query = qx(subscription0x).downgradeSwitch("pro", "basic")
// \`downgradeSwitch\` is a custom function in \`0x\` space
*/

const journeys = await ls.journeys.find(query)

console.log(journeys)
<Callout>
    This concept is still in research. Share your [feedback](https://github.com/livesession/livesession) with us to help improve it.
</Callout>`,content:`Advanced queries
Utilize the qx to construct sophisticated queries for in-depth user path analysis.
This powerful tool allows developers to create detailed queries that can expose intricate patterns in user behavior.
Utilize the 
qx
 to construct sophisticated queries for in-depth user path analysis.
This powerful tool allows developers to create detailed queries that can expose intricate patterns in user behavior.
Here's an illustrative example:
Here's an illustrative example:
import livesession from 'livesession'
import qx from '@queryx/qx'
import subscription0x from '@queryx/subscription-0x'
import ijs, {$} from "@interaction-js/ijs"

const ls = new livesession();

const subscriptionUrlsUsage = [
    "plan-and-billing"
]
const query = qx()
    .where(
        qx.session.events.path.includes(subscriptionUrlsUsage),
        qx.session.events.click.target(
            ijs.stream([
                $.SubscribeButton({plan: "pro"}),
                $.SubscribeButton({plan: "basic"})
            ]),
        )
    )

/*
// alternative query using \`0x\` concept:

const query = qx(subscription0x).downgradeSwitch("pro", "basic")
// \`downgradeSwitch\` is a custom function in \`0x\` space
*/

const journeys = await ls.journeys.find(query)

console.log(journeys)
<Callout>
    This concept is still in research. Share your [feedback](https://github.com/livesession/livesession) with us to help improve it.
</Callout>`},{category:"",path:"/docs/api/quickstart",title:"LiveSession APIs, libraries, and tools",description:`LiveSession APIs, libraries, and tools
<Subtitle>
    Explore LiveSession's API reference documentation.
</Subtitle>
LiveSession provides a range of software tools, app templates, example apps, and libraries to accelerate your development process.
LiveSession provides a range of software tools, app templates, example apps, and libraries to accelerate your development process.`,content:`LiveSession APIs, libraries, and tools
<Subtitle>
    Explore LiveSession's API reference documentation.
</Subtitle>
LiveSession provides a range of software tools, app templates, example apps, and libraries to accelerate your development process.
LiveSession provides a range of software tools, app templates, example apps, and libraries to accelerate your development process.`},{category:"",path:"/docs/api/quickstart#apis",title:"APIs",description:`APIs
Extend LiveSession's core functionality by building apps that integrate into LiveSession ecosystem.
Extend LiveSession's core functionality by building apps that integrate into LiveSession ecosystem.
<GuideCard.List>
<GuideCard
href="/docs/api/browser/introduction"
icon={<svg
         xmlns="http://www.w3.org/2000/svg"
         width="1em"
         height="1em"
         viewBox="0 0 24 24"
         fill="none"
     >
<path
             d="M22 9H2M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z"
             stroke="#000000"
             strokeWidth={2}
             strokeLinecap="round"
             strokeLinejoin="round"
         />
</svg>}
title="Browser SDK"
kind="secondary"
>
Capture browser user interactions like clicks, page views, and events directly from your app with minimal impact
on performance.
</GuideCard>
<GuideCard.List>
<GuideCard
href="/docs/api/browser/introduction"
icon={
<svg
         xmlns="http://www.w3.org/2000/svg"
         width="1em"
         height="1em"
         viewBox="0 0 24 24"
         fill="none"
     >


<path
             d="M22 9H2M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z"
             stroke="#000000"
             strokeWidth={2}
             strokeLinecap="round"
             strokeLinejoin="round"
         />


</svg>
}
title="Browser SDK"
kind="secondary"
>
Capture 
browser
browser
 user 
interactions
interactions
 like clicks, page views, and events directly from your app with minimal impact
on performance.

</GuideCard>
<GuideCard
    href="/docs/api/rest"
    icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
    >
        <path
            fill="#000000"
            fillRule="evenodd"
            d="M.5 2.75a2.25 2.25 0 114.28.97l1.345 1.344.284-.284a2.25 2.25 0 013.182 0l.284.284 1.344-1.344a2.25 2.25 0 111.06 1.06l-1.343 1.345.284.284a2.25 2.25 0 010 3.182l-.284.284 1.344 1.344a2.25 2.25 0 11-1.06 1.06l-1.345-1.343-.284.284a2.25 2.25 0 01-3.182 0l-.284-.284-1.344 1.344a2.25 2.25 0 11-1.06-1.06l1.343-1.345-.284-.284a2.25 2.25 0 010-3.182l.284-.284L3.72 4.781A2.25 2.25 0 01.5 2.75zM2.75 2a.75.75 0 100 1.5.75.75 0 000-1.5zm0 10.5a.75.75 0 100 1.5.75.75 0 000-1.5zm9.75.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM13.25 2a.75.75 0 100 1.5.75.75 0 000-1.5zM7.47 5.841a.75.75 0 011.06 0L10.16 7.47a.75.75 0 010 1.06L8.53 10.16a.75.75 0 01-1.06 0L5.84 8.53a.75.75 0 010-1.06L7.47 5.84z"
            clipRule="evenodd"
        />
    </svg>}
    title="REST API"
    kind="secondary"
>
    Access and manage session data, events, and user journeys via **programmatically**. Perfect for **custom**
    dashboards and third-party integrations.
</GuideCard>

<GuideCard 
    href="/docs/api/graphql"
    icon={
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
        >
            <path
                d="M18.734 3.667l6.578 3.802c1.089-1.146 2.901-1.193 4.047-0.104 0.193 0.188 0.365 0.401 0.5 0.635 0.786 1.37 0.313 3.12-1.063 3.906-0.229 0.13-0.479 0.234-0.745 0.297v7.599c1.531 0.365 2.474 1.896 2.109 3.427-0.063 0.271-0.172 0.531-0.307 0.771-0.792 1.365-2.536 1.833-3.906 1.042-0.26-0.146-0.5-0.344-0.698-0.568l-6.542 3.776c0.495 1.495-0.318 3.109-1.813 3.604-0.292 0.099-0.594 0.146-0.896 0.146-1.573 0-2.854-1.271-2.854-2.849 0-0.271 0.042-0.547 0.12-0.813l-6.583-3.797c-1.089 1.141-2.896 1.188-4.036 0.094-1.135-1.089-1.177-2.891-0.094-4.031 0.38-0.396 0.865-0.677 1.396-0.807v-7.599c-1.531-0.365-2.479-1.906-2.109-3.443 0.063-0.266 0.167-0.521 0.302-0.755 0.786-1.365 2.536-1.833 3.901-1.042 0.234 0.135 0.453 0.302 0.641 0.5l6.583-3.797c-0.448-1.51 0.417-3.099 1.922-3.542 0.26-0.083 0.536-0.12 0.813-0.12 1.573 0 2.854 1.271 2.854 2.844 0 0.281-0.042 0.557-0.12 0.823zM18.047 4.839c-0.026 0.026-0.047 0.052-0.078 0.078l8.615 14.917c0.036-0.010 0.078-0.021 0.109-0.031v-7.609c-1.526-0.375-2.453-1.922-2.073-3.448 0.005-0.031 0.016-0.068 0.021-0.099zM14.026 4.917l-0.078-0.078-6.594 3.802c0.438 1.51-0.438 3.089-1.948 3.526-0.036 0.010-0.068 0.016-0.104 0.026v7.609l0.115 0.031 8.615-14.917zM16.797 5.594c-0.521 0.146-1.073 0.146-1.589 0l-8.615 14.917c0.391 0.375 0.667 0.859 0.802 1.391h17.214c0.13-0.531 0.406-1.016 0.802-1.396zM18.109 27.229l6.552-3.786c-0.021-0.063-0.036-0.125-0.052-0.188h-17.219l-0.031 0.109 6.589 3.802c0.516-0.536 1.245-0.87 2.052-0.87 0.839 0 1.589 0.359 2.109 0.932z"/>
        </svg>
    }
    title="GraphqQL API"
    kind="secondary"
>
    You can access the API **programmatically** using a fully customizable **GraphQL** interface,
    allowing for flexible and efficient data queries tailored to your needs.
</GuideCard> 

<GuideCard
    href="/docs/api/webhooks/configuration"
    icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1em"
        height="1em"
        viewBox="-10 -5 1034 1034"
    >
        <path
            fill="#000000"
            d="M482 226h-1l-10 2q-33 4 -64.5 18.5t-55.5 38.5q-41 37 -57 91q-9 30 -8 63t12 63q17 45 52 78l13 12l-83 135q-26 -1 -45 7q-30 13 -45 40q-7 15 -9 31t2 32q8 30 33 48q15 10 33 14.5t36 2t34.5 -12.5t27.5 -25q12 -17 14.5 -39t-5.5 -41q-1 -5 -7 -14l-3 -6l118 -192 q6 -9 8 -14l-10 -3q-9 -2 -13 -4q-23 -10 -41.5 -27.5t-28.5 -39.5q-17 -36 -9 -75q4 -23 17 -43t31 -34q37 -27 82 -27q27 -1 52.5 9.5t44.5 30.5q17 16 26.5 38.5t10.5 45.5q0 17 -6 42l70 19l8 1q14 -43 7 -86q-4 -33 -19.5 -63.5t-39.5 -53.5q-42 -42 -103 -56 q-6 -2 -18 -4l-14 -2h-37zM500 350q-17 0 -34 7t-30.5 20.5t-19.5 31.5q-8 20 -4 44q3 18 14 34t28 25q24 15 56 13q3 4 5 8l112 191q3 6 6 9q27 -26 58.5 -35.5t65 -3.5t58.5 26q32 25 43.5 61.5t0.5 73.5q-8 28 -28.5 50t-48.5 33q-31 13 -66.5 8.5t-63.5 -24.5 q-4 -3 -13 -10l-5 -6q-4 3 -11 10l-47 46q23 23 52 38.5t61 21.5l22 4h39l28 -5q64 -13 110 -60q22 -22 36.5 -50.5t19.5 -59.5q5 -36 -2 -71.5t-25 -64.5t-44 -51t-57 -35q-34 -14 -70.5 -16t-71.5 7l-17 5l-81 -137q13 -19 16 -37q5 -32 -13 -60q-16 -25 -44 -35 q-17 -6 -35 -6zM218 614q-58 13 -100 53q-47 44 -61 105l-4 24v37l2 11q2 13 4 20q7 31 24.5 59t42.5 49q50 41 115 49q38 4 76 -4.5t70 -28.5q53 -34 78 -91q7 -17 14 -45q6 -1 18 0l125 2q14 0 20 1q11 20 25 31t31.5 16t35.5 4q28 -3 50 -20q27 -21 32 -54 q2 -17 -1.5 -33t-13.5 -30q-16 -22 -41 -32q-17 -7 -35.5 -6.5t-35.5 7.5q-28 12 -43 37l-3 6q-14 0 -42 -1l-113 -1q-15 -1 -43 -1l-50 -1l3 17q8 43 -13 81q-14 27 -40 45t-57 22q-35 6 -70 -7.5t-57 -42.5q-28 -35 -27 -79q1 -37 23 -69q13 -19 32 -32t41 -19l9 -3z"
        />
    </svg>
    }
    title="Webhooks"
    kind="secondary"
>
    Trigger **actions** or **sync** apps in **real-time** based on user behaviors or product events. Webhooks provide a
    faster, more efficient alternative to API polling.
</GuideCard>
</GuideCard.List>
</GuideCard.List>`,content:`APIs
Extend LiveSession's core functionality by building apps that integrate into LiveSession ecosystem.
Extend LiveSession's core functionality by building apps that integrate into LiveSession ecosystem.
<GuideCard.List>
<GuideCard
href="/docs/api/browser/introduction"
icon={<svg
         xmlns="http://www.w3.org/2000/svg"
         width="1em"
         height="1em"
         viewBox="0 0 24 24"
         fill="none"
     >
<path
             d="M22 9H2M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z"
             stroke="#000000"
             strokeWidth={2}
             strokeLinecap="round"
             strokeLinejoin="round"
         />
</svg>}
title="Browser SDK"
kind="secondary"
>
Capture browser user interactions like clicks, page views, and events directly from your app with minimal impact
on performance.
</GuideCard>
<GuideCard.List>
<GuideCard
href="/docs/api/browser/introduction"
icon={
<svg
         xmlns="http://www.w3.org/2000/svg"
         width="1em"
         height="1em"
         viewBox="0 0 24 24"
         fill="none"
     >


<path
             d="M22 9H2M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z"
             stroke="#000000"
             strokeWidth={2}
             strokeLinecap="round"
             strokeLinejoin="round"
         />


</svg>
}
title="Browser SDK"
kind="secondary"
>
Capture 
browser
browser
 user 
interactions
interactions
 like clicks, page views, and events directly from your app with minimal impact
on performance.

</GuideCard>
<GuideCard
    href="/docs/api/rest"
    icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
    >
        <path
            fill="#000000"
            fillRule="evenodd"
            d="M.5 2.75a2.25 2.25 0 114.28.97l1.345 1.344.284-.284a2.25 2.25 0 013.182 0l.284.284 1.344-1.344a2.25 2.25 0 111.06 1.06l-1.343 1.345.284.284a2.25 2.25 0 010 3.182l-.284.284 1.344 1.344a2.25 2.25 0 11-1.06 1.06l-1.345-1.343-.284.284a2.25 2.25 0 01-3.182 0l-.284-.284-1.344 1.344a2.25 2.25 0 11-1.06-1.06l1.343-1.345-.284-.284a2.25 2.25 0 010-3.182l.284-.284L3.72 4.781A2.25 2.25 0 01.5 2.75zM2.75 2a.75.75 0 100 1.5.75.75 0 000-1.5zm0 10.5a.75.75 0 100 1.5.75.75 0 000-1.5zm9.75.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM13.25 2a.75.75 0 100 1.5.75.75 0 000-1.5zM7.47 5.841a.75.75 0 011.06 0L10.16 7.47a.75.75 0 010 1.06L8.53 10.16a.75.75 0 01-1.06 0L5.84 8.53a.75.75 0 010-1.06L7.47 5.84z"
            clipRule="evenodd"
        />
    </svg>}
    title="REST API"
    kind="secondary"
>
    Access and manage session data, events, and user journeys via **programmatically**. Perfect for **custom**
    dashboards and third-party integrations.
</GuideCard>

<GuideCard 
    href="/docs/api/graphql"
    icon={
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
        >
            <path
                d="M18.734 3.667l6.578 3.802c1.089-1.146 2.901-1.193 4.047-0.104 0.193 0.188 0.365 0.401 0.5 0.635 0.786 1.37 0.313 3.12-1.063 3.906-0.229 0.13-0.479 0.234-0.745 0.297v7.599c1.531 0.365 2.474 1.896 2.109 3.427-0.063 0.271-0.172 0.531-0.307 0.771-0.792 1.365-2.536 1.833-3.906 1.042-0.26-0.146-0.5-0.344-0.698-0.568l-6.542 3.776c0.495 1.495-0.318 3.109-1.813 3.604-0.292 0.099-0.594 0.146-0.896 0.146-1.573 0-2.854-1.271-2.854-2.849 0-0.271 0.042-0.547 0.12-0.813l-6.583-3.797c-1.089 1.141-2.896 1.188-4.036 0.094-1.135-1.089-1.177-2.891-0.094-4.031 0.38-0.396 0.865-0.677 1.396-0.807v-7.599c-1.531-0.365-2.479-1.906-2.109-3.443 0.063-0.266 0.167-0.521 0.302-0.755 0.786-1.365 2.536-1.833 3.901-1.042 0.234 0.135 0.453 0.302 0.641 0.5l6.583-3.797c-0.448-1.51 0.417-3.099 1.922-3.542 0.26-0.083 0.536-0.12 0.813-0.12 1.573 0 2.854 1.271 2.854 2.844 0 0.281-0.042 0.557-0.12 0.823zM18.047 4.839c-0.026 0.026-0.047 0.052-0.078 0.078l8.615 14.917c0.036-0.010 0.078-0.021 0.109-0.031v-7.609c-1.526-0.375-2.453-1.922-2.073-3.448 0.005-0.031 0.016-0.068 0.021-0.099zM14.026 4.917l-0.078-0.078-6.594 3.802c0.438 1.51-0.438 3.089-1.948 3.526-0.036 0.010-0.068 0.016-0.104 0.026v7.609l0.115 0.031 8.615-14.917zM16.797 5.594c-0.521 0.146-1.073 0.146-1.589 0l-8.615 14.917c0.391 0.375 0.667 0.859 0.802 1.391h17.214c0.13-0.531 0.406-1.016 0.802-1.396zM18.109 27.229l6.552-3.786c-0.021-0.063-0.036-0.125-0.052-0.188h-17.219l-0.031 0.109 6.589 3.802c0.516-0.536 1.245-0.87 2.052-0.87 0.839 0 1.589 0.359 2.109 0.932z"/>
        </svg>
    }
    title="GraphqQL API"
    kind="secondary"
>
    You can access the API **programmatically** using a fully customizable **GraphQL** interface,
    allowing for flexible and efficient data queries tailored to your needs.
</GuideCard> 

<GuideCard
    href="/docs/api/webhooks/configuration"
    icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1em"
        height="1em"
        viewBox="-10 -5 1034 1034"
    >
        <path
            fill="#000000"
            d="M482 226h-1l-10 2q-33 4 -64.5 18.5t-55.5 38.5q-41 37 -57 91q-9 30 -8 63t12 63q17 45 52 78l13 12l-83 135q-26 -1 -45 7q-30 13 -45 40q-7 15 -9 31t2 32q8 30 33 48q15 10 33 14.5t36 2t34.5 -12.5t27.5 -25q12 -17 14.5 -39t-5.5 -41q-1 -5 -7 -14l-3 -6l118 -192 q6 -9 8 -14l-10 -3q-9 -2 -13 -4q-23 -10 -41.5 -27.5t-28.5 -39.5q-17 -36 -9 -75q4 -23 17 -43t31 -34q37 -27 82 -27q27 -1 52.5 9.5t44.5 30.5q17 16 26.5 38.5t10.5 45.5q0 17 -6 42l70 19l8 1q14 -43 7 -86q-4 -33 -19.5 -63.5t-39.5 -53.5q-42 -42 -103 -56 q-6 -2 -18 -4l-14 -2h-37zM500 350q-17 0 -34 7t-30.5 20.5t-19.5 31.5q-8 20 -4 44q3 18 14 34t28 25q24 15 56 13q3 4 5 8l112 191q3 6 6 9q27 -26 58.5 -35.5t65 -3.5t58.5 26q32 25 43.5 61.5t0.5 73.5q-8 28 -28.5 50t-48.5 33q-31 13 -66.5 8.5t-63.5 -24.5 q-4 -3 -13 -10l-5 -6q-4 3 -11 10l-47 46q23 23 52 38.5t61 21.5l22 4h39l28 -5q64 -13 110 -60q22 -22 36.5 -50.5t19.5 -59.5q5 -36 -2 -71.5t-25 -64.5t-44 -51t-57 -35q-34 -14 -70.5 -16t-71.5 7l-17 5l-81 -137q13 -19 16 -37q5 -32 -13 -60q-16 -25 -44 -35 q-17 -6 -35 -6zM218 614q-58 13 -100 53q-47 44 -61 105l-4 24v37l2 11q2 13 4 20q7 31 24.5 59t42.5 49q50 41 115 49q38 4 76 -4.5t70 -28.5q53 -34 78 -91q7 -17 14 -45q6 -1 18 0l125 2q14 0 20 1q11 20 25 31t31.5 16t35.5 4q28 -3 50 -20q27 -21 32 -54 q2 -17 -1.5 -33t-13.5 -30q-16 -22 -41 -32q-17 -7 -35.5 -6.5t-35.5 7.5q-28 12 -43 37l-3 6q-14 0 -42 -1l-113 -1q-15 -1 -43 -1l-50 -1l3 17q8 43 -13 81q-14 27 -40 45t-57 22q-35 6 -70 -7.5t-57 -42.5q-28 -35 -27 -79q1 -37 23 -69q13 -19 32 -32t41 -19l9 -3z"
        />
    </svg>
    }
    title="Webhooks"
    kind="secondary"
>
    Trigger **actions** or **sync** apps in **real-time** based on user behaviors or product events. Webhooks provide a
    faster, more efficient alternative to API polling.
</GuideCard>
</GuideCard.List>
</GuideCard.List>`},{category:"",path:"/docs/api/quickstart#sdks",title:"SDKs",description:`SDKs
LiveSession provides several official libraries for interacting with the LiveSession APIs.
LiveSession provides several official libraries for interacting with the LiveSession APIs.
<GuideCard.List>
<GuideCard
href="https://github.com/livesession/livesession-browser"
icon={
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" fill="#F0DB4F">
<path
                 d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
</svg>
}
title="@livesession/browser"
kind="secondary"
>
A JavaScript library for capturing user interactions like clicks, page views, and events.
</GuideCard>
<GuideCard.List>
<GuideCard
href="
[https://github.com/livesession/livesession-browser](https://github.com/livesession/livesession-browser)
https://github.com/livesession/livesession-browser
"
icon={

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" fill="#F0DB4F">


<path
                 d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>


</svg>

}
title="@livesession/browser"
kind="secondary"
>
A JavaScript library for capturing user interactions like clicks, page views, and events.

</GuideCard>
<GuideCard
    href="https://github.com/livesession/livesession-node"
    icon={
        <svg
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 109 122.88"
            fill="#336633"
        >
            <defs>
                <style>{".cls-1{fill-rule:evenodd;}"}</style>
            </defs>
            <title>{"node-js-black"}</title>
            <path
                className="cls-1"
                d="M68.43,87.08c-19.7,0-23.83-9-23.83-16.63a1.3,1.3,0,0,1,1.3-1.3h5.82A1.3,1.3,0,0,1,53,70.25c.88,5.93,3.49,8.92,15.41,8.92C77.9,79.17,81.93,77,81.93,72c0-2.9-1.15-5-15.89-6.49-12.33-1.22-20-3.93-20-13.8,0-9.08,7.66-14.49,20.5-14.49,14.42,0,21.56,5,22.46,15.76a1.31,1.31,0,0,1-.35,1,1.35,1.35,0,0,1-1,.42H81.9a1.29,1.29,0,0,1-1.26-1c-1.41-6.23-4.81-8.23-14.07-8.23C56.21,45.15,55,48.76,55,51.46c0,3.28,1.42,4.24,15.4,6.09S90.82,62,90.82,71.71,82.64,87.14,68.37,87.14l.06-.06Zm-13.91,35.8a9.45,9.45,0,0,1-4.72-1.26l-15-8.9c-2.25-1.26-1.15-1.7-.41-2a30.38,30.38,0,0,0,6.8-3.1,1.15,1.15,0,0,1,1.12.08l11.55,6.85a1.51,1.51,0,0,0,1.4,0l45-26a1.42,1.42,0,0,0,.69-1.22V35.43a1.44,1.44,0,0,0-.7-1.24l-45-26a1.38,1.38,0,0,0-1.39,0l-45,26a1.42,1.42,0,0,0-.71,1.23v52a1.39,1.39,0,0,0,.7,1.21l12.33,7.12C27.85,99.06,32,95.11,32,91.15V39.86a1.29,1.29,0,0,1,1.31-1.3H39a1.29,1.29,0,0,1,1.3,1.3V91.17c0,8.93-4.87,14-13.33,14-2.6,0-4.66,0-10.38-2.82L4.72,95.59A9.51,9.51,0,0,1,0,87.38v-52a9.47,9.47,0,0,1,4.72-8.21l45.07-26a9.89,9.89,0,0,1,9.47,0l45,26A9.49,9.49,0,0,1,109,35.43v52a9.54,9.54,0,0,1-4.72,8.21l-45,26a9.5,9.5,0,0,1-4.74,1.26v0Zm0,0Z"
            />
        </svg>
    }
    title="livesession"
    kind="secondary"
>
    A server-side JavaScript library to work with environments like Node.js, Deno, or Bun.
</GuideCard>

<GuideCard
    href="https://github.com/livesession/livesession-go"
    icon={
        <svg
            width="2em"
            height="2em"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 254.5 225"
            style={{
            enableBackground: "new 0 0 254.5 225",
            }}
            xmlSpace="preserve"
            fill="#00ADD8"
        >
            <style type="text/css">
            {
                "\\n\\t.st0{fill:#2DBCAF;}\\n\\t.st1{fill:#5DC9E1;}\\n\\t.st2{fill:#FDDD00;}\\n\\t.st3{fill:#CE3262;}\\n\\t.st4{fill:#00ACD7;}\\n\\t.st5{fill:#FFFFFF;}\\n"
            }
            </style>
            <g>
            <g>
                <g>
                <g>
                    <path d="M40.2,101.1c-0.4,0-0.5-0.2-0.3-0.5l2.1-2.7c0.2-0.3,0.7-0.5,1.1-0.5l35.7,0c0.4,0,0.5,0.3,0.3,0.6l-1.7,2.6      c-0.2,0.3-0.7,0.6-1,0.6L40.2,101.1z" />
                </g>
                </g>
            </g>
            <g>
                <g>
                <g>
                    <path d="M25.1,110.3c-0.4,0-0.5-0.2-0.3-0.5l2.1-2.7c0.2-0.3,0.7-0.5,1.1-0.5l45.6,0c0.4,0,0.6,0.3,0.5,0.6l-0.8,2.4      c-0.1,0.4-0.5,0.6-0.9,0.6L25.1,110.3z" />
                </g>
                </g>
            </g>
            <g>
                <g>
                <g>
                    <path d="M49.3,119.5c-0.4,0-0.5-0.3-0.3-0.6l1.4-2.5c0.2-0.3,0.6-0.6,1-0.6l20,0c0.4,0,0.6,0.3,0.6,0.7l-0.2,2.4      c0,0.4-0.4,0.7-0.7,0.7L49.3,119.5z" />
                </g>
                </g>
            </g>
            <g>
                <g id="CXHf1q_5_">
                <g>
                    <g>
                    <path d="M153.1,99.3c-6.3,1.6-10.6,2.8-16.8,4.4c-1.5,0.4-1.6,0.5-2.9-1c-1.5-1.7-2.6-2.8-4.7-3.8c-6.3-3.1-12.4-2.2-18.1,1.5       c-6.8,4.4-10.3,10.9-10.2,19c0.1,8,5.6,14.6,13.5,15.7c6.8,0.9,12.5-1.5,17-6.6c0.9-1.1,1.7-2.3,2.7-3.7c-3.6,0-8.1,0-19.3,0       c-2.1,0-2.6-1.3-1.9-3c1.3-3.1,3.7-8.3,5.1-10.9c0.3-0.6,1-1.6,2.5-1.6c5.1,0,23.9,0,36.4,0c-0.2,2.7-0.2,5.4-0.6,8.1       c-1.1,7.2-3.8,13.8-8.2,19.6c-7.2,9.5-16.6,15.4-28.5,17c-9.8,1.3-18.9-0.6-26.9-6.6c-7.4-5.6-11.6-13-12.7-22.2       c-1.3-10.9,1.9-20.7,8.5-29.3c7.1-9.3,16.5-15.2,28-17.3c9.4-1.7,18.4-0.6,26.5,4.9c5.3,3.5,9.1,8.3,11.6,14.1       C154.7,98.5,154.3,99,153.1,99.3z" />
                    </g>
                    <g>
                    <path d="M186.2,154.6c-9.1-0.2-17.4-2.8-24.4-8.8c-5.9-5.1-9.6-11.6-10.8-19.3c-1.8-11.3,1.3-21.3,8.1-30.2       c7.3-9.6,16.1-14.6,28-16.7c10.2-1.8,19.8-0.8,28.5,5.1c7.9,5.4,12.8,12.7,14.1,22.3c1.7,13.5-2.2,24.5-11.5,33.9       c-6.6,6.7-14.7,10.9-24,12.8C191.5,154.2,188.8,154.3,186.2,154.6z M210,114.2c-0.1-1.3-0.1-2.3-0.3-3.3       c-1.8-9.9-10.9-15.5-20.4-13.3c-9.3,2.1-15.3,8-17.5,17.4c-1.8,7.8,2,15.7,9.2,18.9c5.5,2.4,11,2.1,16.3-0.6       C205.2,129.2,209.5,122.8,210,114.2z" />
                    </g>
                </g>
                </g>
            </g>
            </g>
        </svg>
    }
    title="livesession-go"
    kind="secondary"
>
    A library for interacting with LiveSession APIs via server-side in Go.
</GuideCard>
</GuideCard.List>
</GuideCard.List>`,content:`SDKs
LiveSession provides several official libraries for interacting with the LiveSession APIs.
LiveSession provides several official libraries for interacting with the LiveSession APIs.
<GuideCard.List>
<GuideCard
href="https://github.com/livesession/livesession-browser"
icon={
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" fill="#F0DB4F">
<path
                 d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
</svg>
}
title="@livesession/browser"
kind="secondary"
>
A JavaScript library for capturing user interactions like clicks, page views, and events.
</GuideCard>
<GuideCard.List>
<GuideCard
href="
[https://github.com/livesession/livesession-browser](https://github.com/livesession/livesession-browser)
https://github.com/livesession/livesession-browser
"
icon={

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" fill="#F0DB4F">


<path
                 d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>


</svg>

}
title="@livesession/browser"
kind="secondary"
>
A JavaScript library for capturing user interactions like clicks, page views, and events.

</GuideCard>
<GuideCard
    href="https://github.com/livesession/livesession-node"
    icon={
        <svg
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 109 122.88"
            fill="#336633"
        >
            <defs>
                <style>{".cls-1{fill-rule:evenodd;}"}</style>
            </defs>
            <title>{"node-js-black"}</title>
            <path
                className="cls-1"
                d="M68.43,87.08c-19.7,0-23.83-9-23.83-16.63a1.3,1.3,0,0,1,1.3-1.3h5.82A1.3,1.3,0,0,1,53,70.25c.88,5.93,3.49,8.92,15.41,8.92C77.9,79.17,81.93,77,81.93,72c0-2.9-1.15-5-15.89-6.49-12.33-1.22-20-3.93-20-13.8,0-9.08,7.66-14.49,20.5-14.49,14.42,0,21.56,5,22.46,15.76a1.31,1.31,0,0,1-.35,1,1.35,1.35,0,0,1-1,.42H81.9a1.29,1.29,0,0,1-1.26-1c-1.41-6.23-4.81-8.23-14.07-8.23C56.21,45.15,55,48.76,55,51.46c0,3.28,1.42,4.24,15.4,6.09S90.82,62,90.82,71.71,82.64,87.14,68.37,87.14l.06-.06Zm-13.91,35.8a9.45,9.45,0,0,1-4.72-1.26l-15-8.9c-2.25-1.26-1.15-1.7-.41-2a30.38,30.38,0,0,0,6.8-3.1,1.15,1.15,0,0,1,1.12.08l11.55,6.85a1.51,1.51,0,0,0,1.4,0l45-26a1.42,1.42,0,0,0,.69-1.22V35.43a1.44,1.44,0,0,0-.7-1.24l-45-26a1.38,1.38,0,0,0-1.39,0l-45,26a1.42,1.42,0,0,0-.71,1.23v52a1.39,1.39,0,0,0,.7,1.21l12.33,7.12C27.85,99.06,32,95.11,32,91.15V39.86a1.29,1.29,0,0,1,1.31-1.3H39a1.29,1.29,0,0,1,1.3,1.3V91.17c0,8.93-4.87,14-13.33,14-2.6,0-4.66,0-10.38-2.82L4.72,95.59A9.51,9.51,0,0,1,0,87.38v-52a9.47,9.47,0,0,1,4.72-8.21l45.07-26a9.89,9.89,0,0,1,9.47,0l45,26A9.49,9.49,0,0,1,109,35.43v52a9.54,9.54,0,0,1-4.72,8.21l-45,26a9.5,9.5,0,0,1-4.74,1.26v0Zm0,0Z"
            />
        </svg>
    }
    title="livesession"
    kind="secondary"
>
    A server-side JavaScript library to work with environments like Node.js, Deno, or Bun.
</GuideCard>

<GuideCard
    href="https://github.com/livesession/livesession-go"
    icon={
        <svg
            width="2em"
            height="2em"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 254.5 225"
            style={{
            enableBackground: "new 0 0 254.5 225",
            }}
            xmlSpace="preserve"
            fill="#00ADD8"
        >
            <style type="text/css">
            {
                "\\n\\t.st0{fill:#2DBCAF;}\\n\\t.st1{fill:#5DC9E1;}\\n\\t.st2{fill:#FDDD00;}\\n\\t.st3{fill:#CE3262;}\\n\\t.st4{fill:#00ACD7;}\\n\\t.st5{fill:#FFFFFF;}\\n"
            }
            </style>
            <g>
            <g>
                <g>
                <g>
                    <path d="M40.2,101.1c-0.4,0-0.5-0.2-0.3-0.5l2.1-2.7c0.2-0.3,0.7-0.5,1.1-0.5l35.7,0c0.4,0,0.5,0.3,0.3,0.6l-1.7,2.6      c-0.2,0.3-0.7,0.6-1,0.6L40.2,101.1z" />
                </g>
                </g>
            </g>
            <g>
                <g>
                <g>
                    <path d="M25.1,110.3c-0.4,0-0.5-0.2-0.3-0.5l2.1-2.7c0.2-0.3,0.7-0.5,1.1-0.5l45.6,0c0.4,0,0.6,0.3,0.5,0.6l-0.8,2.4      c-0.1,0.4-0.5,0.6-0.9,0.6L25.1,110.3z" />
                </g>
                </g>
            </g>
            <g>
                <g>
                <g>
                    <path d="M49.3,119.5c-0.4,0-0.5-0.3-0.3-0.6l1.4-2.5c0.2-0.3,0.6-0.6,1-0.6l20,0c0.4,0,0.6,0.3,0.6,0.7l-0.2,2.4      c0,0.4-0.4,0.7-0.7,0.7L49.3,119.5z" />
                </g>
                </g>
            </g>
            <g>
                <g id="CXHf1q_5_">
                <g>
                    <g>
                    <path d="M153.1,99.3c-6.3,1.6-10.6,2.8-16.8,4.4c-1.5,0.4-1.6,0.5-2.9-1c-1.5-1.7-2.6-2.8-4.7-3.8c-6.3-3.1-12.4-2.2-18.1,1.5       c-6.8,4.4-10.3,10.9-10.2,19c0.1,8,5.6,14.6,13.5,15.7c6.8,0.9,12.5-1.5,17-6.6c0.9-1.1,1.7-2.3,2.7-3.7c-3.6,0-8.1,0-19.3,0       c-2.1,0-2.6-1.3-1.9-3c1.3-3.1,3.7-8.3,5.1-10.9c0.3-0.6,1-1.6,2.5-1.6c5.1,0,23.9,0,36.4,0c-0.2,2.7-0.2,5.4-0.6,8.1       c-1.1,7.2-3.8,13.8-8.2,19.6c-7.2,9.5-16.6,15.4-28.5,17c-9.8,1.3-18.9-0.6-26.9-6.6c-7.4-5.6-11.6-13-12.7-22.2       c-1.3-10.9,1.9-20.7,8.5-29.3c7.1-9.3,16.5-15.2,28-17.3c9.4-1.7,18.4-0.6,26.5,4.9c5.3,3.5,9.1,8.3,11.6,14.1       C154.7,98.5,154.3,99,153.1,99.3z" />
                    </g>
                    <g>
                    <path d="M186.2,154.6c-9.1-0.2-17.4-2.8-24.4-8.8c-5.9-5.1-9.6-11.6-10.8-19.3c-1.8-11.3,1.3-21.3,8.1-30.2       c7.3-9.6,16.1-14.6,28-16.7c10.2-1.8,19.8-0.8,28.5,5.1c7.9,5.4,12.8,12.7,14.1,22.3c1.7,13.5-2.2,24.5-11.5,33.9       c-6.6,6.7-14.7,10.9-24,12.8C191.5,154.2,188.8,154.3,186.2,154.6z M210,114.2c-0.1-1.3-0.1-2.3-0.3-3.3       c-1.8-9.9-10.9-15.5-20.4-13.3c-9.3,2.1-15.3,8-17.5,17.4c-1.8,7.8,2,15.7,9.2,18.9c5.5,2.4,11,2.1,16.3-0.6       C205.2,129.2,209.5,122.8,210,114.2z" />
                    </g>
                </g>
                </g>
            </g>
            </g>
        </svg>
    }
    title="livesession-go"
    kind="secondary"
>
    A library for interacting with LiveSession APIs via server-side in Go.
</GuideCard>
</GuideCard.List>
</GuideCard.List>`},{category:"",path:"/docs/api/quickstart#component-libraries",title:"Component libraries",description:`Component libraries
Explore the available component libraries and references.
Explore the available component libraries and references.
<GuideCard.List>
<GuideCard
href="https://storybook.livesession.io"
icon={
<svg
             xmlns="http://www.w3.org/2000/svg"
             fill="#FF4785"
             width="1em"
             height="1em"
             viewBox="0 0 32 32"
         >
<path
                 d="M21.786 0.318l-0.161 3.615c-0.005 0.203 0.229 0.328 0.391 0.203l1.411-1.068 1.198 0.932c0.156 0.104 0.365 0 0.375-0.188l-0.135-3.677 1.776-0.135c0.922-0.063 1.708 0.672 1.708 1.599v28.802c0 0.917-0.766 1.646-1.682 1.599l-21.469-0.958c-0.833-0.036-1.505-0.708-1.531-1.547l-1-26.401c-0.052-0.885 0.62-1.646 1.505-1.693l17.599-1.109zM17.693 12.401c0 0.625 4.214 0.318 4.786-0.109 0-4.266-2.292-6.521-6.479-6.521-4.198 0-6.531 2.297-6.531 5.724 0 5.932 8 6.036 8 9.276 0 0.938-0.427 1.469-1.401 1.469-1.281 0-1.802-0.651-1.734-2.88 0-0.479-4.865-0.641-5.026 0-0.359 5.375 2.974 6.932 6.797 6.932 3.724 0 6.63-1.984 6.63-5.573 0-6.359-8.135-6.188-8.135-9.333 0-1.292 0.964-1.464 1.505-1.464 0.604 0 1.667 0.094 1.589 2.49z"/>
</svg>
}
title="Storybook"
kind="secondary"
>
Explore LiveSession's component library and UI elements in Storybook.
</GuideCard>
</GuideCard.List>
<GuideCard.List>
<GuideCard
href="
[https://storybook.livesession.io](https://storybook.livesession.io)
https://storybook.livesession.io
"
icon={

<svg
             xmlns="http://www.w3.org/2000/svg"
             fill="#FF4785"
             width="1em"
             height="1em"
             viewBox="0 0 32 32"
         >


<path
                 d="M21.786 0.318l-0.161 3.615c-0.005 0.203 0.229 0.328 0.391 0.203l1.411-1.068 1.198 0.932c0.156 0.104 0.365 0 0.375-0.188l-0.135-3.677 1.776-0.135c0.922-0.063 1.708 0.672 1.708 1.599v28.802c0 0.917-0.766 1.646-1.682 1.599l-21.469-0.958c-0.833-0.036-1.505-0.708-1.531-1.547l-1-26.401c-0.052-0.885 0.62-1.646 1.505-1.693l17.599-1.109zM17.693 12.401c0 0.625 4.214 0.318 4.786-0.109 0-4.266-2.292-6.521-6.479-6.521-4.198 0-6.531 2.297-6.531 5.724 0 5.932 8 6.036 8 9.276 0 0.938-0.427 1.469-1.401 1.469-1.281 0-1.802-0.651-1.734-2.88 0-0.479-4.865-0.641-5.026 0-0.359 5.375 2.974 6.932 6.797 6.932 3.724 0 6.63-1.984 6.63-5.573 0-6.359-8.135-6.188-8.135-9.333 0-1.292 0.964-1.464 1.505-1.464 0.604 0 1.667 0.094 1.589 2.49z"/>


</svg>

}
title="Storybook"
kind="secondary"
>
Explore LiveSession's component library and UI elements in Storybook.

</GuideCard>

</GuideCard.List>`,content:`Component libraries
Explore the available component libraries and references.
Explore the available component libraries and references.
<GuideCard.List>
<GuideCard
href="https://storybook.livesession.io"
icon={
<svg
             xmlns="http://www.w3.org/2000/svg"
             fill="#FF4785"
             width="1em"
             height="1em"
             viewBox="0 0 32 32"
         >
<path
                 d="M21.786 0.318l-0.161 3.615c-0.005 0.203 0.229 0.328 0.391 0.203l1.411-1.068 1.198 0.932c0.156 0.104 0.365 0 0.375-0.188l-0.135-3.677 1.776-0.135c0.922-0.063 1.708 0.672 1.708 1.599v28.802c0 0.917-0.766 1.646-1.682 1.599l-21.469-0.958c-0.833-0.036-1.505-0.708-1.531-1.547l-1-26.401c-0.052-0.885 0.62-1.646 1.505-1.693l17.599-1.109zM17.693 12.401c0 0.625 4.214 0.318 4.786-0.109 0-4.266-2.292-6.521-6.479-6.521-4.198 0-6.531 2.297-6.531 5.724 0 5.932 8 6.036 8 9.276 0 0.938-0.427 1.469-1.401 1.469-1.281 0-1.802-0.651-1.734-2.88 0-0.479-4.865-0.641-5.026 0-0.359 5.375 2.974 6.932 6.797 6.932 3.724 0 6.63-1.984 6.63-5.573 0-6.359-8.135-6.188-8.135-9.333 0-1.292 0.964-1.464 1.505-1.464 0.604 0 1.667 0.094 1.589 2.49z"/>
</svg>
}
title="Storybook"
kind="secondary"
>
Explore LiveSession's component library and UI elements in Storybook.
</GuideCard>
</GuideCard.List>
<GuideCard.List>
<GuideCard
href="
[https://storybook.livesession.io](https://storybook.livesession.io)
https://storybook.livesession.io
"
icon={

<svg
             xmlns="http://www.w3.org/2000/svg"
             fill="#FF4785"
             width="1em"
             height="1em"
             viewBox="0 0 32 32"
         >


<path
                 d="M21.786 0.318l-0.161 3.615c-0.005 0.203 0.229 0.328 0.391 0.203l1.411-1.068 1.198 0.932c0.156 0.104 0.365 0 0.375-0.188l-0.135-3.677 1.776-0.135c0.922-0.063 1.708 0.672 1.708 1.599v28.802c0 0.917-0.766 1.646-1.682 1.599l-21.469-0.958c-0.833-0.036-1.505-0.708-1.531-1.547l-1-26.401c-0.052-0.885 0.62-1.646 1.505-1.693l17.599-1.109zM17.693 12.401c0 0.625 4.214 0.318 4.786-0.109 0-4.266-2.292-6.521-6.479-6.521-4.198 0-6.531 2.297-6.531 5.724 0 5.932 8 6.036 8 9.276 0 0.938-0.427 1.469-1.401 1.469-1.281 0-1.802-0.651-1.734-2.88 0-0.479-4.865-0.641-5.026 0-0.359 5.375 2.974 6.932 6.797 6.932 3.724 0 6.63-1.984 6.63-5.573 0-6.359-8.135-6.188-8.135-9.333 0-1.292 0.964-1.464 1.505-1.464 0.604 0 1.667 0.094 1.589 2.49z"/>


</svg>

}
title="Storybook"
kind="secondary"
>
Explore LiveSession's component library and UI elements in Storybook.

</GuideCard>

</GuideCard.List>`},{category:"",path:"/docs/api/quickstart#app-templates",title:"App templates",description:`App templates
The following templates can help you start your LiveSession app development.
The following templates can help you start your LiveSession app development.
<GuideCard.List>
<GuideCard
href="https://github.com/livesession/livesession-browser-samples/tree/master/react"
icon={
<svg
             xmlns="http://www.w3.org/2000/svg"
             fill="#61DBFB"
             width="1em"
             height="1em"
             viewBox="0 0 512 512"
         >
<title>{"ionicons-v5_logos"}</title>
<path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z" />
<path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z" />
</svg>
}
title="React"
kind="secondary"
>
React Router app template for building LiveSession apps.
</GuideCard>
<GuideCard.List>
<GuideCard
href="
[https://github.com/livesession/livesession-browser-samples/tree/master/react](https://github.com/livesession/livesession-browser-samples/tree/master/react)
https://github.com/livesession/livesession-browser-samples/tree/master/react
"
icon={

<svg
             xmlns="http://www.w3.org/2000/svg"
             fill="#61DBFB"
             width="1em"
             height="1em"
             viewBox="0 0 512 512"
         >


<title>
{"ionicons-v5_logos"}
</title>


<path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z" />


<path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z" />


</svg>

}
title="React"
kind="secondary"
>
React Router app template for building LiveSession apps.

</GuideCard>
<GuideCard
    href="https://github.com/livesession/livesession-browser-samples/tree/master/vue"
    icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="#42b883" width="1em" height="1em" viewBox="0 0 448 512">
            <path d="m356.9 64.3h-76.9l-56 88.6-48-88.6h-176l224 383.7 224-383.7zm-301.2 32h53.8l114.5 198.2 114.4-198.2h53.8l-168.2 288.2z" />
        </svg>
    }
    title="Vue"
    kind="secondary"
>
    Vue app template for building LiveSession apps.
</GuideCard>

<GuideCard
    href="https://github.com/livesession/livesession-browser-samples/tree/master/angular"
    icon={
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#f637e3"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
            {...props}
        >
            <title>{"ionicons-v5_logos"}</title>
            <polygon points="213.57 256 298.42 256 255.99 166.64 213.57 256" />
            <path d="M256,32,32,112,78.12,384,256,480l177.75-96L480,112Zm88,320-26.59-56H194.58L168,352H128L256,72,384,352Z" />
        </svg>
    }
    title="Angular"
    kind="secondary"
>
    Angular app template for building LiveSession apps.
</GuideCard>
</GuideCard.List>
</GuideCard.List>
{/* ## Sample apps TODO: in the future /}
{/ The following examples can help you with your app. /}
{/
<GuideCard.List>
<GuideCard
href="TODO"
icon={
<svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 80 80"
             fill="none"
         >
<g clipPath="url(#clip0_202_147)">
<path d="M0 55.3333H80" stroke="black" strokeWidth={0.506667}/>
<path d="M0 40H80" stroke="black" strokeWidth={0.506667}/>
<path d="M0 24.6667H80" stroke="black" strokeWidth={0.506667}/>
<path d="M55.3334 80V0" stroke="black" strokeWidth={0.506667}/>
<path d="M40 80V0" stroke="black" strokeWidth={0.506667}/>
<path d="M24.6666 80V0" stroke="black" strokeWidth={0.506667}/>
<path d="M80 80L0 0" stroke="black" strokeWidth={0.506667}/>
<path d="M0 80L80 0" stroke="black" strokeWidth={0.506667}/>
<rect
                     x={5.33337}
                     y={5.33333}
                     width={69.3333}
                     height={69.3333}
                     stroke="black"
                     strokeWidth={0.506667}
                 />
<circle
                     cx={40}
                     cy={40}
                     r={15.3333}
                     stroke="black"
                     strokeWidth={0.506667}
                 />
<circle cx={40} cy={40} r={22} stroke="black" strokeWidth={0.506667}/>
<circle
                     cx={40}
                     cy={40}
                     r={34.6667}
                     stroke="black"
                     strokeWidth={0.506667}
                 />
</g>
<rect
                 x={0.253333}
                 y={0.253333}
                 width={79.4933}
                 height={79.4933}
                 rx={17.08}
                 stroke="black"
                 strokeWidth={0.506667}
             />
<defs>
<clipPath id="clip0_202_147">
<rect width={80} height={80} rx={17.3333} fill="white"/>
</clipPath>
</defs>
</svg>
}
title="AI metrics explorer"
kind="secondary"
>
A sample app that uses LiveSession's API and AI.
</GuideCard>
</GuideCard.List> /}
{/
{/* ## Sample apps TODO: in the future 
/}
{/
/}
{/
 The following examples can help you with your app. 
/}
{/
/}
{/

<GuideCard.List>
<GuideCard
href="TODO"
icon={

<svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 80 80"
             fill="none"
         >


<g clipPath="url(#clip0_202_147)">


<path d="M0 55.3333H80" stroke="black" strokeWidth={0.506667}/>


<path d="M0 40H80" stroke="black" strokeWidth={0.506667}/>


<path d="M0 24.6667H80" stroke="black" strokeWidth={0.506667}/>


<path d="M55.3334 80V0" stroke="black" strokeWidth={0.506667}/>


<path d="M40 80V0" stroke="black" strokeWidth={0.506667}/>


<path d="M24.6666 80V0" stroke="black" strokeWidth={0.506667}/>


<path d="M80 80L0 0" stroke="black" strokeWidth={0.506667}/>


<path d="M0 80L80 0" stroke="black" strokeWidth={0.506667}/>


<rect
                     x={5.33337}
                     y={5.33333}
                     width={69.3333}
                     height={69.3333}
                     stroke="black"
                     strokeWidth={0.506667}
                 />


<circle
                     cx={40}
                     cy={40}
                     r={15.3333}
                     stroke="black"
                     strokeWidth={0.506667}
                 />


<circle cx={40} cy={40} r={22} stroke="black" strokeWidth={0.506667}/>


<circle
                     cx={40}
                     cy={40}
                     r={34.6667}
                     stroke="black"
                     strokeWidth={0.506667}
                 />


</g>


<rect
                 x={0.253333}
                 y={0.253333}
                 width={79.4933}
                 height={79.4933}
                 rx={17.08}
                 stroke="black"
                 strokeWidth={0.506667}
             />


<defs>


<clipPath id="clip0_202_147">


<rect width={80} height={80} rx={17.3333} fill="white"/>


</clipPath>


</defs>


</svg>

}
title="AI metrics explorer"
kind="secondary"
>
A sample app that uses LiveSession's API and AI.

</GuideCard>

</GuideCard.List> 
/}
{/
/}
{/`,content:`App templates
The following templates can help you start your LiveSession app development.
The following templates can help you start your LiveSession app development.
<GuideCard.List>
<GuideCard
href="https://github.com/livesession/livesession-browser-samples/tree/master/react"
icon={
<svg
             xmlns="http://www.w3.org/2000/svg"
             fill="#61DBFB"
             width="1em"
             height="1em"
             viewBox="0 0 512 512"
         >
<title>{"ionicons-v5_logos"}</title>
<path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z" />
<path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z" />
</svg>
}
title="React"
kind="secondary"
>
React Router app template for building LiveSession apps.
</GuideCard>
<GuideCard.List>
<GuideCard
href="
[https://github.com/livesession/livesession-browser-samples/tree/master/react](https://github.com/livesession/livesession-browser-samples/tree/master/react)
https://github.com/livesession/livesession-browser-samples/tree/master/react
"
icon={

<svg
             xmlns="http://www.w3.org/2000/svg"
             fill="#61DBFB"
             width="1em"
             height="1em"
             viewBox="0 0 512 512"
         >


<title>
{"ionicons-v5_logos"}
</title>


<path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z" />


<path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z" />


</svg>

}
title="React"
kind="secondary"
>
React Router app template for building LiveSession apps.

</GuideCard>
<GuideCard
    href="https://github.com/livesession/livesession-browser-samples/tree/master/vue"
    icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="#42b883" width="1em" height="1em" viewBox="0 0 448 512">
            <path d="m356.9 64.3h-76.9l-56 88.6-48-88.6h-176l224 383.7 224-383.7zm-301.2 32h53.8l114.5 198.2 114.4-198.2h53.8l-168.2 288.2z" />
        </svg>
    }
    title="Vue"
    kind="secondary"
>
    Vue app template for building LiveSession apps.
</GuideCard>

<GuideCard
    href="https://github.com/livesession/livesession-browser-samples/tree/master/angular"
    icon={
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#f637e3"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
            {...props}
        >
            <title>{"ionicons-v5_logos"}</title>
            <polygon points="213.57 256 298.42 256 255.99 166.64 213.57 256" />
            <path d="M256,32,32,112,78.12,384,256,480l177.75-96L480,112Zm88,320-26.59-56H194.58L168,352H128L256,72,384,352Z" />
        </svg>
    }
    title="Angular"
    kind="secondary"
>
    Angular app template for building LiveSession apps.
</GuideCard>
</GuideCard.List>
</GuideCard.List>
{/* ## Sample apps TODO: in the future /}
{/ The following examples can help you with your app. /}
{/
<GuideCard.List>
<GuideCard
href="TODO"
icon={
<svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 80 80"
             fill="none"
         >
<g clipPath="url(#clip0_202_147)">
<path d="M0 55.3333H80" stroke="black" strokeWidth={0.506667}/>
<path d="M0 40H80" stroke="black" strokeWidth={0.506667}/>
<path d="M0 24.6667H80" stroke="black" strokeWidth={0.506667}/>
<path d="M55.3334 80V0" stroke="black" strokeWidth={0.506667}/>
<path d="M40 80V0" stroke="black" strokeWidth={0.506667}/>
<path d="M24.6666 80V0" stroke="black" strokeWidth={0.506667}/>
<path d="M80 80L0 0" stroke="black" strokeWidth={0.506667}/>
<path d="M0 80L80 0" stroke="black" strokeWidth={0.506667}/>
<rect
                     x={5.33337}
                     y={5.33333}
                     width={69.3333}
                     height={69.3333}
                     stroke="black"
                     strokeWidth={0.506667}
                 />
<circle
                     cx={40}
                     cy={40}
                     r={15.3333}
                     stroke="black"
                     strokeWidth={0.506667}
                 />
<circle cx={40} cy={40} r={22} stroke="black" strokeWidth={0.506667}/>
<circle
                     cx={40}
                     cy={40}
                     r={34.6667}
                     stroke="black"
                     strokeWidth={0.506667}
                 />
</g>
<rect
                 x={0.253333}
                 y={0.253333}
                 width={79.4933}
                 height={79.4933}
                 rx={17.08}
                 stroke="black"
                 strokeWidth={0.506667}
             />
<defs>
<clipPath id="clip0_202_147">
<rect width={80} height={80} rx={17.3333} fill="white"/>
</clipPath>
</defs>
</svg>
}
title="AI metrics explorer"
kind="secondary"
>
A sample app that uses LiveSession's API and AI.
</GuideCard>
</GuideCard.List> /}
{/
{/* ## Sample apps TODO: in the future 
/}
{/
/}
{/
 The following examples can help you with your app. 
/}
{/
/}
{/

<GuideCard.List>
<GuideCard
href="TODO"
icon={

<svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 80 80"
             fill="none"
         >


<g clipPath="url(#clip0_202_147)">


<path d="M0 55.3333H80" stroke="black" strokeWidth={0.506667}/>


<path d="M0 40H80" stroke="black" strokeWidth={0.506667}/>


<path d="M0 24.6667H80" stroke="black" strokeWidth={0.506667}/>


<path d="M55.3334 80V0" stroke="black" strokeWidth={0.506667}/>


<path d="M40 80V0" stroke="black" strokeWidth={0.506667}/>


<path d="M24.6666 80V0" stroke="black" strokeWidth={0.506667}/>


<path d="M80 80L0 0" stroke="black" strokeWidth={0.506667}/>


<path d="M0 80L80 0" stroke="black" strokeWidth={0.506667}/>


<rect
                     x={5.33337}
                     y={5.33333}
                     width={69.3333}
                     height={69.3333}
                     stroke="black"
                     strokeWidth={0.506667}
                 />


<circle
                     cx={40}
                     cy={40}
                     r={15.3333}
                     stroke="black"
                     strokeWidth={0.506667}
                 />


<circle cx={40} cy={40} r={22} stroke="black" strokeWidth={0.506667}/>


<circle
                     cx={40}
                     cy={40}
                     r={34.6667}
                     stroke="black"
                     strokeWidth={0.506667}
                 />


</g>


<rect
                 x={0.253333}
                 y={0.253333}
                 width={79.4933}
                 height={79.4933}
                 rx={17.08}
                 stroke="black"
                 strokeWidth={0.506667}
             />


<defs>


<clipPath id="clip0_202_147">


<rect width={80} height={80} rx={17.3333} fill="white"/>


</clipPath>


</defs>


</svg>

}
title="AI metrics explorer"
kind="secondary"
>
A sample app that uses LiveSession's API and AI.

</GuideCard>

</GuideCard.List> 
/}
{/
/}
{/`},{category:"",path:"/docs/api/quickstart#tooling-todo-in-the-future",title:"Tooling TODO: in the future",description:`Tooling TODO: in the future
Explore the available tools and references.
Explore the available tools and references.
<GuideCard.List>
<GuideCard
href="https://storybook.livesession.io"
icon={<IconCode/>}
title="qx"
kind="secondary"
>
Experimental query language for product analytics.
</GuideCard>
</GuideCard.List> */}
<GuideCard.List>
<GuideCard
href="
[https://storybook.livesession.io](https://storybook.livesession.io)
https://storybook.livesession.io
"
icon={
<IconCode/>
}
title="qx"
kind="secondary"
>
Experimental query language for product analytics.

</GuideCard>

</GuideCard.List> */}`,content:`Tooling TODO: in the future
Explore the available tools and references.
Explore the available tools and references.
<GuideCard.List>
<GuideCard
href="https://storybook.livesession.io"
icon={<IconCode/>}
title="qx"
kind="secondary"
>
Experimental query language for product analytics.
</GuideCard>
</GuideCard.List> */}
<GuideCard.List>
<GuideCard
href="
[https://storybook.livesession.io](https://storybook.livesession.io)
https://storybook.livesession.io
"
icon={
<IconCode/>
}
title="qx"
kind="secondary"
>
Experimental query language for product analytics.

</GuideCard>

</GuideCard.List> */}`},{category:"",path:"/docs/api/authentication",title:"LiveSession API authentication",description:`LiveSession API authentication
Learn how to start make your first LiveSession API request.
Learn how to start make your first LiveSession API request.
Learn how to start make your first LiveSession API request.
You can interact with the API through HTTP requests from any language, via our official Node.js library, or a via raw HTTP requests.
You can interact with the API through HTTP requests from any language, via our official Node.js library, or a via raw HTTP requests.
To install the official Node.js bindings, run the following command:
To install the official Node.js bindings, run the following command:
npm install livesession`,content:`LiveSession API authentication
Learn how to start make your first LiveSession API request.
Learn how to start make your first LiveSession API request.
Learn how to start make your first LiveSession API request.
You can interact with the API through HTTP requests from any language, via our official Node.js library, or a via raw HTTP requests.
You can interact with the API through HTTP requests from any language, via our official Node.js library, or a via raw HTTP requests.
To install the official Node.js bindings, run the following command:
To install the official Node.js bindings, run the following command:
npm install livesession`},{category:"",path:"/docs/api/authentication#authentication",title:"Authentication",description:`Authentication
The LiveSession API uses Personal Acesss Tokens (PAT) for authentication. You can create PAT inside LiveSession settings
and next follow below steps:
The LiveSession API uses Personal Acesss Tokens (PAT) for authentication. You can create PAT inside 
[LiveSession settings](https://app.livesession.io/app/settings/api?tab=api_tokens)
LiveSession settings

and next follow below steps:
Click API Tokens from left menuIn the upper-right corner of API Tokens page, click the creation buttonGive your token a descriptive nameSelect the website you want to access through the REST APISelect the scopes you'd like to grant this tokenAt the end click on confirm button
Click API Tokens from left menu
Click API Tokens from left menu
Click 
API Tokens
 from left menu
In the upper-right corner of API Tokens page, click the creation button
In the upper-right corner of API Tokens page, click the creation button
In the upper-right corner of API Tokens page, click the creation button
Give your token a descriptive name
Give your token a descriptive name
Give your token a descriptive name
Select the website you want to access through the REST API
Select the website you want to access through the REST API
Select the website you want to access through the REST API
Select the scopes you'd like to grant this token
Select the scopes you'd like to grant this token
Select the scopes you'd like to grant this token
At the end click on confirm button
At the end click on confirm button
At the end click on confirm button
Remember that your API key is a secret! Do not share it with others or expose it in any client-side code (browsers, apps).
Remember that your API key is a secret!
Remember that your API key is a secret!
 Do not share it with others or expose it in any client-side code (browsers, apps).
Production requests must be routed through your own backend server where your API key can be securely loaded from an environment variable or key management service.
Production requests must be routed through your own backend server where your API key can be securely loaded from an environment variable or key management service.
All API requests should include your API key in an Authorization HTTP header as follows:
All API requests should include your API key in an Authorization HTTP header as follows:
Authorization: Bearer $LIVESESSION_PAT`,content:`Authentication
The LiveSession API uses Personal Acesss Tokens (PAT) for authentication. You can create PAT inside LiveSession settings
and next follow below steps:
The LiveSession API uses Personal Acesss Tokens (PAT) for authentication. You can create PAT inside 
[LiveSession settings](https://app.livesession.io/app/settings/api?tab=api_tokens)
LiveSession settings

and next follow below steps:
Click API Tokens from left menuIn the upper-right corner of API Tokens page, click the creation buttonGive your token a descriptive nameSelect the website you want to access through the REST APISelect the scopes you'd like to grant this tokenAt the end click on confirm button
Click API Tokens from left menu
Click API Tokens from left menu
Click 
API Tokens
 from left menu
In the upper-right corner of API Tokens page, click the creation button
In the upper-right corner of API Tokens page, click the creation button
In the upper-right corner of API Tokens page, click the creation button
Give your token a descriptive name
Give your token a descriptive name
Give your token a descriptive name
Select the website you want to access through the REST API
Select the website you want to access through the REST API
Select the website you want to access through the REST API
Select the scopes you'd like to grant this token
Select the scopes you'd like to grant this token
Select the scopes you'd like to grant this token
At the end click on confirm button
At the end click on confirm button
At the end click on confirm button
Remember that your API key is a secret! Do not share it with others or expose it in any client-side code (browsers, apps).
Remember that your API key is a secret!
Remember that your API key is a secret!
 Do not share it with others or expose it in any client-side code (browsers, apps).
Production requests must be routed through your own backend server where your API key can be securely loaded from an environment variable or key management service.
Production requests must be routed through your own backend server where your API key can be securely loaded from an environment variable or key management service.
All API requests should include your API key in an Authorization HTTP header as follows:
All API requests should include your API key in an Authorization HTTP header as follows:
Authorization: Bearer $LIVESESSION_PAT`},{category:"",path:"/docs/api/authentication#making-requests",title:"Making requests",description:`Making requests
You can paste the command below into your terminal to run your first API request.
Make sure to replace $LIVESESSION_PAT with your secret PAT.
You can paste the command below into your terminal to run your first API request.
Make sure to replace 
$LIVESESSION_PAT
 with your secret PAT.
Node.jsGoCurlimport livesession from "livesession";

const ls = new livesession(
    livesession.optionApikey(process.env.LIVESESSION_PAT)
)

const sessions = await ls.sessions.list()package main

import (
    "context"
    "fmt"
    "log"
    lsClient "go.livesession.dev/livesession-go/client"
)

func main() {
    ls := lsClient.New(lsClient.WithApiKey(os.Getenv("LIVESESSION_PAT")))
    
    sessions, err := ls.Sessions.List(context.Background())
}curl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
Node.js
Node.js
Go
Go
Curl
Curl
import livesession from "livesession";

const ls = new livesession(
    livesession.optionApikey(process.env.LIVESESSION_PAT)
)

const sessions = await ls.sessions.list()
import livesession from "livesession";

const ls = new livesession(
    livesession.optionApikey(process.env.LIVESESSION_PAT)
)

const sessions = await ls.sessions.list()
package main

import (
    "context"
    "fmt"
    "log"
    lsClient "go.livesession.dev/livesession-go/client"
)

func main() {
    ls := lsClient.New(lsClient.WithApiKey(os.Getenv("LIVESESSION_PAT")))
    
    sessions, err := ls.Sessions.List(context.Background())
}
package main

import (
    "context"
    "fmt"
    "log"
    lsClient "go.livesession.dev/livesession-go/client"
)

func main() {
    ls := lsClient.New(lsClient.WithApiKey(os.Getenv("LIVESESSION_PAT")))
    
    sessions, err := ls.Sessions.List(context.Background())
}
curl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
curl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"`,content:`Making requests
You can paste the command below into your terminal to run your first API request.
Make sure to replace $LIVESESSION_PAT with your secret PAT.
You can paste the command below into your terminal to run your first API request.
Make sure to replace 
$LIVESESSION_PAT
 with your secret PAT.
Node.jsGoCurlimport livesession from "livesession";

const ls = new livesession(
    livesession.optionApikey(process.env.LIVESESSION_PAT)
)

const sessions = await ls.sessions.list()package main

import (
    "context"
    "fmt"
    "log"
    lsClient "go.livesession.dev/livesession-go/client"
)

func main() {
    ls := lsClient.New(lsClient.WithApiKey(os.Getenv("LIVESESSION_PAT")))
    
    sessions, err := ls.Sessions.List(context.Background())
}curl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
Node.js
Node.js
Go
Go
Curl
Curl
import livesession from "livesession";

const ls = new livesession(
    livesession.optionApikey(process.env.LIVESESSION_PAT)
)

const sessions = await ls.sessions.list()
import livesession from "livesession";

const ls = new livesession(
    livesession.optionApikey(process.env.LIVESESSION_PAT)
)

const sessions = await ls.sessions.list()
package main

import (
    "context"
    "fmt"
    "log"
    lsClient "go.livesession.dev/livesession-go/client"
)

func main() {
    ls := lsClient.New(lsClient.WithApiKey(os.Getenv("LIVESESSION_PAT")))
    
    sessions, err := ls.Sessions.List(context.Background())
}
package main

import (
    "context"
    "fmt"
    "log"
    lsClient "go.livesession.dev/livesession-go/client"
)

func main() {
    ls := lsClient.New(lsClient.WithApiKey(os.Getenv("LIVESESSION_PAT")))
    
    sessions, err := ls.Sessions.List(context.Background())
}
curl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"
curl https://api.livesession.io/v1/sessions \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $LIVESESSION_PAT"`},{category:"",path:"/docs/api/authentication#rate-limits",title:"Rate limits",description:`Rate limits
Note that by default all tokens are set to 2 Queries Per Second (QPS). This is a per token limit.
Note that by default all tokens are set to 2 Queries Per Second (QPS). This is a per token limit.`,content:`Rate limits
Note that by default all tokens are set to 2 Queries Per Second (QPS). This is a per token limit.
Note that by default all tokens are set to 2 Queries Per Second (QPS). This is a per token limit.`},{category:"",path:"/docs/api/access-scopes",title:"LiveSession API access scopes",description:`LiveSession API access scopes
Learn about the access scopes required to use the LiveSession API.
Learn about the access scopes required to use the LiveSession API.
All API requests needs access to specific scopes during the authorization process.
This guide provides a list of available access scopes for LiveSession APIs.
All API requests needs access to specific scopes during the authorization process.
This guide provides a list of available access scopes for LiveSession APIs.`,content:`LiveSession API access scopes
Learn about the access scopes required to use the LiveSession API.
Learn about the access scopes required to use the LiveSession API.
All API requests needs access to specific scopes during the authorization process.
This guide provides a list of available access scopes for LiveSession APIs.
All API requests needs access to specific scopes during the authorization process.
This guide provides a list of available access scopes for LiveSession APIs.`},{category:"",path:"/docs/api/access-scopes#how-it-works",title:"How it works",description:`How it works
Authorization is the process of giving permissions for tokens.
When you request an access token, you can specify the scopes that you want to grant to the token.
The token will have access to the resources and actions allowed by the scopes.
[Authorization](https://en.wikipedia.org/wiki/Authorization)
Authorization
 is the process of giving permissions for tokens.
When you request an access token, you can specify the scopes that you want to grant to the token.
The token will have access to the resources and actions allowed by the scopes.`,content:`How it works
Authorization is the process of giving permissions for tokens.
When you request an access token, you can specify the scopes that you want to grant to the token.
The token will have access to the resources and actions allowed by the scopes.
[Authorization](https://en.wikipedia.org/wiki/Authorization)
Authorization
 is the process of giving permissions for tokens.
When you request an access token, you can specify the scopes that you want to grant to the token.
The token will have access to the resources and actions allowed by the scopes.`},{category:"",path:"/docs/api/access-scopes#access-scopes",title:"Access scopes",description:`Access scopes
The following table lists the available access scopes for the LiveSession API:
The following table lists the available access scopes for the LiveSession API:
ScopeDescriptionusers.sessions:readRead user sessions list.websites:write, websites:readRead and write websites data.alerts:write, alerts:readRead and write alerts data.webhooks:write, webhooks:readRead and write webhooks data.funnels:write, funnels:readRead and write funnels data.metrics:write, metrics:readRead and write metrics data.dashboard:write, dashboard:readRead and write dashboard data.
ScopeDescription
ScopeDescription
Scope
Scope
Scope
Description
Description
Description
users.sessions:readRead user sessions list.
users.sessions:read
users.sessions:read
users.sessions:read
Read user sessions list.
Read user sessions list.
Read user sessions list.
websites:write, websites:readRead and write websites data.
websites:write, websites:read
websites:write, websites:read
websites:write
, 
websites:read
Read and write websites data.
Read and write websites data.
Read and write websites data.
alerts:write, alerts:readRead and write alerts data.
alerts:write, alerts:read
alerts:write, alerts:read
alerts:write
, 
alerts:read
Read and write alerts data.
Read and write alerts data.
Read and write alerts data.
webhooks:write, webhooks:readRead and write webhooks data.
webhooks:write, webhooks:read
webhooks:write, webhooks:read
webhooks:write
, 
webhooks:read
Read and write webhooks data.
Read and write webhooks data.
Read and write webhooks data.
funnels:write, funnels:readRead and write funnels data.
funnels:write, funnels:read
funnels:write, funnels:read
funnels:write,
 
funnels:read
Read and write funnels data.
Read and write funnels data.
Read and write funnels data.
metrics:write, metrics:readRead and write metrics data.
metrics:write, metrics:read
metrics:write, metrics:read
metrics:write
, 
metrics:read
Read and write metrics data.
Read and write metrics data.
Read and write metrics data.
dashboard:write, dashboard:readRead and write dashboard data.
dashboard:write, dashboard:read
dashboard:write, dashboard:read
dashboard:write
, 
dashboard:read
Read and write dashboard data.
Read and write dashboard data.
Read and write dashboard data.`,content:`Access scopes
The following table lists the available access scopes for the LiveSession API:
The following table lists the available access scopes for the LiveSession API:
ScopeDescriptionusers.sessions:readRead user sessions list.websites:write, websites:readRead and write websites data.alerts:write, alerts:readRead and write alerts data.webhooks:write, webhooks:readRead and write webhooks data.funnels:write, funnels:readRead and write funnels data.metrics:write, metrics:readRead and write metrics data.dashboard:write, dashboard:readRead and write dashboard data.
ScopeDescription
ScopeDescription
Scope
Scope
Scope
Description
Description
Description
users.sessions:readRead user sessions list.
users.sessions:read
users.sessions:read
users.sessions:read
Read user sessions list.
Read user sessions list.
Read user sessions list.
websites:write, websites:readRead and write websites data.
websites:write, websites:read
websites:write, websites:read
websites:write
, 
websites:read
Read and write websites data.
Read and write websites data.
Read and write websites data.
alerts:write, alerts:readRead and write alerts data.
alerts:write, alerts:read
alerts:write, alerts:read
alerts:write
, 
alerts:read
Read and write alerts data.
Read and write alerts data.
Read and write alerts data.
webhooks:write, webhooks:readRead and write webhooks data.
webhooks:write, webhooks:read
webhooks:write, webhooks:read
webhooks:write
, 
webhooks:read
Read and write webhooks data.
Read and write webhooks data.
Read and write webhooks data.
funnels:write, funnels:readRead and write funnels data.
funnels:write, funnels:read
funnels:write, funnels:read
funnels:write,
 
funnels:read
Read and write funnels data.
Read and write funnels data.
Read and write funnels data.
metrics:write, metrics:readRead and write metrics data.
metrics:write, metrics:read
metrics:write, metrics:read
metrics:write
, 
metrics:read
Read and write metrics data.
Read and write metrics data.
Read and write metrics data.
dashboard:write, dashboard:readRead and write dashboard data.
dashboard:write, dashboard:read
dashboard:write, dashboard:read
dashboard:write
, 
dashboard:read
Read and write dashboard data.
Read and write dashboard data.
Read and write dashboard data.`},{category:"",path:"/docs/api/browser/introduction",title:"Introduction",description:`Introduction
<Subtitle>
    Learn how to start using LiveSession on browser.
</Subtitle>
This is the simplest way to get LiveSession up and running on browser environment. It only takes a few
minutes.
This is the simplest way to get LiveSession up and running on browser environment. It only takes a few
minutes.
Copy the snippet below and replace YOUR_TRACK_ID with your project's values.
Copy the snippet below and replace 
YOUR_TRACK_ID
 with your project's values.
Or, if you want to use window API then add below snippet within the <head> tags at the base of your product - ideally just before the closing </head> tag.
This ensures LiveSession loads on any page users visit.
Or, if you want to use 
window API
 then add below snippet within the 
<head>
 tags at the base of your product - ideally just before the closing 
</head>
 tag.
This ensures LiveSession loads on any page users visit.
You can find the snippet pre-filled with this data in your project settings.
You can find the snippet pre-filled with this data in 
[your project settings](https://app.livesession.io/app/settings/websites)
your project settings
.`,content:`Introduction
<Subtitle>
    Learn how to start using LiveSession on browser.
</Subtitle>
This is the simplest way to get LiveSession up and running on browser environment. It only takes a few
minutes.
This is the simplest way to get LiveSession up and running on browser environment. It only takes a few
minutes.
Copy the snippet below and replace YOUR_TRACK_ID with your project's values.
Copy the snippet below and replace 
YOUR_TRACK_ID
 with your project's values.
Or, if you want to use window API then add below snippet within the <head> tags at the base of your product - ideally just before the closing </head> tag.
This ensures LiveSession loads on any page users visit.
Or, if you want to use 
window API
 then add below snippet within the 
<head>
 tags at the base of your product - ideally just before the closing 
</head>
 tag.
This ensures LiveSession loads on any page users visit.
You can find the snippet pre-filled with this data in your project settings.
You can find the snippet pre-filled with this data in 
[your project settings](https://app.livesession.io/app/settings/websites)
your project settings
.`},{category:"",path:"/docs/api/browser/identification",title:"Identification",description:`Identification
<Subtitle>
    Learn how to identify users in your application.
</Subtitle>
To identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.
To identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.
Learn more about user browser methods here.
Learn more about user browser methods 
[here](/docs/api/browser/methods)
here
.`,content:`Identification
<Subtitle>
    Learn how to identify users in your application.
</Subtitle>
To identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.
To identify users, you can set a user data.
This is useful for tracking users across multiple devices and sessions.
Learn more about user browser methods here.
Learn more about user browser methods 
[here](/docs/api/browser/methods)
here
.`},{category:"",path:"/docs/api/browser/recording-conditions",title:"Recording conditions",description:`Recording conditions
Using newPageView method you can specify your own conditions as a trigger for a recording like:
Using 
newPageView
 method you can specify your own conditions as a trigger for a recording like:
above condition will be fulfilled when user click on element where path to DOM element contain .add-cart value.
above condition will be fulfilled when user click on element where path to 
[DOM](https://en.wikipedia.org/wiki/Document_Object_Model)
DOM
 element contain 
.add-cart
 value.`,content:`Recording conditions
Using newPageView method you can specify your own conditions as a trigger for a recording like:
Using 
newPageView
 method you can specify your own conditions as a trigger for a recording like:
above condition will be fulfilled when user click on element where path to DOM element contain .add-cart value.
above condition will be fulfilled when user click on element where path to 
[DOM](https://en.wikipedia.org/wiki/Document_Object_Model)
DOM
 element contain 
.add-cart
 value.`},{category:"",path:"/docs/api/browser/methods",title:"Methods",description:"Methods",content:"Methods"},{category:"",path:"/docs/api/browser/methods#init",title:"init",description:`init
This method is an entry point for LiveSession tracking script used to initialize tracking script on your website.
You can find your trackingID in LiveSession -> Settings -> Websites.
This method is an entry point for LiveSession tracking script used to initialize tracking script on your website.
You can find your 
trackingID
 in 
LiveSession
LiveSession
 -> 
Settings
Settings
 -> 
Websites
Websites
.
Type signture:
Type signture:
Type signture:
function ("init", trackingID: string, options?: InitOptions)
Examples:
Examples:
Examples:
with options:
with options:`,content:`init
This method is an entry point for LiveSession tracking script used to initialize tracking script on your website.
You can find your trackingID in LiveSession -> Settings -> Websites.
This method is an entry point for LiveSession tracking script used to initialize tracking script on your website.
You can find your 
trackingID
 in 
LiveSession
LiveSession
 -> 
Settings
Settings
 -> 
Websites
Websites
.
Type signture:
Type signture:
Type signture:
function ("init", trackingID: string, options?: InitOptions)
Examples:
Examples:
Examples:
with options:
with options:`},{category:"",path:"/docs/api/browser/methods#options-signature",title:"options signature:",description:`options signature:
interface InitOptions {
    // 	Your accountID. Automatically extracted from trackingID
    accountID?: string

    // Your websiteID. Automatically extracted from trackingID
    websiteID?: string

    // Enable global keystroke tracking
    keystrokes?: boolean

    // Set this to the highest-level hostname to record session across different subdomains on your site
    // (e.g. \`.your-domain.com\`)
    rootHostname?: string
}
More info about keystrokes you can find here.
More info about keystrokes you can find here.
More info about 
keystrokes
 you can find 
[here](https://help.livesession.io/en/articles/8825436-recording-user-s-keystrokes)
here
.`,content:`options signature:
interface InitOptions {
    // 	Your accountID. Automatically extracted from trackingID
    accountID?: string

    // Your websiteID. Automatically extracted from trackingID
    websiteID?: string

    // Enable global keystroke tracking
    keystrokes?: boolean

    // Set this to the highest-level hostname to record session across different subdomains on your site
    // (e.g. \`.your-domain.com\`)
    rootHostname?: string
}
More info about keystrokes you can find here.
More info about keystrokes you can find here.
More info about 
keystrokes
 you can find 
[here](https://help.livesession.io/en/articles/8825436-recording-user-s-keystrokes)
here
.`},{category:"",path:"/docs/api/browser/methods#identify",title:"identify",description:`identify
Identify user and custom data to session.
Identify user and custom data to session.
Type signture:
Type signture:
Type signture:
function("identify", data: IdentifyData)
Examples:
Examples:
Examples:
with params:
with params:`,content:`identify
Identify user and custom data to session.
Identify user and custom data to session.
Type signture:
Type signture:
Type signture:
function("identify", data: IdentifyData)
Examples:
Examples:
Examples:
with params:
with params:`},{category:"",path:"/docs/api/browser/methods#data-signature",title:"data signature:",description:`data signature:
interface IdentifyData {
    // Displays usernames in app
    // Maximum length: 128 characters
    name?: string

    // Displays user email
    // Maximum length: 128 characters
    email?: string

    // Displays user context data
    // Maximum length: 50 items
    params?: {[key: string]: string | number | boolean}
}
User's name and email will be the same across all of their sessions.
User's name and email will be the same across all of their sessions.
User's 
name
 and 
email
 will be the same across all of their sessions.`,content:`data signature:
interface IdentifyData {
    // Displays usernames in app
    // Maximum length: 128 characters
    name?: string

    // Displays user email
    // Maximum length: 128 characters
    email?: string

    // Displays user context data
    // Maximum length: 50 items
    params?: {[key: string]: string | number | boolean}
}
User's name and email will be the same across all of their sessions.
User's name and email will be the same across all of their sessions.
User's 
name
 and 
email
 will be the same across all of their sessions.`},{category:"",path:"/docs/api/browser/methods#track",title:"track",description:`track
This method allows you to send custom event that your users perform along with custom properties.
This method allows you to send 
[custom event](https://help.livesession.io/en/articles/8496404-custom-events)
custom event
 that your users perform along with custom properties.
Type signture:
Type signture:
Type signture:
function("track", event: string, properties?: EventProperties)
Examples:
Examples:
Examples:
with properties:
with properties:
without properties type suffix (not recommended):
without properties type suffix (not recommended):`,content:`track
This method allows you to send custom event that your users perform along with custom properties.
This method allows you to send 
[custom event](https://help.livesession.io/en/articles/8496404-custom-events)
custom event
 that your users perform along with custom properties.
Type signture:
Type signture:
Type signture:
function("track", event: string, properties?: EventProperties)
Examples:
Examples:
Examples:
with properties:
with properties:
without properties type suffix (not recommended):
without properties type suffix (not recommended):`},{category:"",path:"/docs/api/browser/methods#properties-signature",title:"properties signature:",description:`properties signature:
// Maximum length: 50 items
type EventProperties = TypedEventProperty | {[key: string]: string | number | boolean}

type TypedEventProperty =
    EventPropertyString |
    EventPropertyInt |
    EventPropertyFloat |
    EventPropertyBool
// String property value, eg. {plan_str: "premium"}
// Maximum length: 256 characters
type EventPropertyString = {[key: \`\${string}_str\`]: string }

// Int property value, eg. {seats_int: 2}
// Maximum length: int max. value
type EventPropertyInt = {[key: \`\${string}_int\`]: number }

// Float property value, eg. {total_float: 255.50}
// Maximum length: float max. value
type EventPropertyFloat = {[key: \`\${string}_float\`]: number }

// Bool property value, eg. {isPatron_bool: true}
type EventPropertyBool = {[key: \`\${string}_bool\`]: boolean }`,content:`properties signature:
// Maximum length: 50 items
type EventProperties = TypedEventProperty | {[key: string]: string | number | boolean}

type TypedEventProperty =
    EventPropertyString |
    EventPropertyInt |
    EventPropertyFloat |
    EventPropertyBool
// String property value, eg. {plan_str: "premium"}
// Maximum length: 256 characters
type EventPropertyString = {[key: \`\${string}_str\`]: string }

// Int property value, eg. {seats_int: 2}
// Maximum length: int max. value
type EventPropertyInt = {[key: \`\${string}_int\`]: number }

// Float property value, eg. {total_float: 255.50}
// Maximum length: float max. value
type EventPropertyFloat = {[key: \`\${string}_float\`]: number }

// Bool property value, eg. {isPatron_bool: true}
type EventPropertyBool = {[key: \`\${string}_bool\`]: boolean }`},{category:"",path:"/docs/api/browser/methods#newpageview",title:"newPageView",description:`newPageView
Start recording user's visit and add it to session when conditions fulfilled. If session doesn't exists it also create new session.
Start recording user's visit and add it to session when conditions fulfilled. If session doesn't exists it also create new session.
Type signture:
Type signture:
Type signture:
function("newPageView", options?: NewPageViewOptions)
Examples:
Examples:
Examples:
with options:
with options:
with conditions:
with conditions:
with base URL:
with base URL:`,content:`newPageView
Start recording user's visit and add it to session when conditions fulfilled. If session doesn't exists it also create new session.
Start recording user's visit and add it to session when conditions fulfilled. If session doesn't exists it also create new session.
Type signture:
Type signture:
Type signture:
function("newPageView", options?: NewPageViewOptions)
Examples:
Examples:
Examples:
with options:
with options:
with conditions:
with conditions:
with base URL:
with base URL:`},{category:"",path:"/docs/api/browser/methods#options-signature",title:"options signature:",description:`options signature:
interface NewPageViewOptions {
    // Overwrite page title
    title?: string
    // Conditions for starting new pageView
    conditions?: NewPageViewCondition[]
    // Overwrite base URL on player
    baseURL?: string | ((base: string) => string)
}
interface NewPageViewCondition {
  // Use to specify condition based on user interaction (event).
  type: "event";
  // Event type
  name: EventType;
  // Operator for condition
  operator: Operator;
  // Event key
  key: EventKey;
  // Event value
  value: string;
}
type EventType =
  | "MouseClick" // Click on element
  | "RageClick" // Click on element multiple times
  | "ErrorClick" // Click on element with error
  | "Scroll" // Scroll on page
  | "WindowScroll" // Scroll on window
  | "MouseMove" // Move mouse on page
  | "TouchMove"; // Move touch on page

type Operator =
    "start" | // base.indexOf(value) == 0
    "contain" | // base.indexOf(value) > -1
    "end" | // base.indexOf(value) == base.length - value.length
    "eq" | // base == value
    "neq" | // base !== value
    "gt" | // base > value
    "gte" | // base >= value
    "lt" | // base < value
    "lte"; // base <= value

type EventKey =
    // Full DOM path to element
    // e.g \`body > #header > .link.add-cart[href="/cart"]\`
    "path" |
    // Element identificator
    // \`.link.add-cart[href="/cart"]\`
    "el" |
    // 	Text content of element
    // e.g \`Add to cart\`
    "txt";`,content:`options signature:
interface NewPageViewOptions {
    // Overwrite page title
    title?: string
    // Conditions for starting new pageView
    conditions?: NewPageViewCondition[]
    // Overwrite base URL on player
    baseURL?: string | ((base: string) => string)
}
interface NewPageViewCondition {
  // Use to specify condition based on user interaction (event).
  type: "event";
  // Event type
  name: EventType;
  // Operator for condition
  operator: Operator;
  // Event key
  key: EventKey;
  // Event value
  value: string;
}
type EventType =
  | "MouseClick" // Click on element
  | "RageClick" // Click on element multiple times
  | "ErrorClick" // Click on element with error
  | "Scroll" // Scroll on page
  | "WindowScroll" // Scroll on window
  | "MouseMove" // Move mouse on page
  | "TouchMove"; // Move touch on page

type Operator =
    "start" | // base.indexOf(value) == 0
    "contain" | // base.indexOf(value) > -1
    "end" | // base.indexOf(value) == base.length - value.length
    "eq" | // base == value
    "neq" | // base !== value
    "gt" | // base > value
    "gte" | // base >= value
    "lt" | // base < value
    "lte"; // base <= value

type EventKey =
    // Full DOM path to element
    // e.g \`body > #header > .link.add-cart[href="/cart"]\`
    "path" |
    // Element identificator
    // \`.link.add-cart[href="/cart"]\`
    "el" |
    // 	Text content of element
    // e.g \`Add to cart\`
    "txt";`},{category:"",path:"/docs/api/browser/methods#setcustomparams",title:"setCustomParams",description:`setCustomParams
Set custom properties to session.
Set custom properties to session.
Type signture:
Type signture:
Type signture:
function("setCustomParams", options: CustomParamsOptions)
Examples:
Examples:
Examples:`,content:`setCustomParams
Set custom properties to session.
Set custom properties to session.
Type signture:
Type signture:
Type signture:
function("setCustomParams", options: CustomParamsOptions)
Examples:
Examples:
Examples:`},{category:"",path:"/docs/api/browser/methods#options-signature",title:"options signature:",description:`options signature:
type CustomParamsOptions = {
    // Maximum length: 50 items
    params: {[key: string]: string | number | boolean}
}`,content:`options signature:
type CustomParamsOptions = {
    // Maximum length: 50 items
    params: {[key: string]: string | number | boolean}
}`},{category:"",path:"/docs/api/browser/methods#getsessionurl",title:"getSessionURL",description:`getSessionURL
Get URL to current session.
Get URL to current session.
Type signture:
Type signture:
Type signture:
function("getSessionURL", callback: GetSessionURLCallback)
Examples:
Examples:
Examples:
integration with other software:
integration with other software:`,content:`getSessionURL
Get URL to current session.
Get URL to current session.
Type signture:
Type signture:
Type signture:
function("getSessionURL", callback: GetSessionURLCallback)
Examples:
Examples:
Examples:
integration with other software:
integration with other software:`},{category:"",path:"/docs/api/browser/methods#callback-signature",title:"callback signature:",description:`callback signature:
type GetSessionURLCallback = (
    // https://app.livesession.io/app/session/{visitor_id}/{session_id}
    url: string,
    isNewSession: boolean
) => void`,content:`callback signature:
type GetSessionURLCallback = (
    // https://app.livesession.io/app/session/{visitor_id}/{session_id}
    url: string,
    isNewSession: boolean
) => void`},{category:"",path:"/docs/api/browser/methods#setoptions",title:"setOptions",description:`setOptions
Set options and init LiveSession tracking stript (if it's not inited).
You can find your website ID and account ID in LiveSession -> Settings -> Websites.
Set options and init LiveSession tracking stript (if it's not inited).
You can find your website ID and account ID in 
LiveSession -> Settings -> Websites
LiveSession -> Settings -> Websites
.
Type signture:
Type signture:
Type signture:
function ("setOptions", options: InitOptions)
Exmaples:
Exmaples:
Exmaples:
with keystrokes:
with keystrokes:`,content:`setOptions
Set options and init LiveSession tracking stript (if it's not inited).
You can find your website ID and account ID in LiveSession -> Settings -> Websites.
Set options and init LiveSession tracking stript (if it's not inited).
You can find your website ID and account ID in 
LiveSession -> Settings -> Websites
LiveSession -> Settings -> Websites
.
Type signture:
Type signture:
Type signture:
function ("setOptions", options: InitOptions)
Exmaples:
Exmaples:
Exmaples:
with keystrokes:
with keystrokes:`},{category:"",path:"/docs/api/browser/methods#invalidatesession",title:"invalidateSession",description:`invalidateSession
Close curent session.
Close curent session.
Type signture:
Type signture:
Type signture:
function ("invalidateSession")
Examples:
Examples:
Examples:`,content:`invalidateSession
Close curent session.
Close curent session.
Type signture:
Type signture:
Type signture:
function ("invalidateSession")
Examples:
Examples:
Examples:`},{category:"",path:"/docs/api/browser/methods#debug",title:"debug",description:`debug
Set debug logging mode.
Set debug logging mode.
Type signture:
Type signture:
Type signture:
function ("debug")
Examples:
Examples:
Examples:`,content:`debug
Set debug logging mode.
Set debug logging mode.
Type signture:
Type signture:
Type signture:
function ("debug")
Examples:
Examples:
Examples:`},{category:"",path:"/docs/api/browser/methods#log",title:"log",description:`log
Standard console.log() statements will be recorded by LiveSession,
but you have the option to log messages without adding additional noise to your users browser consoles.
Standard 
console.log()
 statements will be recorded by LiveSession,
but you have the option to log messages without adding additional noise to your users browser consoles.
Type signture:
Type signture:
Type signture:
function ("log", logLevel?: LogLevel, data?: object)
Examples:
Examples:
Examples:`,content:`log
Standard console.log() statements will be recorded by LiveSession,
but you have the option to log messages without adding additional noise to your users browser consoles.
Standard 
console.log()
 statements will be recorded by LiveSession,
but you have the option to log messages without adding additional noise to your users browser consoles.
Type signture:
Type signture:
Type signture:
function ("log", logLevel?: LogLevel, data?: object)
Examples:
Examples:
Examples:`},{category:"",path:"/docs/api/browser/methods#loglevel-signature",title:"logLevel signature:",description:`logLevel signature:
type LogLevel = "info" | "warn" | "error"`,content:`logLevel signature:
type LogLevel = "info" | "warn" | "error"`},{category:"",path:"/docs/api/browser/methods#off",title:"off",description:`off
Turn LiveSession script off.
Turn LiveSession script off.
Type signture:
Type signture:
Type signture:
function ("off")
Examples:
Examples:
Examples:`,content:`off
Turn LiveSession script off.
Turn LiveSession script off.
Type signture:
Type signture:
Type signture:
function ("off")
Examples:
Examples:
Examples:`},{category:"",path:"/docs/api/graphql/overview/introduction",title:"About the API Reference",description:`About the API Reference
A comprehensive reference of all objects, queries, and mutations supported by the LiveSession GraphQL API.
A comprehensive reference of all objects, queries, and mutations supported by the LiveSession GraphQL API.
A comprehensive reference of all objects, queries, and mutations supported by the LiveSession GraphQL API.`,content:`About the API Reference
A comprehensive reference of all objects, queries, and mutations supported by the LiveSession GraphQL API.
A comprehensive reference of all objects, queries, and mutations supported by the LiveSession GraphQL API.
A comprehensive reference of all objects, queries, and mutations supported by the LiveSession GraphQL API.`},{category:"",path:"/docs/api/graphql/overview/introduction#core-api-reference",title:"Core API Reference",description:`Core API Reference
Funnels API: Track and analyze user progression through defined stepsAPI reference: All other objects
- Funnels API: Track and analyze user progression through defined steps
Funnels API: Track and analyze user progression through defined steps
Funnels API
Funnels API
: Track and analyze user progression through defined steps
- API reference: All other objects
API reference: All other objects
API reference
API reference
: All other objects`,content:`Core API Reference
Funnels API: Track and analyze user progression through defined stepsAPI reference: All other objects
- Funnels API: Track and analyze user progression through defined steps
Funnels API: Track and analyze user progression through defined steps
Funnels API
Funnels API
: Track and analyze user progression through defined steps
- API reference: All other objects
API reference: All other objects
API reference
API reference
: All other objects`},{category:"",path:"/docs/api/graphql/overview/introduction#documentation-structure",title:"Documentation Structure",description:`Documentation Structure
Each section in the API reference explains:
Each section in the API reference explains:
Available object types and their relationshipsSupported queries and mutationsField definitions and their typesRequired and optional arguments
- Available object types and their relationships
Available object types and their relationships
Available object types and their relationships
- Supported queries and mutations
Supported queries and mutations
Supported queries and mutations
- Field definitions and their types
Field definitions and their types
Field definitions and their types
- Required and optional arguments
Required and optional arguments
Required and optional arguments`,content:`Documentation Structure
Each section in the API reference explains:
Each section in the API reference explains:
Available object types and their relationshipsSupported queries and mutationsField definitions and their typesRequired and optional arguments
- Available object types and their relationships
Available object types and their relationships
Available object types and their relationships
- Supported queries and mutations
Supported queries and mutations
Supported queries and mutations
- Field definitions and their types
Field definitions and their types
Field definitions and their types
- Required and optional arguments
Required and optional arguments
Required and optional arguments`},{category:"",path:"/docs/api/graphql/overview/introduction#getting-started",title:"Getting Started",description:`Getting Started
Before using the GraphQL API, make sure to:
Before using the GraphQL API, make sure to:
Review the authentication requirementsCheck access scopesUnderstand rate limitsSet up your API credentials
- Review the authentication requirements
Review the authentication requirements
Review the 
[authentication requirements](/docs/api/authentication)
authentication requirements
- Check access scopes
Check access scopes
Check 
[access scopes](/docs/api/access-scopes)
access scopes
- Understand rate limits
Understand rate limits
Understand 
[rate limits](/docs/api/authentication#rate-limits)
rate limits
- Set up your API credentials
Set up your API credentials
Set up your API credentials
For detailed information about each component, navigate through the sections in the sidebar menu.
For detailed information about each component, navigate through the sections in the sidebar menu.`,content:`Getting Started
Before using the GraphQL API, make sure to:
Before using the GraphQL API, make sure to:
Review the authentication requirementsCheck access scopesUnderstand rate limitsSet up your API credentials
- Review the authentication requirements
Review the authentication requirements
Review the 
[authentication requirements](/docs/api/authentication)
authentication requirements
- Check access scopes
Check access scopes
Check 
[access scopes](/docs/api/access-scopes)
access scopes
- Understand rate limits
Understand rate limits
Understand 
[rate limits](/docs/api/authentication#rate-limits)
rate limits
- Set up your API credentials
Set up your API credentials
Set up your API credentials
For detailed information about each component, navigate through the sections in the sidebar menu.
For detailed information about each component, navigate through the sections in the sidebar menu.`},{category:"",path:"/docs/api/webhooks/configuration",title:"Configuration",description:`Configuration
<Subtitle>
    Learn how to set up and configure webhooks in LiveSession.
</Subtitle>
Webhooks enable real-time communication between applications. When specific events happen, one app automatically sends data to another.
This integration streamlines workflows, syncs systems without constant polling, and integrates third-party services.
Webhooks
Webhooks
 enable real-time communication between applications. When specific events happen, one app automatically sends data to another.
This integration streamlines workflows, syncs systems without constant polling, and integrates third-party services.
LiveSession triggers webhooks via preset events, with ongoing expansion.
When a configured event occurs, our systems promptly notify your servers, delivering detailed event data.
LiveSession triggers 
[webhooks](https://en.wikipedia.org/wiki/Webhook)
webhooks
 via preset events, with ongoing expansion.
When a configured event occurs, our systems promptly notify your servers, delivering detailed event data.`,content:`Configuration
<Subtitle>
    Learn how to set up and configure webhooks in LiveSession.
</Subtitle>
Webhooks enable real-time communication between applications. When specific events happen, one app automatically sends data to another.
This integration streamlines workflows, syncs systems without constant polling, and integrates third-party services.
Webhooks
Webhooks
 enable real-time communication between applications. When specific events happen, one app automatically sends data to another.
This integration streamlines workflows, syncs systems without constant polling, and integrates third-party services.
LiveSession triggers webhooks via preset events, with ongoing expansion.
When a configured event occurs, our systems promptly notify your servers, delivering detailed event data.
LiveSession triggers 
[webhooks](https://en.wikipedia.org/wiki/Webhook)
webhooks
 via preset events, with ongoing expansion.
When a configured event occurs, our systems promptly notify your servers, delivering detailed event data.`},{category:"",path:"/docs/api/webhooks/configuration#quickstart",title:"Quickstart",description:`Quickstart
You can customize your setup within LiveSession's Settings menu. In the API > Webhooks section, oversee the URLs that facilitate LiveSession's interaction with your servers.
You can customize your setup within LiveSession's Settings menu. In the 
API > Webhooks
 section, oversee the URLs that facilitate LiveSession's interaction with your servers.
<Callout>
Note that you must have an Admin or Owner role to manage webhook settings.
</Callout>
Endpoints have the following attributes:
Endpoints have the following attributes:
<Steps>
    <Steps.Item>
        **URL:** Each endpoint is uniquely identified by its URL, utilizing either the HTTP or HTTPS scheme. This URL signifies the server address that LiveSession establishes communication with.
    </Steps.Item>
    <Steps.Item>
        **Website:** The 'Website' field refers to an identifier for your chosen LiveSession-enabled website.
    </Steps.Item>
</Steps>
Once you've configured your endpoints, you can begin assigning them to specific events using Alerts.
Once you've configured your endpoints, you can begin assigning them to specific events using 
[Alerts](/docs/capabilities/alerting)
Alerts
.`,content:`Quickstart
You can customize your setup within LiveSession's Settings menu. In the API > Webhooks section, oversee the URLs that facilitate LiveSession's interaction with your servers.
You can customize your setup within LiveSession's Settings menu. In the 
API > Webhooks
 section, oversee the URLs that facilitate LiveSession's interaction with your servers.
<Callout>
Note that you must have an Admin or Owner role to manage webhook settings.
</Callout>
Endpoints have the following attributes:
Endpoints have the following attributes:
<Steps>
    <Steps.Item>
        **URL:** Each endpoint is uniquely identified by its URL, utilizing either the HTTP or HTTPS scheme. This URL signifies the server address that LiveSession establishes communication with.
    </Steps.Item>
    <Steps.Item>
        **Website:** The 'Website' field refers to an identifier for your chosen LiveSession-enabled website.
    </Steps.Item>
</Steps>
Once you've configured your endpoints, you can begin assigning them to specific events using Alerts.
Once you've configured your endpoints, you can begin assigning them to specific events using 
[Alerts](/docs/capabilities/alerting)
Alerts
.`},{category:"",path:"/docs/api/webhooks/delivery",title:"Delivery",description:`Delivery
<Subtitle>
    Learn how LiveSession delivers webhook events to your endpoints.
</Subtitle>`,content:`Delivery
<Subtitle>
    Learn how LiveSession delivers webhook events to your endpoints.
</Subtitle>`},{category:"",path:"/docs/api/webhooks/delivery#overview",title:"Overview",description:`Overview
When an event ready for webhook transmission occurs within LiveSession, an event payload is crafted.
If you've set up endpoints for that specific event type, the payload gets lined up for delivery.
When an event ready for 
[webhook](https://en.wikipedia.org/wiki/Webhook)
webhook
 transmission occurs within LiveSession, an event payload is crafted.
If you've set up endpoints for that specific event type, the payload gets lined up for delivery.
These "trigger-ready" events encompass actions ideal for webhook interaction.
For instance, when a session event is created, it's trigger-ready.
These "trigger-ready" events encompass actions ideal for webhook interaction.
For instance, when a session event is created, it's trigger-ready.
Event delivery typically takes mere seconds, though a strict FIFO order isn't assured.
Given potential event volume, the webhook platform prioritizes throughput over rigid sequencing.
Event delivery typically takes mere seconds, though a strict 
[FIFO order](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics))
FIFO order
 isn't assured.
Given potential event volume, the webhook platform prioritizes throughput over rigid sequencing.
Once an event is dispatched, a payload signature is computed and included in the request.
The request sent to your chosen endpoint bears these details:
Once an event is dispatched, a payload signature is computed and included in the request.
The request sent to your chosen endpoint bears these details:
<Steps>
    <Steps.Item>
        HTTP method is \`POST\`
    </Steps.Item>
    <Steps.Item>
        Content-Type of the request body is \`application/json\`
    </Steps.Item>
    <Steps.Item>
        There will be a request header named \`LiveSession-Signature\` - this includes the request signature which the recipient should verify.
    </Steps.Item>
    <Steps.Item>
        Every request body will contain a JSON object with the following fields:
        <Steps>
            <Steps.Item>
                \`message_id\` - the message identifier
            </Steps.Item>
            <Steps.Item>
                \`webhook_id\` - the webhook identifier
            </Steps.Item>
            <Steps.Item>
                \`webhook_type\` - the webhook type
            </Steps.Item>
            <Steps.Item>
                \`api_version\` - the webhook API version
            </Steps.Item>
            <Steps.Item>
                \`account_id\` - the account identifier
            </Steps.Item>
            <Steps.Item>
                \`website_id\` - the website identifier
            </Steps.Item>
            <Steps.Item>
                \`created_at\` - the message creation timestamp
            </Steps.Item>
            <Steps.Item>
                \`payload\` - the event payload
            </Steps.Item>
        </Steps>
    </Steps.Item>
</Steps>
Below is a representation of the entire HTTP request:
Below is a representation of the entire HTTP request:
POST /webhooks HTTP/1.1
Host: example.com
Content-Type: application/json; charset=utf-8
LiveSession-Signature: /NLAt29+UdUod1lyzeWcbNigjzGfvtusP44dNKt4Q3U=
User-Agent: LiveSessionWebhooks/1.0

{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    },
    "event_name": "Error",
    "time": 1691161881,
    "count": 1,
    "value": "ProductCatalog: product is not valid"
  }
}`,content:`Overview
When an event ready for webhook transmission occurs within LiveSession, an event payload is crafted.
If you've set up endpoints for that specific event type, the payload gets lined up for delivery.
When an event ready for 
[webhook](https://en.wikipedia.org/wiki/Webhook)
webhook
 transmission occurs within LiveSession, an event payload is crafted.
If you've set up endpoints for that specific event type, the payload gets lined up for delivery.
These "trigger-ready" events encompass actions ideal for webhook interaction.
For instance, when a session event is created, it's trigger-ready.
These "trigger-ready" events encompass actions ideal for webhook interaction.
For instance, when a session event is created, it's trigger-ready.
Event delivery typically takes mere seconds, though a strict FIFO order isn't assured.
Given potential event volume, the webhook platform prioritizes throughput over rigid sequencing.
Event delivery typically takes mere seconds, though a strict 
[FIFO order](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics))
FIFO order
 isn't assured.
Given potential event volume, the webhook platform prioritizes throughput over rigid sequencing.
Once an event is dispatched, a payload signature is computed and included in the request.
The request sent to your chosen endpoint bears these details:
Once an event is dispatched, a payload signature is computed and included in the request.
The request sent to your chosen endpoint bears these details:
<Steps>
    <Steps.Item>
        HTTP method is \`POST\`
    </Steps.Item>
    <Steps.Item>
        Content-Type of the request body is \`application/json\`
    </Steps.Item>
    <Steps.Item>
        There will be a request header named \`LiveSession-Signature\` - this includes the request signature which the recipient should verify.
    </Steps.Item>
    <Steps.Item>
        Every request body will contain a JSON object with the following fields:
        <Steps>
            <Steps.Item>
                \`message_id\` - the message identifier
            </Steps.Item>
            <Steps.Item>
                \`webhook_id\` - the webhook identifier
            </Steps.Item>
            <Steps.Item>
                \`webhook_type\` - the webhook type
            </Steps.Item>
            <Steps.Item>
                \`api_version\` - the webhook API version
            </Steps.Item>
            <Steps.Item>
                \`account_id\` - the account identifier
            </Steps.Item>
            <Steps.Item>
                \`website_id\` - the website identifier
            </Steps.Item>
            <Steps.Item>
                \`created_at\` - the message creation timestamp
            </Steps.Item>
            <Steps.Item>
                \`payload\` - the event payload
            </Steps.Item>
        </Steps>
    </Steps.Item>
</Steps>
Below is a representation of the entire HTTP request:
Below is a representation of the entire HTTP request:
POST /webhooks HTTP/1.1
Host: example.com
Content-Type: application/json; charset=utf-8
LiveSession-Signature: /NLAt29+UdUod1lyzeWcbNigjzGfvtusP44dNKt4Q3U=
User-Agent: LiveSessionWebhooks/1.0

{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    },
    "event_name": "Error",
    "time": 1691161881,
    "count": 1,
    "value": "ProductCatalog: product is not valid"
  }
}`},{category:"",path:"/docs/api/webhooks/delivery#throttling",title:"Throttling",description:`Throttling
To prevent your servers from being overwhelmed or unintentionally participating in a service disruption on your webhook endpoint,
LiveSession limits the number of events sent for a given webhook to a maximum of 1000 per minute.
To prevent your servers from being overwhelmed or unintentionally participating in a service disruption on your webhook endpoint,
LiveSession limits the number of events sent for a given webhook to a maximum of 
1000 per minute
.
If you've configured an endpoint for a high-volume event flow, like a frequently triggered custom event during user sessions,
expect possible webhook delays.
When the number of events for an endpoint exceeds 1000 per minute, the extra events will be queued].
If you've configured an endpoint for a high-volume event flow, like a frequently triggered custom event during user sessions,
expect possible webhook delays.
When the number of events for an endpoint exceeds 
1000 per minute
, the extra events will be queued].
If the events happen really fast for a little while and then slow down, all the events might still arrive, but it could take longer than when they first happened.
But if the fast rate continues for a long time, some events might not be delivered.
If an event is undeliverable for 24 hours, it's treated as failed, and no more tries will be made.
If the events happen really fast for a little while and then slow down, all the events might still arrive, but it could take longer than when they first happened.
But if the fast rate continues for a long time, some events might not be delivered.
If an event is undeliverable for 
24 hours
, it's treated as 
failed
failed
, and no more tries will be made.
<Callout>
The limit of 1000 events per minute is per account.
</Callout>`,content:`Throttling
To prevent your servers from being overwhelmed or unintentionally participating in a service disruption on your webhook endpoint,
LiveSession limits the number of events sent for a given webhook to a maximum of 1000 per minute.
To prevent your servers from being overwhelmed or unintentionally participating in a service disruption on your webhook endpoint,
LiveSession limits the number of events sent for a given webhook to a maximum of 
1000 per minute
.
If you've configured an endpoint for a high-volume event flow, like a frequently triggered custom event during user sessions,
expect possible webhook delays.
When the number of events for an endpoint exceeds 1000 per minute, the extra events will be queued].
If you've configured an endpoint for a high-volume event flow, like a frequently triggered custom event during user sessions,
expect possible webhook delays.
When the number of events for an endpoint exceeds 
1000 per minute
, the extra events will be queued].
If the events happen really fast for a little while and then slow down, all the events might still arrive, but it could take longer than when they first happened.
But if the fast rate continues for a long time, some events might not be delivered.
If an event is undeliverable for 24 hours, it's treated as failed, and no more tries will be made.
If the events happen really fast for a little while and then slow down, all the events might still arrive, but it could take longer than when they first happened.
But if the fast rate continues for a long time, some events might not be delivered.
If an event is undeliverable for 
24 hours
, it's treated as 
failed
failed
, and no more tries will be made.
<Callout>
The limit of 1000 events per minute is per account.
</Callout>`},{category:"",path:"/docs/api/webhooks/delivery#retry-behavior",title:"Retry behavior",description:`Retry behavior
LiveSession attempts to deliver a given event to your webhook endpoint for up to 8 hours with an exponential backoff
in beetwen 1-10 minutes interval gap from the previous attempt.
LiveSession attempts to deliver a given event to your webhook endpoint for 
up to 8 hours
up to 8 hours
 with an exponential 
[backoff](https://en.wikipedia.org/wiki/Exponential_backoff)
backoff

in 
beetwen 1-10 minutes
 interval gap from the previous attempt.`,content:`Retry behavior
LiveSession attempts to deliver a given event to your webhook endpoint for up to 8 hours with an exponential backoff
in beetwen 1-10 minutes interval gap from the previous attempt.
LiveSession attempts to deliver a given event to your webhook endpoint for 
up to 8 hours
up to 8 hours
 with an exponential 
[backoff](https://en.wikipedia.org/wiki/Exponential_backoff)
backoff

in 
beetwen 1-10 minutes
 interval gap from the previous attempt.`},{category:"",path:"/docs/api/webhooks/verify",title:"Verify",description:`Verify
<Subtitle>
    Learn how to verify the authenticity of LiveSession webhook requests.
</Subtitle>`,content:`Verify
<Subtitle>
    Learn how to verify the authenticity of LiveSession webhook requests.
</Subtitle>`},{category:"",path:"/docs/api/webhooks/verify#quickstart",title:"Quickstart",description:`Quickstart
Before you proceed with responding to a webhook, it's crucial to ensure that the webhook originated from LiveSession.
This verification can be accomplished by calculating a digital signature.
Before you proceed with responding to a webhook, it's crucial to ensure that the webhook originated from LiveSession.
This verification can be accomplished by calculating a digital signature.
Every webhook request incorporates a base64-encoded HMAC-SHA256 signature included in LiveSession-Signature header.
This header is created using the webhook's secret in conjunction with the data transmitted in the request.
Every webhook request incorporates a base64-encoded HMAC-SHA256 signature included in 
LiveSession-Signature
 header.
This header is created using the webhook's secret in conjunction with the data transmitted in the request.
To compute the HMAC digest, follow below written algorithm:
To compute the HMAC digest, follow below written algorithm:
<Tabs items={["Node.js", "Python"]}>
<Tabs.Content value="Node.js">
\`\`\`js
import crypto from 'crypto';
<Tabs items={["Node.js", "Python"]}>
<Tabs.Content value="Node.js">
\`\`\`js
import crypto from 'crypto';
    // Your webhook secret key
    const secretKey = 'your_secret_key_here';

    // Received data from the webhook payload
    const receivedData = 'received_data_here';

    // Received base64-encoded HMAC signature from the webhook headers
    const receivedSignatureBase64 = 'received_signature_here'; // Replace with actual received signature

    // Function to compute HMAC-SHA256 signature and return base64-encoded result
    function computeHmacSha256Base64(data, secretKey) {
        const hmac = crypto.createHmac('sha256', secretKey);
        hmac.update(data);

        return hmac.digest('base64');
    }

    // Calculate the base64-encoded HMAC-SHA256 signature for the received data
    const calculatedSignatureBase64 = computeHmacSha256Base64(receivedData, secretKey);

    // Compare the received signature with the calculated signature
    if (receivedSignatureBase64 === calculatedSignatureBase64) {
        console.log('Webhook signature is valid. Request is authentic.');
    } else {
        console.log('Webhook signature is invalid. Request might be tampered.');
    }
    \`\`\`
</Tabs.Content>
<Tabs.Content value="Python">
    \`\`\`python
    import hmac
    import hashlib
    import base64

    # Your webhook secret key (convert to bytes if not already)
    secret_key = b'your_secret_key_here'

    # Received data from the webhook payload (convert to bytes if not already)
    received_data = b'received_data_here'

    # Received base64-encoded HMAC signature from the webhook headers
    received_signature_base64 = "received_signature_here"  # Replace with actual received signature

    # Function to compute HMAC-SHA256 signature and return base64-encoded result
    def compute_hmac_sha256_base64(data, secret_key):
        hashed = hmac.new(secret_key, data, hashlib.sha256)
        return base64.b64encode(hashed.digest()).decode('utf-8')

    # Calculate the base64-encoded HMAC-SHA256 signature for the received data
    calculated_signature_base64 = compute_hmac_sha256_base64(received_data, secret_key)

    # Compare the received signature with the calculated signature
    if received_signature_base64 == calculated_signature_base64:
        print("Webhook signature is valid. Request is authentic.")
    else:
        print("Webhook signature is invalid. Request might be tampered.")
    \`\`\`
</Tabs.Content>
</Tabs>`,content:`Quickstart
Before you proceed with responding to a webhook, it's crucial to ensure that the webhook originated from LiveSession.
This verification can be accomplished by calculating a digital signature.
Before you proceed with responding to a webhook, it's crucial to ensure that the webhook originated from LiveSession.
This verification can be accomplished by calculating a digital signature.
Every webhook request incorporates a base64-encoded HMAC-SHA256 signature included in LiveSession-Signature header.
This header is created using the webhook's secret in conjunction with the data transmitted in the request.
Every webhook request incorporates a base64-encoded HMAC-SHA256 signature included in 
LiveSession-Signature
 header.
This header is created using the webhook's secret in conjunction with the data transmitted in the request.
To compute the HMAC digest, follow below written algorithm:
To compute the HMAC digest, follow below written algorithm:
<Tabs items={["Node.js", "Python"]}>
<Tabs.Content value="Node.js">
\`\`\`js
import crypto from 'crypto';
<Tabs items={["Node.js", "Python"]}>
<Tabs.Content value="Node.js">
\`\`\`js
import crypto from 'crypto';
    // Your webhook secret key
    const secretKey = 'your_secret_key_here';

    // Received data from the webhook payload
    const receivedData = 'received_data_here';

    // Received base64-encoded HMAC signature from the webhook headers
    const receivedSignatureBase64 = 'received_signature_here'; // Replace with actual received signature

    // Function to compute HMAC-SHA256 signature and return base64-encoded result
    function computeHmacSha256Base64(data, secretKey) {
        const hmac = crypto.createHmac('sha256', secretKey);
        hmac.update(data);

        return hmac.digest('base64');
    }

    // Calculate the base64-encoded HMAC-SHA256 signature for the received data
    const calculatedSignatureBase64 = computeHmacSha256Base64(receivedData, secretKey);

    // Compare the received signature with the calculated signature
    if (receivedSignatureBase64 === calculatedSignatureBase64) {
        console.log('Webhook signature is valid. Request is authentic.');
    } else {
        console.log('Webhook signature is invalid. Request might be tampered.');
    }
    \`\`\`
</Tabs.Content>
<Tabs.Content value="Python">
    \`\`\`python
    import hmac
    import hashlib
    import base64

    # Your webhook secret key (convert to bytes if not already)
    secret_key = b'your_secret_key_here'

    # Received data from the webhook payload (convert to bytes if not already)
    received_data = b'received_data_here'

    # Received base64-encoded HMAC signature from the webhook headers
    received_signature_base64 = "received_signature_here"  # Replace with actual received signature

    # Function to compute HMAC-SHA256 signature and return base64-encoded result
    def compute_hmac_sha256_base64(data, secret_key):
        hashed = hmac.new(secret_key, data, hashlib.sha256)
        return base64.b64encode(hashed.digest()).decode('utf-8')

    # Calculate the base64-encoded HMAC-SHA256 signature for the received data
    calculated_signature_base64 = compute_hmac_sha256_base64(received_data, secret_key)

    # Compare the received signature with the calculated signature
    if received_signature_base64 == calculated_signature_base64:
        print("Webhook signature is valid. Request is authentic.")
    else:
        print("Webhook signature is invalid. Request might be tampered.")
    \`\`\`
</Tabs.Content>
</Tabs>`},{category:"",path:"/docs/api/webhooks/type-session-event",title:"session.event",description:`session.event
Triggers when an event from session is handled. Currently supported events are:
JSError, NetError, ErrorClick, RageClick and Custom
Triggers when an event from session is handled. Currently supported events are:

JSError
, 
NetError
, 
ErrorClick
, 
RageClick
 and 
Custom`,content:`session.event
Triggers when an event from session is handled. Currently supported events are:
JSError, NetError, ErrorClick, RageClick and Custom
Triggers when an event from session is handled. Currently supported events are:

JSError
, 
NetError
, 
ErrorClick
, 
RageClick
 and 
Custom`},{category:"",path:"/docs/api/webhooks/type-session-event#jserror",title:"JSError",description:`JSError
Triggers when a JS error is handled.
Triggers when a JS error is handled.
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "JSError",
    "value": "ProductCatalog: product is not valid",
    "count": 1,
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}`,content:`JSError
Triggers when a JS error is handled.
Triggers when a JS error is handled.
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "JSError",
    "value": "ProductCatalog: product is not valid",
    "count": 1,
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}`},{category:"",path:"/docs/api/webhooks/type-session-event#neterror",title:"NetError",description:`NetError
Triggers when a network request error is handled.
Triggers when a network request error is handled.
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "NetError",
    "method": "GET",
    "url": "https://api.livesession.io/products/1",
    "status": 500,
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}`,content:`NetError
Triggers when a network request error is handled.
Triggers when a network request error is handled.
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "NetError",
    "method": "GET",
    "url": "https://api.livesession.io/products/1",
    "status": 500,
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}`},{category:"",path:"/docs/api/webhooks/type-session-event#errorclick",title:"ErrorClick",description:`ErrorClick
Triggers when an error click is handled.
Triggers when an error click is handled.
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "ErrorClick",
    "messsage": "product is not defined",
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}`,content:`ErrorClick
Triggers when an error click is handled.
Triggers when an error click is handled.
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "ErrorClick",
    "messsage": "product is not defined",
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}`},{category:"",path:"/docs/api/webhooks/type-session-event#rageclick",title:"RageClick",description:`RageClick
Triggers when a rage click is handled.
Triggers when a rage click is handled.
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "RageClick",
    "clicks": 5,
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}`,content:`RageClick
Triggers when a rage click is handled.
Triggers when a rage click is handled.
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "RageClick",
    "clicks": 5,
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}`},{category:"",path:"/docs/api/webhooks/type-session-event#custom",title:"Custom",description:`Custom
Triggers when a custom event is handled.
These events are made during recording through the ls.track('EVENT') using Browser API function.
The payload includes event specifics and potential validation errors for added properties.
Triggers when a 
[custom event](https://help.livesession.io/en/articles/8496404-custom-events)
custom event
 is handled.
These events are made during recording through the 
ls.track('EVENT')
 using Browser API function.
The payload includes event specifics and potential validation errors for added properties.
The properties field is a map with varying value types.
Value type depends on the property key. For instance, _str suffixed keys hold *string* values and _bool suffixed keys contain *boolean* values.
Additional details are available in the knowledge base.
The properties field is a map with varying value types.
Value type depends on the property key. For instance, 
_str
 suffixed keys hold 
*string*
 values and 
_bool
 suffixed keys contain 
*boolean*
 values.
Additional details are available in the knowledge base.
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "Custom",
    "name": "Product added",
    "properties": {
      "product_id_int": 1,
      "product_name_str": "Product 1"
    },
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}`,content:`Custom
Triggers when a custom event is handled.
These events are made during recording through the ls.track('EVENT') using Browser API function.
The payload includes event specifics and potential validation errors for added properties.
Triggers when a 
[custom event](https://help.livesession.io/en/articles/8496404-custom-events)
custom event
 is handled.
These events are made during recording through the 
ls.track('EVENT')
 using Browser API function.
The payload includes event specifics and potential validation errors for added properties.
The properties field is a map with varying value types.
Value type depends on the property key. For instance, _str suffixed keys hold *string* values and _bool suffixed keys contain *boolean* values.
Additional details are available in the knowledge base.
The properties field is a map with varying value types.
Value type depends on the property key. For instance, 
_str
 suffixed keys hold 
*string*
 values and 
_bool
 suffixed keys contain 
*boolean*
 values.
Additional details are available in the knowledge base.
{
  "message_id": "d5932de4-a8da-4546-4439-3c640ba8dc05",
  "webhook_id": "542de45",
  "webhook_type": "session.event",
  "api_version": "v1.0",
  "account_id": "3ca3b1b",
  "website_id": "8d53ea3",
  "created_at": 1691161881,
  "payload": {
    "event_name": "Custom",
    "name": "Product added",
    "properties": {
      "product_id_int": 1,
      "product_name_str": "Product 1"
    },
    "time": 16911618810,
    "visitor": {
      "id": "e4d5932d-4439-4546-a8da-a8d40bc053c6",
      "name": "John Doe",
      "email": "john.doe@livesession.io",
      "params": [
        {
          "name": "plan",
          "value": "pro"
        }
      ],
      "geolocation": {
        "country_code": "PL",
        "city": "Wroclaw",
        "region": "Dolnoslaskie"
      }
    }
  }
}`}],t=null,n=["How to install xyd?","How to generate API Docs?","How to built-in components?"],s={docs:e,cloudConfig:t,suggestions:n};export{s as default};
