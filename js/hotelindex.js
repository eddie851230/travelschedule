 //取得modal視窗
 let filterModal =document.querySelector(".filterZone-outer");

 //所有按鈕
 let searchFilterBtnS = document.querySelectorAll(".btnForJS");

 //關閉鍵
let forClose =document.querySelector("#forClose-id")
 // 點擊開啟事件
 searchFilterBtnS.forEach((e)=>{
    e.addEventListener('click',openModal)
 })
 function openModal(){
    filterModal.style.visibility="visible";
 }
//  searchFilterBtn.forEach.onclick =function(){
//     filterModal.style.visibility="visible";
//  }
//點擊關閉事件
forClose.onclick=()=>{
    filterModal.style.visibility="hidden";
}



 //點擊外部關閉視窗
 filterModal.addEventListener('click', outsideClick);
 
 function outsideClick(e){
    if(e.target == filterModal) {
        filterModal.style.visibility = "hidden";
 }}