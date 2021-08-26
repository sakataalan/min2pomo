function pomo(){
    let min = parseInt(prompt("Estudou quantos minutos?"));
    let pomo = 0, cicles = 0;

    if (min < 25) return alert('ai não né brother, vai estudar mais!!!');

    for (let i = 0; i <= min; i++){
        min -= 25;
        pomo++;
        if (pomo%4 == 0){
            min -= 10;
            cicles++;
        } else{
            min -= 5;
        }
    }
    return alert(`${pomo} pomodoros, ${cicles} ciclos completos`);
}

pomo();