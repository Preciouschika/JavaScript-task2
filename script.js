let data = [
    {principal: 2500, time: 1.8},
    {principal: 1000, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3},
 ]
 let interestData = []
  
 interestCalculator = () => {
    let rate = undefined
    for(let i = 0; i < data.length; i ++){
        if((data[i].principal >= 2500) && (data[i].time >1<3)){
            rate = 3
        }else if((data[i].principal >= 2500) && (data[i].time >= 3)){
            rate = 4
        }else if((data[i].principal < 2500) || (data[i].time <= 1)){
            rate = 2
        }else{
            rate = 1
        }
        let simpleInterest = (data[i].principal*data[i].time*rate)/100
        let results = {Principal: data[i].principal, Time: data[i].time, Rate: rate, Interest: simpleInterest}
        interestData.push(results)
    }
    console.log(interestData)
    return
 }
 interestCalculator(data)