const { PriorityQueue } = require("../../lib/PriorityQueue");
const prompt = require("prompt-sync")();

function hospitalEDSystem() {
  let noExit = true;
  const patients = new PriorityQueue();
  const REQUEST = {
    1: () => addPatient(patients),
    2: () => nexPatient(patients),
    3: () => currentPatient(patients),
    4: () => (noExit = false),
  };
  while (noExit) {
    let question = prompt(
      "Choose a number for your operation " +
        "\n" +
        "1: Patient enters ED." +
        "\n" +
        "2: Patient is seen by doctor." +
        "\n" +
        "3: Display list of patient waiting to be seen." +
        "\n" +
        "4: Exit" +
        "\n"
    );
    if (REQUEST[question]) REQUEST[question]();
    else console.log("Your option is not valid. Try again");
  }
}

function addPatient(patients) {
  const name = prompt("Enter the name of the patient: ");
  const code = prompt("Enter the patient's priority code: ");
  patients.enqueue({
    name: name,
    code: code,
  });
}

function currentPatient(patients) {
  if (patients.count() > 0)
    console.log("Patients waiting to be seen:"),
      console.log(patients.toStringPriority());
  else console.log("there's no patients to be seen");
}

function nexPatient(patients) {
  if (patients.count() > 0) {
    let seen = patients.dequeueWithPriority();
    console.log("Patient being treated: " + seen[0].name);
  } else console.log("There's no patient being treated");
}

hospitalEDSystem();
