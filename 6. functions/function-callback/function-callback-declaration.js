const printAndCall = (name, callback) => {
  console.log(`Print ${name}...`);
  callback(name);
}

const call = (name) => {
  console.log(`Call ${name}...`);
};

printAndCall('Victor', call);
// Print Victor...
// Call Victor...