const tabs=[
    {
        tab_id:1,
        tab_title:"Tab-1",
        tab_container:"this is about tab1"
    }
    ,{
        tab_id:2,
        tab_title:"Tab-2",
        tab_container:"this is about tab2"
    },{
        tab_id:3,
        tab_title:"Tab-3",
        tab_container:"this is about tab3"
    }
]
document.addEventListener("DOMContentLoaded",()=>{
const tab_selection=document.querySelector(".tab-selection");
const tab_container=document.querySelector(".tab-container");
const active_tab=1;

tabs.forEach(element => {
    const tab_button=document.createElement("button");
    tab_button.innerText=element.tab_title;
    tab_button.setAttribute("data-id",element.tab_id)
    const tab=document.createElement('div');
    const header=document.createElement('header');

    header.innerText=element.tab_title;
    tab.appendChild(header);
    tab.setAttribute("id",element.tab_id)
    const containt=document.createElement("div");
    containt.innerText=element.tab_container;
    tab.appendChild(containt);
    if(element.tab_id==active_tab)
    {
        tab_button.classList.add('active');
        tab.classList.add('active');
    }
    tab_selection.append(tab_button)
    tab_container.append(tab)

});
function handleTabSelection(event) {
  if (event.target.tagName !== "BUTTON") return;

  const id = event.target.dataset.id;


  document.querySelectorAll(".tab-selection button")
    .forEach(btn => btn.classList.remove("active"));

  
  document.querySelectorAll(".tab-container > div")
    .forEach(tab => tab.classList.remove("active"));

  
  event.target.classList.add("active");
   console.log(id);
  
  document.getElementById(id).classList.add("active");
}




tab_selection.addEventListener("click",handleTabSelection);

})