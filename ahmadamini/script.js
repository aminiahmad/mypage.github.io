

//-------------READ EDIT About

const btn_Edit_About=document.querySelector(".edit-Aboutme");
const backDrop=document.querySelector(".backdrop");
const modalAbout=document.querySelector(".edite-About-Me");
const closeEditAbout=document.querySelector(".close-About-Box");
const saveEditAbout=document.querySelector(".save-About-Box");
const textAbout=document.querySelector(".textAbout");
const aboutMe=document.querySelector(".about-Me")

//-------------BOX EDIT ABOUT ME

// document.addEventListener("DOMContentLoaded", getlocal);
closeEditAbout.addEventListener("click",closefunc);
saveEditAbout.addEventListener("click",savefunc);
backDrop.addEventListener("click",closefunc);
textAbout.addEventListener("click", removea);

btn_Edit_About.addEventListener("click",()=>{
    backDrop.style.display="block";
    modalAbout.style.opacity = "1";
    modalAbout.style.transform = "translateY(-35vh)";
})
function closefunc(){
backDrop.style.display="none";
modalAbout.style.opacity = "0";
modalAbout.style.transform = "translateY(-400vh)";

}

function savefunc(e){
    e.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-About");
    const newTodo = `<p class="about-me-new">${textAbout.value}</p>`;
    todoDiv.innerHTML = newTodo;
    aboutMe.appendChild(todoDiv);
    localSave(textAbout.value);
    textAbout.value = "";
    
}
function localSave(todo) {
    let savelocal = localStorage.getItem("todo-About") ?
        JSON.parse(localStorage.getItem("todo-About")) : [];

    savelocal.push(todo);
    localStorage.setItem("todo-About", JSON.stringify(savelocal));
}

function getlocal() {
    let savelocal = localStorage.getItem("todo-About") ?
        JSON.parse(localStorage.getItem("todo-About")) : [];
    savelocal.forEach((todo) => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-About");
        const newTodo = `<p class="about-me-new">${todo}</p>`;
        todoDiv.innerHTML = newTodo;
        aboutMe.appendChild(todoDiv);
    })
}

function removeLocal(todo) {
    let savelocal = localStorage.getItem("todo-About") ?
        JSON.parse(localStorage.getItem("todo-About")) : [];
    const filterremove = savelocal.filter((t) => t !== todo.children[0].innerHTML);
    localStorage.setItem("todo-About", JSON.stringify(filterremove));
}
function removea(e) {
    const classlist = [...e.target.classList];
    const item = e.target;
    console.log(item.parentElement.parentElement);
    console.log(item.parentElement.parentElement.children[3]);
    if (classlist[0] === "textAbout") {
        const todo = item.parentElement.parentElement.children[3];
        removeLocal(todo);
        todo.remove();

    }
}


//--------------------------------------------------------
//-------------READ EDIT EDUCTION



const btn_Edit_Education=document.querySelector(".edit-Education");
const btn_Remove_Education=document.querySelector(".remove-Education");
const modalEducation=document.querySelector(".edite-Education");
const closeEditEducation=document.querySelector(".close-Edu-Box");
const saveEditEducation=document.querySelector(".save-Edu-Box");
const universityEduc=document.querySelector(".university");
const majorEduc=document.querySelector(".major");
const educationMe=document.querySelector(".education-Me");
//-----------------Box Edit Education
// document.addEventListener("DOMContentLoaded", getlocalEduc);
saveEditEducation.addEventListener("click",saveFuncEduc);
universityEduc.addEventListener("click", removeaEduc);
majorEduc.addEventListener("click", removeaEduc);
closeEditEducation.addEventListener("click",closefuncEduc);
backDrop.addEventListener("click",closefuncEduc);

btn_Edit_Education.addEventListener("click",()=>{
    backDrop.style.display="block";
    modalEducation.style.opacity = "1";
    modalEducation.style.transform = "translateY(-30vh)";
})
function closefuncEduc(){
    backDrop.style.display="none";
    modalEducation.style.opacity = "0";
    modalEducation.style.transform = "translateY(-500vh)";
    }

function saveFuncEduc(e){
    e.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-Educ");
    const newTodo = `<p class="university">univercity: ${universityEduc.value}</p><br><p class="major">major: ${majorEduc.value}</p>`;
    todoDiv.innerHTML = newTodo;
    educationMe.appendChild(todoDiv);
    localSaveEduc(universityEduc.value);
    localSaveEduc(majorEduc.value);
    majorEduc.value = "";
    universityEduc.value = "";

}
function localSaveEduc(todo) {
    let savelocal = localStorage.getItem("todo-Educ") ?
        JSON.parse(localStorage.getItem("todo-Educ")) : [];
    savelocal.push(todo);
    localStorage.setItem("todo-Educ", JSON.stringify(savelocal));
}

function getlocalEduc() {
    let savelocal = localStorage.getItem("todo-Educ") ?
        JSON.parse(localStorage.getItem("todo-Educ")) : [];
    savelocal.forEach((todo) => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-Educ");
        const newTodo = `<p class="university">${todo}</p><br><p class="major">${todo}</p>`;
        todoDiv.innerHTML = newTodo;
        educationMe.appendChild(todoDiv);
    })
}

