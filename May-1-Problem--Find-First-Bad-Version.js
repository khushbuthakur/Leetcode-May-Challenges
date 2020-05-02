 /* You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest
        version of your product fails the quality check. Since each version is developed based on the previous version,
        all the versions after a bad version are also bad.

        Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the
        following ones to be bad.

        You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function
        to find the first bad version. You should minimize the number of calls to the API.

        Example:

        Given n = 5, and version = 4 is the first bad version.

        call isBadVersion(3) -> false
        call isBadVersion(5) -> true
        call isBadVersion(4) -> true

        Then 4 is the first bad version. */
        
//         Solution: 
        
             /**
                 * Definition for isBadVersion()
                 * 
                 * @param {integer} version number
                 * @return {boolean} whether the version is bad
                 * isBadVersion = function(version) {
                 *     ...
                 * };
                 */

        /**
         * @param {function} isBadVersion()
         * @return {function}
         */
        
          var solutionMemoryEfficient = function (isBadVersion) {

            return function (n) {
                let start = 1,
                    end = n;

                while (end <= start) {
                    let mid = Math.floor((start + end) / 2);
                    //      if it is bad, go lower numbers
                    if (isBadVersion(mid)) {
                        end = mid - 1;
                        // } else if (badVersion == -1 && !isBad) {
                    } else {
                        //      if it is not bad, go higher numbers
                        start = mid + 1;
                    }
                }
                return end;
            };
        };

        var solution = function (isBadVersion) {
            return function (n) {
                return getBadVersion(1, n);

                function getBadVersion(start, end) {
                    debugger;
                    if (end - start < 2) {
                        if (isBadVersion(start)) {
                            return start;
                        }
                        return end;
                    } else {

                        let mid = Math.ceil((start + end) / 2);
                        if (isBadVersion(mid)) {
                            return getBadVersion(start, mid);
                        } else {
                            return getBadVersion(mid, end);
                        }
                    }
                }
            }
        }

        function isBadVersion(val) {
            console.log('called with ', val);
            // if (val == 4 || val == 5 || val == 1702766719) return true;
            if (val >= 1702766719 && val <= 1860909217) return true;
            return false;
        }

        function isBadVersion1(val) {
            console.log('called with ', val);
            if (val == 4 || val == 5) return true;
            // if (val >= 1702766719 && val <= 1860909217) return true;
            return false;
        }

        console.log(solution(isBadVersion1)(5));

        console.time('solution');
        console.log(solution(isBadVersion)(2126753390));
        console.timeEnd('solution');
