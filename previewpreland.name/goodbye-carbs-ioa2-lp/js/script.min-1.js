class getTemplateCenz {
    constructor(data) {
        this.data = data
    }

    html() {
        const html = this.data.map((item, index) => {
            return ` <div class="cenz__item" data-index="${index}"><div class="cenz__content"><p class="cenz__age">18+</p><button class="cenz__cta" type="button">Показать</button></div><img class="cenz__img" src="${item.img}" alt="Цензура"><p class="cenz__palceholder ${!item.placeholder ? "hidden" : ""}">${item.placeholder}</p></div>`
        });
        return html
    }
}

class getTempalteComments {
    constructor(data = [], multiply = 3) {
        this.data = data;
        this.multiply = multiply
    }

    html() {
        const items = this.data.map((item, index) => {
            const hidden = index === 0 ? "hidden" : "";
            const isImg = item.img ? `<picture class="comments__item-picture ${hidden}"><img class="comments__item-img" src="${item.img}" loading="lazy" alt="Картинка продукта" width="290" height="290"></picture>` : "";
            const isVideo = item.video ? `<video class="comments__item-video" src="${item.video}" poster="${item.poster}" width="270" height="450" controls></video>` : "";
            const getItemTime = new GenerateData(".comments__item-data", item.data).getDataComment();
            return ` <div class="comments__item" data-index="${index}" ${index === 0 ? "data-visibale='false'" : ""}><div class="comments__item-header ${hidden}"><picture><img class="comments__item-avatar ${hidden}" src="${item.avatar}" loading="lazy" alt="Аватарка" width="60" height="60"></picture><div class="comments__item-info"><p class="comments__item-name ${hidden}">${item.name}</p><p class="comments__item-data ${hidden}">${index === 0 ? `<span class="comments__item-data-now">En este momento</span>` : getItemTime}</p></div></div><div class="comments__item-body"><p class="comments__item-content ${hidden}">${item.content}</p>${index === 0 ? `<p class="comments__item-content" data-type="printing">Tipos de usuarios</p>` : ""}${isImg}${isVideo}</div><div class="comments__item-footer ${hidden}"><a class="comments__item-replay" href="">Respuesta</a><div class="comments__item-grade" data-select="false"><a class="comments__item-limk" href=""><svg class="comments__item-icon" width="20" height="20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" data-type="like"><path d="M496.634 348.079C507.428 334.695 512.605 320.348 511.944 305.573C511.283 289.298 503.793 276.557 497.625 268.741C504.785 251.396 507.538 224.094 483.637 202.894C466.124 187.369 436.386 180.41 395.192 182.337C366.225 183.622 341.993 188.868 341.002 189.082H340.892C335.385 190.046 329.547 191.224 323.6 192.509C323.159 185.656 324.371 168.632 337.367 130.302C352.787 84.6909 351.906 49.7867 334.504 26.4458C316.22 1.92723 287.032 0 278.441 0C270.18 0 262.58 3.31911 257.184 9.422C244.958 23.2338 246.389 48.716 247.931 60.4935C233.393 98.3956 192.64 191.331 158.165 217.134C157.504 217.563 156.954 218.098 156.403 218.633C146.27 229.019 139.441 240.261 134.815 250.111C128.316 246.685 120.937 244.758 113.007 244.758H45.8194C20.4866 244.758 0 264.78 0 289.298V463.284C0 487.91 20.5967 507.824 45.8194 507.824H113.007C122.809 507.824 131.951 504.826 139.441 499.687L165.324 502.685C169.29 503.22 239.781 511.893 312.145 510.501C325.252 511.465 337.588 512 349.043 512C368.758 512 385.94 510.501 400.259 507.503C433.963 500.544 456.983 486.625 468.658 466.175C477.579 450.543 477.579 435.018 476.147 425.168C498.066 405.895 501.921 384.589 501.15 369.599C500.709 360.927 498.727 353.539 496.634 348.079ZM45.8194 478.916C36.8978 478.916 29.7386 471.849 29.7386 463.284V289.191C29.7386 280.519 37.008 273.559 45.8194 273.559H113.007C121.928 273.559 129.087 280.626 129.087 289.191V463.177C129.087 471.849 121.818 478.809 113.007 478.809H45.8194V478.916V478.916ZM468.437 335.552C463.811 340.263 462.93 347.436 466.455 353.004C466.455 353.111 470.971 360.606 471.521 370.884C472.292 384.91 465.353 397.33 450.815 407.93C445.638 411.784 443.545 418.422 445.748 424.418C445.748 424.525 450.484 438.658 442.774 452.042C435.395 464.89 418.983 474.098 394.091 479.237C374.155 483.413 347.06 484.162 313.797 481.593C313.356 481.593 312.806 481.593 312.255 481.593C241.433 483.092 169.84 474.098 169.069 473.991H168.959L157.835 472.706C158.496 469.708 158.826 466.496 158.826 463.284V289.191C158.826 284.587 158.055 280.09 156.733 275.915C158.716 268.741 164.223 252.788 177.22 239.19C226.674 201.074 275.027 72.4852 277.119 66.9176C278 64.6692 278.221 62.2066 277.78 59.744C275.908 47.7524 276.569 33.0841 279.212 28.6943C285.05 28.8013 300.8 30.4074 310.272 43.1485C321.507 58.2451 321.066 85.2263 308.951 120.987C290.447 175.485 288.905 204.179 303.554 216.813C310.823 223.13 320.516 223.451 327.565 220.989C334.284 219.49 340.672 218.205 346.73 217.241C347.17 217.134 347.721 217.027 348.161 216.92C381.975 209.747 442.554 205.357 463.591 223.987C481.434 239.833 468.768 260.818 467.336 263.066C463.261 269.062 464.472 276.878 469.979 281.696C470.09 281.803 481.655 292.403 482.205 306.643C482.646 316.172 478.02 325.916 468.437 335.552Z" fill="#9FAEB5"/></svg></a><a class="comments__item-limk" href=""><svg class="comments__item-icon" width="20" height="20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" data-type="dislike"><path d="M8.21948 163.921C-2.57452 177.305 -7.75122 191.652 -7.09036 206.427C-6.42951 222.702 1.0602 235.443 7.2282 243.259C0.0689192 260.604 -2.68464 287.906 21.2164 309.106C38.7291 324.631 68.4676 331.59 109.661 329.663C138.629 328.378 162.86 323.132 163.851 322.918H163.961C169.469 321.954 175.306 320.776 181.254 319.491C181.694 326.344 180.483 343.368 167.486 381.698C152.066 427.309 152.947 462.213 170.35 485.554C188.633 510.073 217.821 512 226.412 512C234.673 512 242.273 508.681 247.67 502.578C259.896 488.766 258.464 463.284 256.922 451.506C271.461 413.604 312.214 320.669 346.688 294.866C347.349 294.437 347.9 293.902 348.451 293.367C358.584 282.981 365.413 271.739 370.039 261.889C376.537 265.315 383.917 267.242 391.847 267.242H459.034C484.367 267.242 504.854 247.22 504.854 222.702V48.716C504.854 24.0903 484.257 4.17569 459.034 4.17569H391.847C382.044 4.17569 372.902 7.17357 365.413 12.3128L339.529 9.31495C335.564 8.77961 265.073 0.107097 192.709 1.49898C179.602 0.535369 167.266 2.21279e-06 155.811 2.21279e-06C136.095 2.21279e-06 118.913 1.49897 104.594 4.49688C70.8907 11.4563 47.8709 25.3752 36.1958 45.8252C27.2742 61.4572 27.2742 76.982 28.7061 86.8323C6.78763 106.105 2.93265 127.411 3.70365 142.401C4.14422 151.073 6.12677 158.461 8.21948 163.921ZM459.034 33.0841C467.956 33.0841 475.115 40.1506 475.115 48.716V222.809C475.115 231.481 467.846 238.441 459.034 238.441H391.847C382.925 238.441 375.766 231.374 375.766 222.809L375.766 48.8231C375.766 40.1506 383.036 33.1911 391.847 33.1911H459.034V33.0841V33.0841ZM36.4161 176.448C41.0421 171.737 41.9232 164.564 38.3986 158.996C38.3986 158.889 33.8828 151.394 33.3321 141.116C32.5611 127.09 39.5001 114.67 54.0389 104.07C59.2156 100.216 61.3083 93.5776 59.1055 87.5818C59.1055 87.4747 54.3694 73.3417 62.0794 59.9582C69.4589 47.11 85.8702 37.9021 110.762 32.7629C130.698 28.5872 157.793 27.8378 191.057 30.4074C191.497 30.4074 192.048 30.4074 192.599 30.4074C263.42 28.9084 335.013 37.9021 335.784 38.0092H335.894L347.019 39.294C346.358 42.2919 346.028 45.504 346.028 48.716L346.028 222.809C346.028 227.413 346.799 231.91 348.12 236.085C346.138 243.259 340.631 259.212 327.634 272.81C278.18 310.926 229.827 439.515 227.734 445.082C226.853 447.331 226.633 449.793 227.073 452.256C228.946 464.248 228.285 478.916 225.641 483.306C219.804 483.199 204.053 481.593 194.581 468.852C183.347 453.755 183.787 426.774 195.903 391.013C214.407 336.515 215.949 307.821 201.3 295.187C194.03 288.87 184.338 288.549 177.289 291.011C170.57 292.51 164.182 293.795 158.124 294.759C157.683 294.866 157.133 294.973 156.692 295.08C122.878 302.253 62.2996 306.643 41.2623 288.013C23.4192 272.167 36.0856 251.182 37.5175 248.934C41.5928 242.938 40.3812 235.122 34.8741 230.304C34.7639 230.197 23.1989 219.597 22.6482 205.357C22.2076 195.828 26.8336 186.084 36.4161 176.448Z" fill="#9FAEB5"/></svg></a></div></div></div>`
        });
        const container = ` <div class="comments__header"><div class="comments__left-box"><p class="comments__header-count">${this.data.length * this.multiply}</p><p class="comments__header-title">Comentarios</p></div><div class="comments__right-box"><a href="" class="comments__header-link"><svg class="comments__header-icon" width="20" height="20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M472.574 66H39.4262C17.7148 66 0 83.5352 0 105.026V406.974C0 428.465 17.7148 446 39.4262 446H472.574C494.285 446 512 428.465 512 406.974V105.026C512 83.5352 494.285 66 472.574 66ZM466.849 94.8689L258.7 271.076L50.5519 94.8689H466.849ZM482.835 406.974C482.835 412.533 478.191 417.131 472.574 417.131H39.4262C33.8093 417.131 29.1646 412.533 29.1646 406.974V114.756L249.195 301.014C249.303 301.121 249.519 301.228 249.627 301.335C249.735 301.442 249.951 301.549 250.059 301.656C250.383 301.869 250.599 302.083 250.923 302.19C251.031 302.297 251.139 302.297 251.247 302.404C251.679 302.618 252.111 302.832 252.543 303.046C252.651 303.046 252.759 303.152 252.868 303.152C253.192 303.259 253.516 303.473 253.948 303.58C254.056 303.58 254.272 303.687 254.38 303.687C254.704 303.794 255.028 303.901 255.352 303.901C255.46 303.901 255.676 304.008 255.784 304.008C256.108 304.115 256.54 304.115 256.864 304.222C256.972 304.222 257.08 304.222 257.188 304.222C257.62 304.222 258.16 304.329 258.592 304.329C259.024 304.329 259.565 304.329 259.997 304.222C260.105 304.222 260.213 304.222 260.321 304.222C260.645 304.222 261.077 304.115 261.401 304.008C261.509 304.008 261.725 303.901 261.833 303.901C262.157 303.794 262.481 303.687 262.805 303.687C262.913 303.687 263.129 303.58 263.237 303.58C263.561 303.473 263.885 303.366 264.317 303.152C264.425 303.152 264.533 303.046 264.641 303.046C265.073 302.832 265.505 302.618 265.938 302.404C266.046 302.297 266.154 302.297 266.262 302.19C266.586 301.976 266.802 301.869 267.126 301.656C267.234 301.549 267.45 301.442 267.558 301.335C267.666 301.228 267.882 301.121 267.99 301.014L482.835 119.354V406.974Z" fill="#9FAEB5"/></svg></a><a href="" class="comments__header-link"><svg class="comments__header-icon" width="20" height="20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M384.001 336C375.381 335.997 366.85 337.741 358.923 341.126C350.996 344.512 343.838 349.47 337.881 355.7L189.881 272.43C192.748 261.664 192.748 250.336 189.881 239.57L337.881 156.3C348.658 167.473 363.139 174.334 378.612 175.597C394.084 176.859 409.486 172.437 421.933 163.159C434.379 153.881 443.015 140.383 446.224 125.194C449.432 110.006 446.993 94.1682 439.362 80.6489C431.732 67.1297 419.434 56.8563 404.773 51.7534C390.112 46.6505 374.093 47.0682 359.718 52.9283C345.342 58.7883 333.597 69.6887 326.681 83.5872C319.766 97.4858 318.155 113.429 322.151 128.43L174.151 211.7C165.31 202.482 153.914 196.12 141.428 193.433C128.942 190.745 115.938 191.855 104.088 196.619C92.2379 201.383 82.0842 209.584 74.9332 220.166C67.7822 230.748 63.9609 243.228 63.9609 256C63.9609 268.772 67.7822 281.251 74.9332 291.834C82.0842 302.416 92.2379 310.616 104.088 315.381C115.938 320.145 128.942 321.254 141.428 318.567C153.914 315.879 165.31 309.517 174.151 300.3L322.151 383.57C318.719 396.488 319.419 410.157 324.151 422.658C328.884 435.159 337.411 445.865 348.537 453.272C359.664 460.68 372.83 464.418 386.189 463.963C399.548 463.507 412.429 458.88 423.024 450.73C433.619 442.581 441.397 431.319 445.266 418.525C449.135 405.731 448.901 392.046 444.597 379.391C440.293 366.736 432.134 355.747 421.267 347.965C410.399 340.183 397.368 335.999 384.001 336Z" fill="#9FAEB5"/></svg></a></div></div><div class="comments__item-list">${items.join("")}</div>`;
        return container
    }
}

