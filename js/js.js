var ptb2 = new Object()

this.a = null
this.b = null
this.c = null
ptb2.cs = function () {
    document.getElementById('hsa').value = Math.round(Math.random() * 101)
    document.getElementById('hsb').value = Math.round(Math.random() * 101)
    document.getElementById('hsc').value = Math.round(Math.random() * 101)
}
ptb2.gpt = function () {
    this.a = document.getElementById('hsa').value
    this.b = document.getElementById('hsb').value
    this.c = document.getElementById('hsc').value
    if (this.a == 0) {
        if (this.b == 0) {
            if (this.c == 0) {
                document.getElementById('result').innerHTML =
                    `${this.a}x<sup>2</sup> + ${this.b}x + ${this.c} = 0 
                <br><br> Phương trình vô số nghiệm`
            } else {
                document.getElementById('result') =
                    `${this.a}x<sup>2</sup> + ${this.b}x + ${this.c} = 0 
                <br><br> Phương trình vô nghiệm`
            }
        } else {
            this.x = -this.c / this.b
            document.getElementById('result').innerHTML =
                `${this.a}x<sup>2</sup> + ${this.b}x + ${this.c} = 0 
            <br><br> Phương trình có nghiệm <br><br> x = ${this.x.toFixed(2)}`
        }
    } else {
        this.delta = Math.pow(this.b, 2) - 4 * this.a * this.c
        if (this.delta < 0) {
            document.getElementById('result').innerHTML =
                `${this.a}x<sup>2</sup> + ${this.b}x + ${this.c} = 0 
            <br><br> Phương trình vô nghiệm`
        } else if (this.delta == 0) {
            this.x = -this.b / (2 * a)
            document.getElementById('result').innerHTML =
                `${this.a}x<sup>2</sup> + ${this.b}x + ${this.c} = 0 
            <br><br> Phương trình có nghiệm kép <br><br> x = ${this.x.toFixed(2)}`
        } else {
            this.x1 = (-this.b + Math.sqrt(this.delta)) / (2 * this.a);
            this.x2 = (-this.b - Math.sqrt(this.delta) / (2 * this.a))
            document.getElementById('result').innerHTML =
                `${this.a}x<sup>2</sup> + ${this.b}x + ${this.c} = 0 
            <br><br> Phương trình 2 nghiệm <br><br> x1 = ${this.x1.toFixed(2)} <br><br> x2 = ${this.x2.toFixed(2)}`
        }
    }
}
ptb2.dem = function () {
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1
    } else {
        sessionStorage.clickcount = 1;
    }
    document.getElementById('slg').innerHTML = sessionStorage.clickcount;
}
ptb2.khoaNut = function(){
    var btn = document.getElementById("GPT");
    btn.disabled = false;
}
