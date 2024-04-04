function formatDate(inputString) {
  if (!inputString) return "";
  var dateObj = new Date(inputString);
  var outputString = dateObj.toISOString().slice(0, 19).replace("T", " ");
  return outputString;
}

function formatDateDDYYMM(inputString) {
  if (!inputString) return "";
  var dateObj = new Date(inputString);
  var outputString = dateObj.toISOString().slice(0, 19).split("T")[0];
  return outputString.replace(/-/g, "/");
}
export { formatDate, formatDateDDYYMM };
