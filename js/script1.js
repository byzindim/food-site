window.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent');
        

    function hideTabContent() {
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
        tabsContent.forEach(item => {
            item.style.display = 'none';
        })
    }

    function showTabContent(i = 0) {
        tabs[i].classList.add('tabheader__item_active');
        tabsContent[i].style.display = 'block';
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if(e.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
                
            })
        }
        
    })
}) 