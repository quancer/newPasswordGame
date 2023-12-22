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
let question = ["Bagadaa 5 temdegt oruul", "Tom useg oruul"];

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
inputData.addEventListener("keyup", () => {
  let a = inputData.value;
  //   console.log("=", a);
  if (a.length == 1 && ruleList.innerHTML == "") {
    newRule(0);
  }

  //   win(idValue) return true false
  if (a.length >= 5) {
    // true
    console.log("bolchihloo");
    document.getElementById(`rulteTop-${0}`).style.backgroundColor = "#bdf0b4";
    document.getElementById(`rulteDesc-${0}`).style.backgroundColor = "#e9fee5";
    document.getElementById(`${1}`).style.borderColor = "#267b30";
  } else {
    // false
    console.log("bologui");
    document.getElementById(`rulteTop-${0}`).style.backgroundColor = "#f7c9c8";
    document.getElementById(`rulteDesc-${0}`).style.backgroundColor = "#fceded";
    document.getElementById(`${1}`).style.borderColor = "red";
  }
});
inputPass.appendChild(inputData);
// create RuleList
const ruleList = createTag("div", "rule-list");
container.appendChild(ruleList);

function newRule(ind) {
  const rule = createTag("div", "rule", ind + 1);
  const ruleTop = createTag("div", "rule-top", `rulteTop-${0}`);
  const ruleDesc = createTag("div", "rule-desc", `rulteDesc-${0}`);
  ruleTop.innerText = "Rule " + ind;
  ruleDesc.innerText = question[ind];
  rule.appendChild(ruleTop);
  rule.appendChild(ruleDesc);
  ruleList.appendChild(rule);
}

let a = "abualaba";
console.log(a.count("a"));
