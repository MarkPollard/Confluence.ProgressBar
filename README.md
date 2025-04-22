# Forge Progress Bar
This project contains a Forge app written in Javascript that displays a Progress Bar in a Confluence macro. 

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start
- Install top-level dependencies:
```
npm install
```

- Install dependencies inside of the `static/progressbar` directory:
```
npm install
```

- Modify your app by editing the files in `static/progressbar/src/`.

- Build your app (inside of the `static/progressbar` directory):
```
npm run build
```

- Login to Atlasian
```
forge login
```
? Enter your email: xxx@xxx.com  
Next, enter your Atlassian API token. If you don't have a token, visit this URL to create one:  
https://id.atlassian.com/manage/api-tokens  
? Enter your Atlassian API token: [hidden]  
√ Logged in as xxx.  

- Deploy your app by running:
```
forge deploy -e production
```

- Install your app in an Atlassian site by running:
```
forge install -e production
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
