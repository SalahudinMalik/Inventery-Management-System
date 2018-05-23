export class Globals {
    //hostname: string = window.location.hostname;
    hostname: string = "localhost";
    port: string = window.location.port;
    weburl: string = 'http://' + this.hostname  + ':3000/api';
    userToken:string = '';
    // weburl: string = 'http://' + this.hostname  + ':'+ this.port + '/OrderPro/OrderPro/';
  
    fn_parseFloatIgnoreCommas(varString:String) :any {
      let stringWithoutComma = varString.replace(',', '');
      return parseFloat(stringWithoutComma);
    }
}
