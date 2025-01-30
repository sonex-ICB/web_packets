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

// <script src="https://cdn.jsdelivr.net/gh/sonex-ICB/js_functions@refs/heads/main/packets.js"></script>
