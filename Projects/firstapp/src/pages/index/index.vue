<template>
  <div>
    <div class = "inputMessage">
      <div>
        <span>每月基本收入：</span>
        <input type="text" class="inputBox" v-model="salaryCollection.salary"/>
      </div>
      <div>
        <span>五险一金：</span>
        <input type="text" class="inputBox" v-model="salaryCollection.fundation"/>
      </div>
      <div id ='div1'>
        <span>专项扣除：</span>
        <input type="text" class="inputBox" v-model="salaryCollection.extra"/>
      </div>
    </div>
    <div class="btn-div">
      <button class="btn-basic" @click="calculate">{{calculateStr}}</button>
    </div>
    <div class="outputMessage">
      <resultDisplay :results = 'taxResults' v-if='needDisplayCharts' ref='resultdisplay'></resultDisplay>
      <span v-else>{{taxResults}}</span>
    </div>
  </div>
</template>

<script>
    import * as util from '../../js/Util'

    import ResultDisplay from '../../components/result-display'

    export default {
      data () {
        return {
          salaryCollection: {
            salary: 12000,
            fundation: '',
            extra: ''
          },
          calculateStr: '计算',
          taxResults: [],
          needDisplayCharts: false
        }
      },
      components:{
        resultDisplay: ResultDisplay
      },
      methods: {
        calculate () {
          let results = util.calculateTax(this.salaryCollection.salary, this.salaryCollection.extra, this.salaryCollection.fundation);
          if(results.length > 0){
            this.taxResults = results;
            this.needDisplayCharts = true;
            if(this.$refs.resultdisplay != null)
              this.$refs.resultdisplay.refreshData(results);
          }
          else{
            this.taxResults = '不用缴税';
            this.needDisplayCharts = false;
          }
        }
      }
    }
</script>

<style>
  .inputMessage {
    font-size: 15px;
    font-weight: bold;
    color: grey;
    padding: 20px;
  }
  .inputMessage > div{
    margin: 10px;
  }
  .inputMessage > div > input{
    margin: 10px 0 10px 0;
  }
  .inputBox{
    border: 1px solid #c0c0c0;
    border-radius: 6px;
  }
  .btn-div{
    padding: 0 20px 0 20px;
  }
  .btn-basic{
    margin: 0 10px 0 10px;
    color: black;
    height: 40px;
    font-size: 15px;
  }
  .outputMessage{
    font-size: 15px;
    font-weight: bold;
    color: grey;
    padding: 20px;
  }
</style>