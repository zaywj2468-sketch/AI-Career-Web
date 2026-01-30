function analyze() {

  let answers = [
    document.getElementById("q1").value,
    document.getElementById("q2").value,
    document.getElementById("q3").value,
    document.getElementById("q4").value,
    document.getElementById("q5").value,
    document.getElementById("q6").value
  ];

  let score = { tech:0, art:0, health:0, business:0 };
  answers.forEach(a => score[a]++);

  let top = Object.keys(score).reduce((a,b)=> score[a]>score[b]?a:b);
  let resultText = "";

  if (top === "tech") {
    resultText = "👨‍💻 โปรแกรมเมอร์ / วิศวกร\nสายการเรียน: วิทย์–คณิต / IT";
  }
  else if (top === "art") {
    resultText = "🎨 กราฟิกดีไซน์\nสายการเรียน: ศิลป์ / นิเทศ";
  }
  else if (top === "health") {
    resultText = "🏥 แพทย์ / พยาบาล\nสายการเรียน: วิทย์–คณิต";
  }
  else {
    resultText = "💼 นักธุรกิจ\nสายการเรียน: บริหารธุรกิจ";
  }

  localStorage.setItem("careerResult", resultText);
  window.location.href = "result.html";
}