
import { DirectiveOptions } from 'vue';


export const Flag: DirectiveOptions = {
    bind(el, binding) { 
      if(binding&& binding.value ==='green'){
          el.style.color='#2ecc40'
      }
      if(binding&& binding.value ==='orange'){
        el.style.color='#ff851b'
      }
      if(binding&& binding.value ==='red'){
        el.style.color='#ff4136'
      }
    }
}