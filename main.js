const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

// opens Nav btn
const openNav = () => {
    navItems.style.display= 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

// close Nav btn
const closeNav = () => {
    navItems.style.display= 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);



const navbar = document.getElementById('navbar')
const footer = document.getElementById('footer')

fetch('./assets/navbar.html').then(function (snap){
    snap.text().then(function(result){
        navbar.innerHTML = result;
    })
})

fetch('./assets/footer.html').then(function (snap){
    snap.text().then(function(result){
        footer.innerHTML = result;
    })
})

const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show__sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide__sidebar-btn');

// show sidebar on hp
const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}

// hide sidebar on hp
const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block';
    hideSidebarBtn.style.display = 'none';
}

showSidebarBtn.addEventListener('click', showSidebar)
hideSidebarBtn.addEventListener('click', hideSidebar)