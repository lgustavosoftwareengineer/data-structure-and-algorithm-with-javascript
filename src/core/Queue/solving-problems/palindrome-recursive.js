function isPalindrome(str = "") {
  const strLowerCase = str.toLowerCase();

  function firstChar(str) {
    return str[0];
  }

  function lastChar(str) {
    return str[str.length - 1];
  }

  function middleChars(str) {
    return str.slice(1, str.length - 1);
  }

  if (str.length < 2) {
    return true;
  }

  if (firstChar(strLowerCase) === lastChar(strLowerCase)) {
    return isPalindrome(middleChars(strLowerCase));
  }

  return false;
}
