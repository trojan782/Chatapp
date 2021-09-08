
//Twice as old
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
    if(dadYearsOld > (sonYearsOld * 2)) {
        return dadYearsOld - (sonYearsOld * 2)
    }
    else if (dadYearsOld < (sonYearsOld*2)){
        return (sonYearsOld*2) - dadYearsOld
    }
    else if(dadYearsOld == (sonYearsOld*2)) {
        return 0
    }
}
console.log(twiceAsOld(55, 30));
