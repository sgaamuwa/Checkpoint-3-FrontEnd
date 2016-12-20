# Ebyokola Angular Application
This is an Angular 2 application, for creating bucketlists and their items.

##Description
The application is built to satisfy the Checkpoint 3 parameters as stipulated by Andela. 
It consumes an API, that can be found at http://ebyokola.herokuapp.com. 

##Project Overview
Users can register and login to create Bucketlists.
 * Each bucketlist has its own items specific to it.
 * No two bucketlists can have the same name. 
 * No two items in a specific bucketlist can have the same name.
 * Bucketlists can have their names edited, and so can the items.
 * Each item can be marked as done when completed. 

![Demo Image](/docs/Screen1.png?raw=true)

![Demo Image2](/docs/Screen2.png?raw=true)

##Installation
To install Ebyokola on your local machine: 
* Clone the repository onto your machine
    ```
        $git clone https://github.com/andela-sgaamuwa/Checkpoint-3-FrontEnd.git
    ```
    This assumes that you have git already installed on your local machine
* Once cloned, one requires to have node installed on their machine
    ```
        $brew install node
    ```
* Move to the root directory of the Files and run the command
    ```
        npm install
    ```
    To install the required requirements
* After that run ```npm start``` to run the application 