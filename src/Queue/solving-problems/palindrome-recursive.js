function isPalindrome(text = "") {
  if (!text) return false;

  const textFromLowerCase = text.toLowerCase();
  const textLen = textFromLowerCase.length;
  const firstChar = textFromLowerCase[0];
  const lastChar = textFromLowerCase[textLen - 1];

  // um string menor que 2 o inicio e o final serão a mesma coisa, logo quebra o slice
  if (textLen < 2) return true;

  if (firstChar === lastChar) {
    return isPalindrome(textFromLowerCase.slice(1, lastChar));
  }

  return false;
}
