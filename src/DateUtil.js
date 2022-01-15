class DateUtil {

  // DateUtil contains common methods used in our code 
  // for date manipulation. See comment in the TodoList.getByDay
  // method for why we chose to strip the time portion from dates.
  //
  // These methods are declared as static, which means that we 
  // *don't* need to create an instance of the class to use them,
  // we can call them directly using the class name (i.e. DateUtil.today)
  //
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
  static today() {
    return this.stripTime(new Date())
  }
  
  static stripTime(date) {
    const stripped = new Date(date.getTime())
    stripped.setHours(0, 0, 0, 0);
    return stripped
  }
}

module.exports = DateUtil