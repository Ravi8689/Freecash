const dom1=document.getElementsByClassName('list-menu')
const dom2=document.getElementsByClassName('sidebar-toggle')




function onClickSidebar(){
    for (let i = 0; i < dom1.length; i++) {
        dom1[i].style.display = 'none';
    }
}