



// async function getComments() {
//     const response = await axios.get("https://project-1-api.herokuapp.com/comments" + apiKey)
//     console.log(response);
// }

// getComments()



class BandSiteApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = "https://project-1-api.herokuapp.com/";
    }

    async postComment(object) {
        // this.baseUrl + "comments" + this.apiKey;
    }

    async getComments() {
        // api call
        let response = await axios.get(this.baseUrl + "comments" + this.apiKey);

        // assign response array to variable
        var commentsArray = response.data;


        
        // SORT array into time order
        // Sort by timestamp value in ascending order
        commentsArray.sort(function(a, b) {
            // Assign timestamps to variables
            let dateA = a.timestamp;
            let dateB = b.timestamp;
          
            // Subtract the timestamps to give negative, positive, or zero
            return dateA - dateB;
        });
          
        console.log(commentsArray);




        // convert timestamps to dates
        const commentsSection = commentsArray.map(obj => {
            // create date variable using the timestamp
            let date = new Date(obj.timestamp);
            // return new object to array with the next date as the timestamp
            return { ...obj, timestamp: (date.toLocaleDateString('en-US')) };
        });
                 

        return commentsSection;
            
    }  
        
        
    

        

    

    async getShows() {
        // get request to shows

        // return array of show data objects returned from API
    }




  }





export default BandSiteApi;
