function createTag(tagName, tagClass, tagId) {
  const tag = document.createElement(`${tagName}`);
  if (tagClass != "" && tagClass != undefined) {
    tag.setAttribute("class", `${tagClass}`);
  }
  if (tagId != "" && tagId != undefined) {
    tag.setAttribute("id", `${tagId}`);
  }
  return tag;
}
let question = [
  {
    prob: "0",
    rule: "Your password must be at least 5 characters.",
  },
  {
    prob: "1",
    rule: "Your password must include an uppercase letter.",
  },
  {
    prob: "2",
    rule: "Your password must include an lowercase letter.",
  },
  {
    prob: "3",
    rule: "Your password must include a special character.",
  },
  {
    prob: "4",
    rule: "Your password must include a number.",
  },
  {
    prob: "5",
    rule: "The digits in your password must add up to 25.",
  },
  {
    prob: "89",
    rule: "Andy багшийн төрсөн он",
  },
  {
    prob: "LkhagvaErdene",
    rule: "Andy багшийн нэрний үсгүүд бүгд орсон байна",
  },
  {
    prob: "23",
    rule: "Ангид хамгийн их ярьдаг хүний нас",
  },
  {
    prob: "LkhagvaErdene",
    rule: "Andy багшийн нэрийг бүтэн залгаж бичиж нууц үг зохиохгүй ээ",
  },
];

const gamebody = document.getElementById("gamebody");
// Create container
const container = createTag("div", "container");
gamebody.appendChild(container);
// Create siteTitle
const siteTitle = createTag("div", "site-title");
siteTitle.innerText = "New password game";
container.appendChild(siteTitle);
// create inputPass
const inputPass = createTag("div", "inputPass");
container.appendChild(inputPass);
// create inputLabel
const inputLabel = createTag("label");
inputLabel.setAttribute("for", "inputData");
inputLabel.innerText = "Please choose a password";
inputPass.appendChild(inputLabel);
// create inputData
const inputData = createTag("input", "", "inputData");
inputData.setAttribute("type", "text");
let count = 0;
start = true;
let check;
inputData.addEventListener("keyup", () => {
  let a = inputData.value;
  //   console.log("=", a);
  if (a.length == 1 && start) {
    newRule(0);
    start = false;
    count++;
  }
  console.log("test:", a.search(question[0].prob));
  check = 0;
  for (let i = 0; i < count; i++) {
    question[i];
    console.log(question[i].prob, a);
    // if (a.search(question[i].prob) != -1) {
    if (i == 0) check0(a, i);
    if (i == 1) check1(a, i);
    if (i == 2) check2(a, i);
    if (i == 3) check3(a, i);
    if (i == 4) check4(a, i);
    if (i == 5) check5(a, i);
    if (i > 5 && i < 9) {
      finds(a, question[i].prob, i);
    }
    if (i == 9) {
      findStr(a, question[i].prob, i);
    }
  }
  if (check == question.length) {
    alert("Наадах чинь янзын нууц үг боллоо");
  }
  while (check == count) {
    count++;
    newRule(count - 1);
    check = 0;
    for (let i = 0; i < count; i++) {
      question[i];
      console.log(question[i].prob, a);
      // if (a.search(question[i].prob) != -1) {
      if (i == 0) check0(a, i);
      if (i == 1) check1(a, i);
      if (i == 2) check2(a, i);
      if (i == 3) check3(a, i);
      if (i == 4) check4(a, i);
      if (i == 5) check5(a, i);
      if (i > 5 && i < 9) {
        finds(a, question[i].prob, i);
      }
      if (i == 9) {
        findStr(a, question[i].prob, i);
      }
    }
    if (check == question.length) {
      alert("Наадах чинь янзын нууц үг боллоо");
    }
  }
  //   win(idValue) return true false
});
inputPass.appendChild(inputData);
// create RuleList
const ruleList = createTag("div", "rule-list");
container.appendChild(ruleList);

function newRule(ind) {
  const rule = createTag("div", "rule", ind + 1);
  const ruleTop = createTag("div", "rule-top", `rulteTop-${ind}`);
  const ruleDesc = createTag("div", "rule-desc", `rulteDesc-${ind}`);
  ruleTop.innerText = "Rule " + Number(ind + 1);
  ruleDesc.innerText = question[ind].rule;
  rule.appendChild(ruleTop);
  rule.appendChild(ruleDesc);

  ruleList.appendChild(rule);
}

function check0(a, i) {
  // Your password must be at least 5 characters.
  let result;
  if (a.length >= 5) {
    result = true;
  } else {
    result = false;
  }
  if (result) {
    // true
    console.log("bolchihloo");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#bdf0b4";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#e9fee5";
    document.getElementById(`${i + 1}`).style.borderColor = "#267b30";
    document.getElementById(`${i + 1}`).style.order = "1";
    check++;
  } else {
    // false
    console.log("bologui");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#f7c9c8";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#fceded";
    document.getElementById(`${i + 1}`).style.borderColor = "red";
    document.getElementById(`${i + 1}`).style.order = "-1";
  }
}
function check1(a, i) {
  // Your password must include an uppercase letter.

  const regex = /[A-Z]/g;
  let result = true;
  if (a.match(regex) == null) {
    result = false;
  }
  if (result) {
    // true
    console.log("bolchihloo");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#bdf0b4";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#e9fee5";
    document.getElementById(`${i + 1}`).style.borderColor = "#267b30";
    document.getElementById(`${i + 1}`).style.order = "1";
    check++;
  } else {
    // false
    console.log("bologui");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#f7c9c8";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#fceded";
    document.getElementById(`${i + 1}`).style.borderColor = "red";
    document.getElementById(`${i + 1}`).style.order = "-1";
  }
}

