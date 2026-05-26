function newProblem(){

    let diff =
    document.getElementById('difficulty').value;

    if(diff==='easy'){
        a=rand(10);
        b=rand(10);
        op='+';
        correct=a+b;
    }

    if(diff==='medium'){
        a=rand(20);
        b=rand(20);

        op=Math.random()>0.5?'+':'-';

        correct=
        op==='+' ? a+b : a-b;
    }

    if(diff==='hard'){
        a=rand(12);
        b=rand(12);

        op=Math.random()>0.5?'×':'+';

        correct=
        op==='×' ? a*b : a+b;
    }

    problemEl.textContent =
    `${a} ${op} ${b}`;
}
