/* 
חברים שיעורי בית:
ליצור דף HTML עם 10 תגיות טקסט (p span h1 h2 וכל תגית שבא לכם) 
ליד כל תגית כזו ליצור תיבת טקסט וכפתור, ללחיצה על הכפתור תחליף את הטקסט בתגית לטקסט שיש בתוך תיבת הטקסט

בונוס למי שיצליח לעשות את זה קצר, מאוד קצר :)
*/

function changeText() {
  let inputs = document.querySelectorAll(`.input`);
  let tag = document.querySelectorAll('.tag');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value !== '') {
      tag[i].innerText = inputs[i].value;
    }
  }
}