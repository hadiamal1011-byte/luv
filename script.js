const title = document.getElementById("title");
const text = document.getElementById("text");
const content = document.getElementById("content");

let step = 0;

const screens = [

{
title:"💖 Хадишка 💖",
text:"Пойдёшь со мной на свидание? 🥹❤️",
buttons:["Да ❤️"]
},

{
title:"🍽️ Что будем кушать?",
text:"Выбирай всё, что захочешь 😋",
buttons:[
"🍣 Суши",
"🍔 Бургер",
"🍜 Рамен",
"🤍 На твой вкус"
]
},

{
title:"🚕 Как поедем?",
text:"Выбирай 😊",
buttons:[
"🚕 Закажешь такси",
"🚗 Заберёшь меня сам",
"🚶 Пешком за ручку 💞"
]
},

{
title:"💳 Кто платит?",
text:"Очень важный вопрос 😄",
buttons:[
"💙 Я плачу",
"😏 Конечно же ты"
]
},

{
title:"❤️ Насколько сильно ждёшь нашу встречу?",
slider:true
},

{
title:"💌 Всё готово!",
text:"Жду нашу встречу с нетерпением ❤️",
final:true
}

];

render();

function render(){

const s=screens[step];

title.innerHTML=s.title;
text.innerHTML=s.text;

content.innerHTML="";

if(s.slider){

content.innerHTML=`
<input type="range" min="0" max="100" value="100">
<br>
<button onclick="next()">Продолжить ❤️</button>
`;

return;
}

if(s.final){

content.innerHTML=`
<h2 style="color:#ff5a9f;">
До скорой встречи, Хадишка ❤️
</h2>
`;

return;
}

s.buttons.forEach(name=>{

const btn=document.createElement("button");

btn.innerHTML=name;

btn.onclick=()=>buttonAction(name);

content.appendChild(btn);

});

}
function buttonAction(name){

    // 🍣 ЕДА
    if(
        name==="🍣 Суши" ||
        name==="🍔 Бургер" ||
        name==="🍜 Рамен" ||
        name==="🤍 На твой вкус"
    ){
        next();
        return;
    }

    // 🚕 ТАКСИ
    if(name==="🚕 Закажешь такси"){

        title.innerHTML="🚕 Такси";
        text.innerHTML="🙈 Занято.";

        content.innerHTML=`
        <button onclick="next()">Хорошо ❤️</button>
        `;

        return;
    }

    // 🚗 ЗАБЕРУ САМ
    if(name==="🚗 Заберёшь меня сам"){

        title.innerHTML="🚗 Отличный выбор";
        text.innerHTML="🥹 Тогда буду ждать тебя с нетерпением ❤️";

        content.innerHTML=`
        <button onclick="next()">Дальше 💖</button>
        `;

        return;
    }

    // 🚶 ПЕШКОМ
    if(name==="🚶 Пешком за ручку 💞"){

        title.innerHTML="❤️ Романтика";
        text.innerHTML="Мне нравится этот вариант 🥹";

        content.innerHTML=`
        <button onclick="next()">Продолжить 💕</button>
        `;

        return;
    }

    // 💳 Я ПЛАЧУ
    if(name==="💙 Я плачу"){

        const answers=[
            "❌ Нет, ты не должна платить ❤️",
            "😊 Я пригласил — значит плачу я.",
            "🌹 Сегодня всё за мой счёт.",
            "🥹 Просто приходи, больше ничего не нужно.",
            "❤️ Даже не спорь."
        ];

        title.innerHTML="💳 Нет";

        text.innerHTML=
        answers[Math.floor(Math.random()*answers.length)];

        content.innerHTML=`
        <button onclick="next()">Хорошо 😊</button>
        `;

        return;
    }

    // 😏 КОНЕЧНО ЖЕ ТЫ
    if(name==="😏 Конечно же ты"){

        const answers=[
            "😂 Хорошая попытка.",
            "😌 Не получится.",
            "❤️ Всё оплачиваю я.",
            "🌹 Ты сегодня моя гостья.",
            "🥰 Просто приходи красивой."
        ];

        title.innerHTML="😅 Неа";

        text.innerHTML=
        answers[Math.floor(Math.random()*answers.length)];

        content.innerHTML=`
        <button onclick="next()">Ладно 😂</button>
        `;

        return;
    }

    next();

}

function next(){

    step++;

    if(step>=screens.length){

        step=screens.length-1;

    }

    render();

}

// 💖 Летающие сердечки

function heart(){

    const h=document.createElement("div");

    h.className="heart";

    const hearts=["❤️","💖","💕","💗","💘"];

    h.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

    h.style.left=Math.random()*100+"vw";

    h.style.animationDuration=(4+Math.random()*3)+"s";

    h.style.fontSize=(20+Math.random()*20)+"px";

    document.querySelector(".hearts").appendChild(h);

    setTimeout(()=>{

        h.remove();

    },7000);

}

setInterval(heart,350);