function check2(a, i) {
  // Your password must be at least 5 characters.
  const regex = /[a-z]/g;
  let result = true;
  if (a.match(regex) == null) {
    result = false;
  }
  if (result) {
    // true
    console.log("bolchihloo");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#bdf0b4";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#e9fee5";
    document.getElementById(`${i + 1}`).style.borderColor = "#267b30";
    document.getElementById(`${i + 1}`).style.order = "1";
    check++;
  } else {
    // false
    console.log("bologui");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#f7c9c8";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#fceded";
    document.getElementById(`${i + 1}`).style.borderColor = "red";
    document.getElementById(`${i + 1}`).style.order = "-1";
  }
}
function check3(a, i) {
  // Your password must include a special character.
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let result = true;
  if (a.match(specialChars) == null) {
    result = false;
  }
  if (result) {
    // true
    console.log("bolchihloo");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#bdf0b4";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#e9fee5";
    document.getElementById(`${i + 1}`).style.borderColor = "#267b30";
    document.getElementById(`${i + 1}`).style.order = "1";
    check++;
  } else {
    // false
    console.log("bologui");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#f7c9c8";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#fceded";
    document.getElementById(`${i + 1}`).style.borderColor = "red";
    document.getElementById(`${i + 1}`).style.order = "-1";
  }
}
function check4(a, i) {
  // Your password must include a number.

  const regex = /[0-9]/g;
  let result = true;
  if (a.match(regex) == null) {
    result = false;
  }
  if (result) {
    // true
    console.log("bolchihloo");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#bdf0b4";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#e9fee5";
    document.getElementById(`${i + 1}`).style.borderColor = "#267b30";
    document.getElementById(`${i + 1}`).style.order = "1";
    check++;
  } else {
    // false
    console.log("bologui");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#f7c9c8";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#fceded";
    document.getElementById(`${i + 1}`).style.borderColor = "red";
    document.getElementById(`${i + 1}`).style.order = "-1";
  }
}
function check5(a, i) {
  // The digits in your password must add up to 25.
  const numberChars = /[0-9]/g;
  let result1 = a.match(numberChars);
  //   console.log(result);
  let sum = 0;
  for (let i = 0; i < result1.length; i++) {
    sum += Number(result1[i]);
  }
  let result = false;
  if (sum == 25) {
    result = true;
  }
  if (result) {
    // true
    console.log("bolchihloo");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#bdf0b4";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#e9fee5";
    document.getElementById(`${i + 1}`).style.borderColor = "#267b30";
    document.getElementById(`${i + 1}`).style.order = "1";
    check++;
  } else {
    // false
    console.log("bologui");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#f7c9c8";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#fceded";
    document.getElementById(`${i + 1}`).style.borderColor = "red";
    document.getElementById(`${i + 1}`).style.order = "-1";
  }
}

function finds(a, b, i) {
  let result = true;
  for (let j = 0; j < b.length; j++) {
    if (a.search(b[j]) == -1) {
      result = false;
      break;
    }
  }
  if (result) {
    // true
    console.log("bolchihloo");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#bdf0b4";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#e9fee5";
    document.getElementById(`${i + 1}`).style.borderColor = "#267b30";
    document.getElementById(`${i + 1}`).style.order = "1";
    check++;
  } else {
    // false
    console.log("bologui");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#f7c9c8";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#fceded";
    document.getElementById(`${i + 1}`).style.borderColor = "red";
    document.getElementById(`${i + 1}`).style.order = "-1";
  }
}

function findStr(a, b, i) {
  let result = true;
  if (a.search(b) == -1) {
    // true
    console.log("bolchihloo");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#bdf0b4";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#e9fee5";
    document.getElementById(`${i + 1}`).style.borderColor = "#267b30";
    document.getElementById(`${i + 1}`).style.order = "1";
    check++;
  } else {
    // false
    console.log("bologui");
    document.getElementById(`rulteTop-${i}`).style.backgroundColor = "#f7c9c8";
    document.getElementById(`rulteDesc-${i}`).style.backgroundColor = "#fceded";
    document.getElementById(`${i + 1}`).style.borderColor = "red";
    document.getElementById(`${i + 1}`).style.order = "-1";
  }
}

const paragraph = "prbeaaa";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// // let c = finds(a, b);
// // console.log(c);
// function findEmoji(a, b) {
//   console.log(a, b);
//   if (a.indexOf(b) == -1) {
//     return false;
//   } else {
//     return true;
//   }
// }
