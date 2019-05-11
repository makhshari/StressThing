# StressThing
a software testing platform to perform stress test on web of things
# Description
User should define each things in their Web of Things system based on W3C standard for WoT things.
W3C [a link](https://www.w3.org/) 
This standard is defined explicitly in [a link]( https://www.w3.org/TR/wot-thing-description/)
# Installation
```bash
npm install
```
# Usage
the modern ES2017 code is written in ./src directory. You can compile it by doing this command:
```bash
npm run build #you need to run this command if you have changed any code in ./src directory
```
This will save JavaScript ES5 code version in ./public directory. To avoid compatibility issues the ES5 code will be used for execution.

To execute the code you have to run this command:
```bash
npm run execute #This will create the JSON file as the input for the test tool
```
the JSON file is named 'Tool_Input.json'. You can view it after running the above command.

Now you have all the ingredients to perform stress test on your WoT system. By running this command, test tool start to execute the input file created in previous step.
```bash
npm run stress #
```
After running this command you will see test tool messages appear on your terminal. After a few seconds test tool report window will open automatically and you can see the final report of the stress test. 

# Support


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.