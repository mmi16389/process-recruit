
import { DirectiveOptions } from 'vue';

/**
 * directive v-customize
 * add properties css
 * for diferrent type: large|flip
 */
export const Customize: DirectiveOptions = {
    bind(el, binding) {
        if (binding && binding.value === 'large') {
            el.style.width = '900px'; // Set default size of the card to 900px when type is: large
            //el.style.height='300px'; // Set default size of the card to 900px when type is: large
            /** adding class: large to align text by left */
            const collectionElemnt = el.children[0].children[1].children;
            for (let i = 0; i < el.children[0].children[1].children.length; i++) {
                collectionElemnt[i].classList.add('large');
            }
        }
        if (binding && binding.value === 'flip') {
            el.classList.add('flip-card');
            /** add classes: 1st of bloc card */
            el.children[0].classList.add('flip-card-inner'); // 1st row 
            el.children[0].children[0].classList.add('flip-card-front');// 1st row, 1st col
            el.children[0].children[1].classList.add('flip-card-back'); // 1st row, 2nd col
        }
    }
}