class GenerateData {
    constructor(selector, mathDay) {
        this.$el = document.querySelectorAll(selector);
        this.day = mathDay;
        this._dayMs = 86400000;
        this._fullData = new Date(new Date() - this._dayMs * this.day);
        this._year = this._fullData.getFullYear();
        this._month = this._fullData.getMonth();
        this._day = this._fullData.getDate();
        this._monthName = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    }

    getData() {
        let month = this._month + 1;
        if (this._day < 10) this._day = "0" + this._day;
        if (month < 10) month = "0" + month;
        this.#render(this._day + "." + month + "." + this._year)
    }

    getDay() {
        let month = this._month + 1;
        if (this._day < 10) this._day = "0" + this._day;
        if (month < 10) month = "0" + month;
        this.#render(this._day)
    }

    getDataComment() {
        let month = this._month + 1;
        if (this._day < 10) this._day = "0" + this._day;
        if (month < 10) month = "0" + month;
        return this._day + "." + month + "." + this._year
    }

    getMoth() {
        const month = this._fullData.getMonth() + this.day;
        let fMonth;
        if (month === 0) fMonth = "enero";
        if (month === 1) fMonth = "febrero";
        if (month === 2) fMonth = "marzo";
        if (month === 3) fMonth = "abril";
        if (month === 4) fMonth = "mayo";
        if (month === 5) fMonth = "junio";
        if (month === 6) fMonth = "julio";
        if (month === 7) fMonth = "agosto";
        if (month === 8) fMonth = "septiembre";
        if (month === 9) fMonth = "octubre";
        if (month === 10) fMonth = "noviembre";
        if (month === 11) fMonth = "diciembre";
        this.#render(fMonth)
    }

