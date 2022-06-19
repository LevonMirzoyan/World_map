const tooltip = document.querySelector('.tooltip');
const continents = document.querySelectorAll('.continent');

/*continents.forEach(continent =>{
    continent.addEventListener('click', function(){
        alert(this.dataset.title)
    });
}); */


continents.forEach(continent =>{
    continent.addEventListener('mousemove', function(e){
        let now = new Date();   

        let map = new Map([
            ["Чукотский автономный округ", new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours()+8, now.getMinutes()).toLocaleTimeString() ],
            ["Самарская область", new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours(), now.getMinutes()).toLocaleTimeString()   ],
            ["Московская область",new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours()-1, now.getMinutes()).toLocaleTimeString() ],
            ["Ленинградская область",new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours()-1, now.getMinutes()).toLocaleTimeString() ],
            ["Томская область", new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours()+3, now.getMinutes()).toLocaleTimeString()  ]
          ]);

    
       tooltip.innerText = this.dataset.title + " " + map.get(this.dataset.title);
     
       tooltip.style.top = (e.y + 20) + 'px';
       tooltip.style.left = (e.y + 20) + 'px';
        
    });
 /*   continent.addEventListener('mouseenter', function(){
        tooltip.style.display ='block';

    });
    continent.addEventListener('mouseenter', function(){
    tooltip.style.display ='none';
    });
*/



});