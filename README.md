# StressThing
A testing platform to perform stress test on the Web of Things(WoT). WoT systems and users' ideal stress config can be defined explicitly for test execution.
Results will be presented as below:


![Alt text](https://github.com/amirosein/StressThing/blob/master/test_results_img/D1_sum.png?raw=true "Title")


![Alt text](https://github.com/amirosein/StressThing/blob/master/test_results_img/D1_all.png?raw=true "Title")

# Description
This testing platform uses **Taraus**, **Blazemeter** and **JMeter** as testing tools. Given the advantages of Blazemeter, tests are executed in the cloud and results would be available in a webpage accessible for everyone so you can share the results with your teammates.
It also uses **W3C WoT Thing Description** as the primary standard for defining your WoT system.

This project aims to overcome different barriers of load and stress testing for Web of Things(WoT) by using the best testing tools and web standards for defined for the Internet of Things(IoT). 
A notable approach of StressThing is to restrict users to use formal web standards defined for WoT in order to help increase the interoperability of the IoT.
# Installation
You need to have node installed. By running this command in the project directory, all the dependencies of the project will be installed.
```bash
npm install
```
# Documentation
## Test Execution Parameters
You can tune your test with these parameters (from [Taraus official Website]( https://gettaurus.org/docs/ExecutionSettings/) ):
* concurrency: number of target concurrent virtual users 
* ramp-up: ramp-up time to reach target concurrency 
* hold-for: time to hold target concurrency 
* iterations: limit scenario iterations number
* throughput: apply Request per Second (RPS) shaper, limiting maximum RPS to throughput, requires ramp-up and hold-for
* scenario: name of scenario that described in scenarios part
* steps: allows users to apply stepping ramp-up for concurrency and rps, requires ramp-up
## Define the WoT System
* You should define each thing in your Web of Things system based on JSON format of the [W3C](https://www.w3.org/) standard for WoT things. This standard is defined explicitly in [WoT Thing Description]( https://www.w3.org/TR/wot-thing-description/).
* Put all things as the value of the "things" key in the input JSON file.
* Save the JSON file as "WoT_Input.json" in the root directory of the project.
* Here we have a short TD example:
```JSON
"things": [
{
    "id": "@redLight507",
    "name": "redLight507",
    "description" : "redLight507 is a red light for the 507 street",
    "properties": {
        "getTrafficStatus": {
            "description" : "Shows the current status of the traffic in front of red light",
            "type": "string",
            "forms": [{
                "href": "https://6fb72f98-04cb-4010-b8ba-051062303e55.mock.pstmn.io/redLights/redLight507/getTrafficStatus",
                "http:methodName": "GET"
            }]
        }
    },
    "actions": {
        "putTrafficStatus": {
            "description" : "update Traffic Status",
            "input": {
            "type": "object",
            "properties": {
                "density": {
                    "type": "integer",
                    "minimum": "1",
                    "maximum": "30"
                },
                "volume": {
                    "type": "integer",
                    "minimum": "1",
                    "maximum": "500"
                  },
                "trafficLevel": {
                    "type": "integer",
                    "minimum": "0",
                    "maximum": "10"
                }
            },
            "required": ["density","volume"]
        },
            "forms": [{
                "href": "https://6fb72f98-04cb-4010-b8ba-051062303e55.mock.pstmn.io/redLights/redLight507/putTrafficStatus",
                "http:methodName": "PUT"
            }]
        }
    },
     "events": {
        "overheating": {
            "description" : "Lamp reaches a critical temperature (overheating)",
            "type": "string",
            "forms": [{
                "href": "http://yahoo.com"
            }]
        }
    }
},
{
  "name": "Another Thing"
}
]
```
* You can see more input file samples in the "input_samples" directory.
## Define Manual Test Configs (Optional)
StressThing generates customizable stress scenarios by itself as well as getting user's scenarios as input. You can also take advantage of both of them to gather a complete stress scenario for your WoT system.

You can define arbitrary scenarios with their corresponding settings. StressThing would put your scenarios in place to be ready to run for each of your WoT endpoints. You should define your scenarios as the value of "scenarios" key as the JSON below.
```JSON
  "scenarios":[
    {
     "concurrency": "1",
      "ramp-up": "10",
      "hold-for": "10",
      "throughput": "1",
      "scenario": "BeginerScenario"
    },
    {
     "concurrency": "300",
      "ramp-up": "10",
      "hold-for": "30",
      "throughput": "30",
      "scenario": "ExtremeScenario"
  }
  ]
```
You can also limit the maximum users and throughput for scenarios generated by stressThing. These settings are available under "scenarioConfigs" key:
```JSON
"scenarioConfigs":{
    "maxUser":"400",
    "maxThroughput":"50",
      "rampUp":"30",
    "holdFor":"20"
  }
```
# Usage
The modern ES2017 code is written in ./src directory. You can compile it by doing this command:
```bash
npm run build #you need to run this command if you have changed any code in ./src directory
```
This will save JavaScript ES5 code version in ./public directory. To avoid compatibility issues the ES5 code will be used for execution.

To execute the code you have to run this command:
```bash
npm run execute #This command will create the JSON file as the input for the test tool
```
The JSON file is named 'Tool_Input.json' You can view it after running the above command.

Now you have all the ingredients to perform stress test on your WoT system. By running the command below, the test tool starts to execute the input file created in the previous step.
```bash
npm run stress #This command will run the test
```
After running this command, you will see test tool messages appear on your terminal. After a few seconds, the test tool report window will open automatically, and you can see the final results of the stress test. 

# Support
Reach out to me at one of the following places!
* Email at abbasi.amh@gmail.com
* Website at https://ceit.aut.ac.ir/~amirosein/

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# Authors
* [Amirosein Abbasi](https://ceit.aut.ac.ir/~amirosein/)