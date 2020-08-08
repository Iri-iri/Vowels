function vowels() {
  let s = 0;
  let searchVowels = ["a", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
  let yourString = prompt("Введите строку:", "");
  for (let i = 0; i < yourString.length; i++)
    for (let j = 0; j < searchVowels.length; j++)
      if (yourString[i] === searchVowels[j]) {
        ++s;
        break;
      }
  return s ? s : "Нет совпадений";
}
alert(vowels());