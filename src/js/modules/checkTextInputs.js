const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if(e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            } 
        });
        input.addEventListener('blur input', function(e) {
            e.preventDefault();
            // input.value.replace(/[a-zA-Z]/ig, "");
        });

    });
};

export default checkTextInputs;