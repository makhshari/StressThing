

  const toTarausJson = () => {
    var tarausJsonData={
      "execution": [
        {
          "concurrency": 100,
          "ramp-up": "30s",
          "hold-for": "60s",
          "scenario": "quick-test"
        }
      ],
      "scenarios": {
        "quick-test": {
          "requests": [
            "http://apple.com"
          ]
        }
      },
      "reporting":[
          {
            "module":"final-stats"
          },
          {
            "module":"blazemeter"
          }
        ]
    }
    const fs = require('fs'); 
    fs.writeFile("output.json", JSON.stringify(tarausJsonData), 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
      console.log("JSON file has been saved.");
  }); 
}
const runTaraus=()=>{
var exec = require('child_process').exec;
var child;
child = exec("bzt output.json", function (error, stdout, stderr) {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }

});
}