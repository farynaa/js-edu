/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let totalHours;
      knowsProgramming ? totalHours = 800 : totalHours = 1300;
      const speed = config[focus];
      console.log(Math.ceil(totalHours / speed));
      return Math.ceil(totalHours / speed);
      
  };
  