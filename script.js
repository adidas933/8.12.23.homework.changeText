/* 
חברים שיעורי בית:
ליצור דף HTML עם 10 תגיות טקסט (p span h1 h2 וכל תגית שבא לכם) 
ליד כל תגית כזו ליצור תיבת טקסט וכפתור, ללחיצה על הכפתור תחליף את הטקסט בתגית לטקסט שיש בתוך תיבת הטקסט

בונוס למי שיצליח לעשות את זה קצר, מאוד קצר :)
*/

function changeText(index) {
  let inputs = document.querySelector(`#input${index}`);
  let tag = document.querySelector(`#tag${index}`);
        tag.innerText = inputs.value;
}