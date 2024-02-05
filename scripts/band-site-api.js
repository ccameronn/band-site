



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
        let response = await axios.get(this.baseUrl + "comments" + this.apiKey)
        console.log(response);
                let commentsSection = response.data;

                console.log(commentsSection);
                return commentsSection;
            
    
    }  
        
        
    
        // // sort list of comments by date
        // let responseArray = response.data;

        //   // Sort by date value in ascending order
        //   responseArray.sort(function(a, b) {
        //     // Convert the date strings to Date objects
        //     let dateA = new Date(a.timestamp);
        //     let dateB = new Date(b.timestamp);
          
        //     // Subtract the dates to get a value that is either negative, positive, or zero
        //     return dateA - dateB;
        //   });
          
        //   console.log(responseArray);
        

    

    async getShows() {
        // get request to shows

        // return array of show data objects returned from API
    }




  }





export default BandSiteApi;
