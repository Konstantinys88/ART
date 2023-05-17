const accordion = () => {
    const btns = document.querySelectorAll(".accordion-heading"),
        blocks = document.querySelectorAll(".accordion-block"),
        parentSelector = document.querySelector("#accordion");

    blocks.forEach(block => {
        block.style.display = "none";
    });

    blocks.forEach(block => {
        block.classList.add("animated", "fadeInDown");
    });

    parentSelector.addEventListener("click", (e) => {
        let target = e.target;

        try {
            if (target.classList.contains("accordion-heading")) {
                btns.forEach(btn => {
                    btn.nextElementSibling.style.display = "none";

                });
            }
            target.nextElementSibling.style.display = "block";
        } catch {
            // console.error(error);
        }


    });



    // btns.forEach(btn => {
    //     btn.addEventListener("click", function() {
    //         this.classList.toggle("active-style");
    //         if(this.classList.contains("active-style")) {
    //             this.nextElementSibling.style.display = "block";
    //         }
    //         else {
    //            this.nextElementSibling.style.display = "none";
    //         }     
    //     });   
    // });



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