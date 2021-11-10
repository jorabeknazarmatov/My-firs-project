const slidItem = document.querySelector('.slid-item');
let offset = 0;

document.querySelector('.slid-item_next').addEventListener('click',()=>{
	offset = offset + 1600;
	if (offset > 4800){
		offset = 0;
	}
	slidItem.style.left = -offset + 'px';
});
document.querySelector('.slid-item_prev').addEventListener('click',()=>{
	offset = offset - 1600;
	if (offset < 0){
		offset = 4800;
	}
	slidItem.style.left = -offset + 'px';
});
