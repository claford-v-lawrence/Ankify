/* eslint-disable no-console */

function test1(name) {
  return new Promise(resolve => resolve("Test success: " + name));
}

async function sleep(time) {
  new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

async function timeOut(ms) {
  await sleep(ms);
  console.log("slept for: ", ms);
}

let cpts = [0, 1, 2, 3, 4, 5];

async function fillLine(cpt) {
  console.log(cpt);
  await timeOut(2000);
}

let iterCpt = async cpts => {
  for (const cpt of cpts) {
    await fillLine(cpt);
  }
  return new Promise(resolve => {
    resolve("Finished Cpt");
  });
};

let test2 = async () => {
  test3();
  let result = await iterCpt(cpts);
  test3();
  return result;
};

let test3 = () => {
  console.log("test3");
};

let test4 = async () => {
  let result = await test2();
  return result;
};

test2();
