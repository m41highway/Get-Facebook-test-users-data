# Get-Facebook-test-users-data

## Description
This project demostrates how to retrieve data of test users from Facebook. It includes App registation, authentication, create test user, similuate test user activities on Facebook, and the codes to retrieve the data.

## Register Facebook Developer account
Login to [Facebook Developer](https://developers.facebook.com) and create a new App

## App Id
Enter the App just created. In the Dashboard, record the AppId
![Facebook Developer Console Dashboard](https://github.com/m41highway/Get-Facebook-test-users-data/blob/master/images/Dashboard.png)

## Access Token
Navigate to [Facebook Developer Tool](https://developers.facebook.com/tools/accesstoken/) to get the App Access Token

## Create Test User
1. Nagivate to Roles > Test Users to create test users

2. Click the Edit button and set the password for the test users.
![Set Password](https://github.com/m41highway/Get-Facebook-test-users-data/blob/master/images/TestUsers.png)

## Login as a test user
![Test user Facebook](https://github.com/m41highway/Get-Facebook-test-users-data/blob/master/images/FacebookPosts.png)

## Create posts
Login as the test user and create some posts
![Test user posts](https://github.com/m41highway/Get-Facebook-test-users-data/blob/master/images/FacebookTestUserPosts.png)

## Aggragate and retrieve user posts
Run the app and get the posts as a string

```
node app.js
```

![Result](https://github.com/m41highway/Get-Facebook-test-users-data/blob/master/images/Result.png)


