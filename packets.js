// top !left alert
function notify(text,t,error_level){
        content =document.querySelector('#childElement') || document.createElement('div')
        content.style.cssText=`
                                background-color: aliceblue;
                                color: #001;
                                border-radius: 3px;
                                padding: 10px;
                                margin: 10px auto;
                                box-shadow: 0 0 4px 1px rgba(0, 0, 17, 0.267);
                                border-left: 6px solid blue;
                                transition:6s;
                                position:fixed;
                                top:0;
                                right:20px;
        `

        if(error_level == undefined){
            content.style.borderLeftColor='orange';
        }
        else if(error_level =='stop'){
            content.style.background='orangered';
            content.style.color='#fff';
            content.style.border='none';
        }
        else if(error_level=='success'){

        }
        else{
            content.style.borderLeftColor='orange';
        }
        content.textContent = text;
        content.id = 'childElement'
        document.querySelector('body').appendChild(content);

        setTimeout(() => {
            content.style.top = `-1000%`
        }, t);
        setTimeout(() => {
            document.querySelector('body').removeChild(childElement);
        }, t+200);
    }

// close pop_center alert 
 function close_pop_card(t){
            pop_overlay.style.transform='scale(0)';
            // pop_overlay.style.height='0px';
            setTimeout(()=>{
                pop_overlay.remove()
            },t)
 
}
// pop_alert_center
function pop_alert_center(text,error_level){
            
            color = ''
            if(!error_level){
                color = 'blue'
            }
            else if(error_level =='success'){
                color = 'green'
            }
            else if(error_level == 'stop'){
                color = 'red'
            }else{
                color = 'orange'
            }
          


            // create 
            pop_overlay = document.querySelector('#pop_overlay') || document.createElement('section');
            pop_overlay.id = "pop_overlay";
            
            pop_card = document.createElement('div')
            pop_card.id = "pop_card";
            
            pop_card_top = document.createElement('div');
            pop_card_top.id = "pop_card_top";
            
            pop_card_body = document.createElement('div');
            pop_card_body.id = 'pop_card_body';

           

           
            
            // css
            pop_card.style.cssText = `
                                display: flex;
                                flex-direction: column;
                                width: 95%;
                                max-width: 380px;
                                height:400px;
                                border-radius: 10px;
                                overflow: hidden;
                                border-bottom:5px solid ${color};
                                box-shadow: 0 0 4px 1px #8080802a;
            `
            pop_card_top.style.cssText = `
                                text-align: right;
                                padding-right: 10px;
                                padding: 5px;
                                background-color: aliceblue;
            
            `
            pop_card_body.style.cssText = `
                           width: 380px;
                            height:400px;
                            border-radius: 0 0 10px 10px;
                            background: aliceblue;
                            box-shadow: 0 2px 3px rgb(194, 197, 199);
                            padding: 20px;
                            overflow: auto;
            `

            pop_overlay.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            transition:1s;

            `
        
        // append
         pop_card_body.innerHTML =`<p>${text}</p>`;
            
            pop_card_top.innerHTML =`
                            <button onclick="close_pop_card(3000)" type="button" style='
                                    background-color: orange;
                                    color: #fff;
                                    border: 0;outline: 0;
                                    padding: 0 6px;
                                    font-size: 20px;
                                    font-weight: 900;
                                    border-radius: 50%;
                                    margin-bottom: 5px;
                                    cursor: pointer;
                            '> &times;</button>
                            <hr style='border:none;border-top:0.1px solid ${color};'>
                            `;
            
          
                            
            pop_card.appendChild(pop_card_top);
            pop_card.appendChild(pop_card_body);
            pop_overlay.appendChild(pop_card);
            document.querySelector('body').appendChild(pop_overlay);
        }

// <script src="https://cdn.jsdelivr.net/gh/sonex-ICB/js_functions@refs/heads/main/packets.js"></script>
