const accordion = (triggerSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggerSelector),
        blocks = document.querySelectorAll(itemsSelector);

        blocks.forEach(block => {
            block.style.display = "none";
        });

        btns.forEach(btn => {
            btn.addEventListener("click", function() {
                this.classList.toggle("active-style");
                if(this.classList.contains("active-style")) {
                    this.nextElementSibling.style.display = "block";
                }
                else {
                   this.nextElementSibling.style.display = "none";
                }     
            });   
        });

    blocks.forEach(block => {
        block.classList.add("animated", "fadeInDown");
    });

    // btns.forEach(btn => {
    //     btn.addEventListener("click", function () {
    //         if (!this.classList.contains("active")) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove("active", "active-style");
    //             });
    //             this.classList.add("active", "active-style");
    //         }
    //     });
    // });

};

export default accordion;