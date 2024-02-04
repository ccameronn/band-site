const apiKey = "?api_key=f58f6e6b-36c4-44e6-8905-0f8b79ecf516"



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
        // get request for comments
        // const response = await axios.get(this.baseUrl + "comments" + apiKey)

        // sort list of comments by date

    }

    async getShows() {
        // get request to shows

        // return array of show data objects returned from API
    }




  }

  BandSiteApi(apiKey);