    getFull() {
        this.#render(this._day + " " + this._monthName[this._month] + " " + this._year)
    }

    #render(data) {
        this.$el.forEach((element) => {
            element.innerText = data
        })
    }
}

class GenerateComments {
    constructor(selectorId, multiply, array) {
        this.$el = document.querySelector(selectorId);
        this.comentsData = array;
        this.multiply = multiply;
        this.#render()
    }

    #render() {
        this.$el.innerHTML = new getTempalteComments(this.comentsData, this.multiply).html();
        this.#grade();
        this.#addCount()
    }

    #firsComment() {
        const firstitem = document.querySelector(".comments__item[data-index='0']");
        const hidden = firstitem.querySelectorAll(".hidden");
        const printing = firstitem.querySelector("[data-type='printing']");
        setTimeout(() => {
            hidden.forEach((element) => {
                element.classList.remove("hidden");
                firstitem.dataset.visibale = "true";
                printing.classList.add("hidden")
            })
        }, 3000)
    }

    #grade() {
        const gradeContainer = document.querySelectorAll(".comments__item-grade");
        gradeContainer.forEach((element) => {
            element.addEventListener("click", (event) => {
                const element = event.target.dataset.type;
                if (element === "like" && event.currentTarget.dataset.select === "false") {
                    event.target.classList.toggle("active");
                    event.currentTarget.dataset.select = "true"
                }
                if (element === "dislike" && event.currentTarget.dataset.select === "false") {
                    event.target.classList.toggle("active");
                    event.currentTarget.dataset.select = "true"
                }
            })
        })
    }

    #addCount() {
        const config = {attributes: true, childList: false, characterData: false};
        const firstitem = document.querySelector(".comments__item[data-index='0']");
        let element = document.querySelector(".comments__header-count");
        let count = element.textContent;
        let state = false;
        const observer = new MutationObserver(() => {
            if (state === false) {
                count = Number(count);
                count++;
                element.textContent = String(count);
                state = true
            }
        });
        observer.observe(firstitem, config)
    }

    watch(selector) {
        const el = document.querySelector(selector);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((element) => {
                if (element.isIntersecting === true) {
                    this.#firsComment()
                }
            })
        });
        observer.observe(el)
    }
}

