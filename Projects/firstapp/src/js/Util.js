export function calculateTax(pay, extra, six){
  var results = [];
  var taxSum = 0;
  var sum = 0;
  var paylist = [];
  var temp = 0;

  if(!Array.isArray(pay)){
    if(pay <= 5000){
      return results;
    }
    for(var i = 0 ; i < 12;i++){
      paylist.push(pay);
    }
  }
  if (Array.isArray(paylist)) {
    for (var item in paylist) {
      sum += paylist[item] - 5000 - extra - six;
      if (sum <= 36000) {
        results.push (sum*0.03 - taxSum);
        temp = (sum*0.03 - taxSum) >= 0 ? (sum*0.03 - taxSum) : 0 ;
        taxSum += temp;
      }
      else if(sum <= 144000){
        results.push (sum*0.1 - 2520 - taxSum);
        temp = (sum*0.1 - 2520 - taxSum) >=0 ? (sum*0.1 - 2520 - taxSum) : 0;
        taxSum += temp;
      }
      else if (sum <= 300000) {
        results.push (sum*0.2 - 16920 - taxSum);
        temp = (sum*0.2 - 16920 - taxSum) >=0 ? (sum*0.2 - 16920 - taxSum) : 0;
        taxSum += temp;
      }
      else if (sum <= 420000){
        results.push(sum*0.25 - 31920 - taxSum);
        temp = (sum*0.25 - 31920 - taxSum) >=0 ? (sum*0.25 - 31920 - taxSum) : 0;
        taxSum += temp;
      }
      else if(sum <= 660000){
        results.push(sum*0.3 - 52920 - taxSum);
        temp = (sum*0.3 - 52920 - taxSum) >=0 ? (sum*0.3 - 52920 - taxSum) : 0;
        taxSum += temp;
      }
      else if(sum <= 960000){
        results.push(sum*0.35 - 85920 - taxSum);
        temp = (sum*0.35 - 85920 - taxSum) >=0 ? (sum*0.35 - 85920 - taxSum) : 0;
        taxSum += temp;
      }
      else {
        results.push(sum*0.45 - 181920 - taxSum);
        temp = (sum*0.45 - 181920 - taxSum) >=0 ? (sum*0.45 - 181920 - taxSum) : 0;
        taxSum += temp;
      }
    }

  }
  return results;
}
