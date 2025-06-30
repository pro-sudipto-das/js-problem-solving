let Output = document.getElementById("Output");
 let user = {
  FullName: "User Name", 
  Age: 24,
  profession: {
    Main: "Web Developer",
    Category: "Front-End Developer",
    Position: "senior",
  },
  Language: {
    Main: "HTML, CSS, Javascript",
    FrameWork: "TailwindCSS, React.js",
    Extra: {
      Software: "WordPress, WIX, Squarespace",
    },
  },
  Experience: "5+ year",
  city: "London",
  Country: "United Kingdom",
};


function personDetails(obj, indent = 0) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      if (indent === 0) {
        output.innerHTML += `${"&nbsp;".repeat(
          indent * 4
        )} <span style="font-weight:bold">${key} :</span><br>`;
      } else {
        output.innerHTML += `${"&nbsp;".repeat(indent * 4)} ${key} <br>`;
      }
      personDetails(obj[key], indent + 1);
    } else {
      output.innerHTML += `${"&nbsp;".repeat(
        indent * 4
      )} <span style="font-weight:bold">${key} :</span> <span style="color:#777">${
        obj[key]
      }</span> <br>`;
    }
  }
}
personDetails(user);