class GenerateCta {
    constructor(selector, option) {
        this.$el = document.querySelector(selector);
        this.$body = document.querySelector("body");
        this.options = option;
        this.#door(this.options)
    }

    handleEvent(event) {
        const door = this.$el.querySelector(".door");
        const doorItem = this.$el.querySelectorAll(".door__item");
        event.currentTarget.classList.add("open");
        this.#discount(event);
        doorItem.forEach((door) => {
            door.removeEventListener("click", this);
            setTimeout(() => {
                door.classList.add("open")
            }, 1000)
        });
        setTimeout(() => {
            door.classList.add("hidden")
        }, 2500);
        setTimeout(() => {
            this.#spin();
            this.#order()
        }, 3000);
        setTimeout(() => {
            door.classList.add("none")
        }, 3600)
    }

    #door(options) {
        const orederImg = this.$el.querySelector(".order__img");
        const productName = this.$el.querySelector(".spin__text-product");
        const doorItem = this.$el.querySelectorAll(".door__item");
        doorItem.forEach((door) => {
            door.addEventListener("click", this)
        });
        orederImg.setAttribute("src", options.img);
        productName.innerText = options.product
    }

    #discount(event) {
        const discount1 = this.$el.querySelector(".door__item-discount[data-discount='0']");
        const discount2 = this.$el.querySelector(".door__item-discount[data-discount='1']");
        const discount3 = this.$el.querySelector(".door__item-discount[data-discount='2']");
        if (event.currentTarget.dataset.index === "0") {
            discount1.innerHTML = "100%";
            discount2.innerHTML = "25%";
            discount3.innerHTML = "50%"
        }
        if (event.currentTarget.dataset.index === "1") {
            discount1.innerHTML = "25%";
            discount2.innerHTML = "100%";
            discount3.innerHTML = "50%"
        }
        if (event.currentTarget.dataset.index === "2") {
            discount1.innerHTML = "50%";
            discount2.innerHTML = "25%";
            discount3.innerHTML = "100%"
        }
    }

    #spin() {
        const spin = this.$el.querySelector(".spin");
        const order = this.$el.querySelector(".order");
        const btnClose = spin.querySelector(".spin__btn");
        spin.classList.add("active");
        btnClose.addEventListener("click", () => {
            spin.classList.remove("active");
            order.scrollIntoView({block: "end", behavior: "smooth"});
            this.#timer()
        })
    }

    #order() {
        const order = this.$el.querySelector(".order");
        const orderSelect = order.querySelector(".order__select");
        order.classList.add("active");
        orderSelect.addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("active")
        })
    }

    #timer() {
        const minuteElement = this.$el.querySelector("#orderMinute");
        const secondElement = this.$el.querySelector("#orderSecond");
        let timer = 60 * (10 - .01);
        let minutes;
        let seconds;
        const id = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            minuteElement.innerHTML = minutes;
            secondElement.innerHTML = seconds;
            if (--timer < 0) {
                timer = 0;
                clearInterval(id)
            }
        }, 1000)
    }
}

class SctollTo {
    constructor(obj) {
        this.$el = document.querySelectorAll(`a:not(.${obj.block})`);
        this.target = obj.target;
        this._cta = document.querySelector(this.target);
        this.#scroll()
    }

    handleEvent(event) {
        event.preventDefault();
        this._cta.scrollIntoView({block: "end", ibehavior: "smooth"})
    }

    #scroll() {
        this.$el.forEach((element) => {
            element.setAttribute("href", this.target);
            element.addEventListener("click", this)
        })
    }
}

class GenerateCenz {
    constructor(selector, obj) {
        this.$el = document.querySelector(selector);
        this.options = obj;
        this.#render(this.options);
        this._items = this.$el.querySelectorAll(".cenz__item");
        this._items.forEach((element) => {
            element.addEventListener("click", this)
        })
    }

    handleEvent(event) {
        event.currentTarget.classList.toggle("active")
    }

    #render(data) {
        this.$el.innerHTML = new getTemplateCenz(data).html().join("")
    }
}