function removeLocalEduc(todo) {
    let savelocal = localStorage.getItem("todo-Educ") ?
        JSON.parse(localStorage.getItem("todo-Educ")) : [];
    const filterremove = savelocal.filter((t) => t !== todo.children[0].innerHTML);
    localStorage.setItem("todo-Educ", JSON.stringify(filterremove));
}
function removeaEduc(e) {
    const classlist = [...e.target.classList];
    const item = e.target;
    console.log(item.parentElement.parentElement.children[3]);
    console.log(classlist[2]);
    if (classlist[0] === "text") {
        const todo = item.parentElement.parentElement.children[3];
        removeLocalEduc(todo);
        todo.remove();
    }

}
//-----------------me in navbar
const btn_MyAccount=document.querySelector(".my-Account-btn");
const modalMyaccount=document.querySelector(".myAccount-de");
backDrop.addEventListener("click",closefuncm);
btn_MyAccount.addEventListener("click",()=>{
    backDrop.style.display="block";
    modalMyaccount.style.opacity="1";
    modalMyaccount.style.transform= "translateY(10vh)"
})
function closefuncm(){
    backDrop.style.display="none";
     modalMyaccount.style.opacity = "0";
     modalMyaccount.style.transform = "translateY(-300vh)";
    
}
//-----------------------show more user

const showMoreUser=document.querySelector(".show-more-users");
const sideBar=document.querySelector(".aside");
const otherUser=document.querySelector(".other-User");
const showLess=document.querySelector(".showless");

showMoreUser.addEventListener("click",()=>{
 sideBar.style.height="74rem";
 otherUser.style.display="flex";
 otherUser.style.opacity="1";
 showMoreUser.style.display="none";
});

showLess.addEventListener("click",()=>{
 sideBar.style.height="50rem";
 otherUser.style.display="none";
 otherUser.style.opacity="0";
 showMoreUser.style.display="block";
})




//-----------------------languages
const editLanguages=document.querySelector(".edit-Languages");
const LanguagesEdit=document.querySelector(".edit-Lang");
const closeLangEdit=document.querySelector(".close-l");
const englishLang=document.querySelector(".btn-la");
const persianLang=document.querySelector(".btn-fa");
const languages=document.querySelector(".Languages");
const btnDeleteLang=document.querySelector(".btn-del");
backDrop.addEventListener("click",closefuncLang);
closeLangEdit.addEventListener("click",closefuncLang);
englishLang.addEventListener("click",saveFuncLangEn);
persianLang.addEventListener("click",saveFuncLangFa);
btnDeleteLang.addEventListener("click",removeaLang);

editLanguages.addEventListener("click",()=>{
    backDrop.style.display="block";
    LanguagesEdit.style.opacity="1";
    LanguagesEdit.style.transform="translateY(20vh)";

})
function closefuncLang(){
    backDrop.style.display="none";
    LanguagesEdit.style.opacity = "0";
    LanguagesEdit.style.transform = "translateY(-800vh)";
    }
    function saveFuncLangEn(e){
        e.preventDefault();
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-Lang");
        const newTodo = `<p class="languages">${englishLang.value}</p>`;
        todoDiv.innerHTML = newTodo;
        languages.appendChild(todoDiv);
        localSaveLang(englishLang.value);
    
    }
    function saveFuncLangFa(e){
        e.preventDefault();
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-Lang");
        const newTodo = `<p class="languages">${persianLang.value}</p>`;
        todoDiv.innerHTML = newTodo;
        languages.appendChild(todoDiv);
        localSaveLang(persianLang.value);
    
    }
    function localSaveLang(todo) {
        let savelocal = localStorage.getItem("todo-Lang") ?
            JSON.parse(localStorage.getItem("todo-Lang")) : [];
        savelocal.push(todo);
        localStorage.setItem("todo-Lang", JSON.stringify(savelocal));
    }
    
    function getlocalLang() {
        let savelocal = localStorage.getItem("todo-Lang") ?
            JSON.parse(localStorage.getItem("todo-Lang")) : [];
        savelocal.forEach((todo) => {
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo-Lang");
            const newTodo = `<p class="languages">${todo}</p>`;
            todoDiv.innerHTML = newTodo;
            languages.appendChild(todoDiv);
        })
    }
    
    function removeLocalLang(todo) {
        let savelocal = localStorage.getItem("todo-Lang") ?
            JSON.parse(localStorage.getItem("todo-Lang")) : [];
            console.log(savelocal);
        const filterremove = savelocal.filter((t) => t !== todo.children[0].innerHTML);
        localStorage.setItem("todo-Lang", JSON.stringify(filterremove));
    }
    function removeaLang(e) {
        const classlist = [...e.target.classList];
        const item = e.target;
        if (classlist[0] === "btn-l") {
            const todo = item.parentElement.parentElement.children[3];
            removeLocalLang(todo);
            todo.remove();
        }
    
    }