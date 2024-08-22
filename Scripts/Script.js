document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("paragraphForm");
  const input = document.getElementById("paragraphInput");
  const wordCountDisplay = document.getElementById("wordCount");
  const upperCaseCountEl = document.getElementById("upperCaseCount");
  const lowerCaseCountEl = document.getElementById("lowerCaseCount");
  const wordCountResultEl = document.getElementById("wordCountResult");
  const specialCharCountEl = document.getElementById("specialCharCount");
  const upperToLowerBtn = document.getElementById("upperToLowerBtn");
  const lowerToUpperBtn = document.getElementById("lowerToUpperBtn");
  const boldBtn = document.getElementById("boldBtn");
  const underlineBtn = document.getElementById("underlineBtn");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const searchResult = document.getElementById("searchResult");

  let currentText = "";

  input.addEventListener("input", function () {
    const wordCount = input.value.trim().split(/\s+/).length;
    wordCountDisplay.textContent = `Word count: ${wordCount}`;
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const wordCount = input.value.trim().split(/\s+/).length;
    if (wordCount < 60 || wordCount > 240) {
      alert("Please enter a paragraph between 60 and 240 words.");
      return;
    }
    currentText = input.value;
    updateTable(currentText);
  });

  function updateTable(text) {
    const upperCaseCount = (text.match(/[A-Z]/g) || []).length;
    const lowerCaseCount = (text.match(/[a-z]/g) || []).length;
    const wordCount = text.trim().split(/\s+/).length;
    const specialCharCount = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;

    upperCaseCountEl.textContent = upperCaseCount;
    lowerCaseCountEl.textContent = lowerCaseCount;
    wordCountResultEl.textContent = wordCount;
    specialCharCountEl.textContent = specialCharCount;
  }

  upperToLowerBtn.addEventListener("click", function () {
    const result = currentText.toLowerCase();
    document.getElementById("uppertoLower").textContent = result;
  });

  lowerToUpperBtn.addEventListener("click", function () {
    const result = currentText.toUpperCase();
    document.getElementById("lowertoUpper").textContent = result;
  });

  boldBtn.addEventListener("click", function () {
    document.getElementById(
      "boldPara"
    ).innerHTML = `<strong>${currentText}</strong>`;
  });

  underlineBtn.addEventListener("click", function () {
    document.getElementById(
      "underlinePara"
    ).innerHTML = `<u>${currentText}</u>`;
  });

  searchBtn.addEventListener("click", function () {
    const searchWord = searchInput.value.trim().toLowerCase();
    const words = currentText.toLowerCase().split(/\s+/);
    const count = words.filter((word) => word === searchWord).length;
    searchResult.value = `The word "${searchWord}" appears ${count} time(s) in the paragraph.`;
  });
});
