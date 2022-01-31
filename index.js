class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() +  str.slice(1)


  }
  static sanitize(str){
    str = JSON.stringify(str).replace(/\W/g, '')
    


  }
  
  static titleize(str){


  }
  


}