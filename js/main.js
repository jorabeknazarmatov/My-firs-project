const navUl = document.querySelectorAll('.nav_ul');
const navIcn = document.querySelectorAll('.nav_icn');
const navSrchIcn = document.querySelector('.btn_search_icn');

navUl.forEach((btn)=>{
	btn.addEventListener('mouseover', ()=>{
		btn.classList.add('nav_ul_active');	
	})
	btn.addEventListener('mouseout', ()=>{
		btn.classList.remove('nav_ul_active');;
	})
})

navIcn.forEach((btn)=>{
	btn.parentElement.addEventListener('mousemove',()=>{
		btn.classList.add('nav_icn_active')
	})
	btn.parentElement.addEventListener('mouseout',()=>{
		btn.classList.remove('nav_icn_active')
	})
})

navSrchIcn.addEventListener('mouseover',()=>{
	navSrchIcn.classList.add('btn_search_icn_active');
})
navSrchIcn.addEventListener('mouseout',()=>{
	navSrchIcn.classList.remove('btn_search_icn_active');
})


