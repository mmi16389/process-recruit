
import { DirectiveOptions } from 'vue';

export const Customize: DirectiveOptions = {
    bind(el, binding) { 
        console.log(' element target ', el);
        if(binding&& binding.value ==='large'){
            el.style.width='900px'
        }
        if(binding&& binding.value ==='flip'){
            el.classList.add('flip-card');
            el.children[0].classList.add('flip-card-inner');
        }
    }
}