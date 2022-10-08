function editElement(ref,match,replacer) {
 const contet = ref.textContent;
 const matcher = new RegExp(match, 'g')
 const edited = contet.replace(matcher,replacer)
 ref.textContent = edited
}