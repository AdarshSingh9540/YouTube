
export const API_KEY = "AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4";
export const API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;
export const Search_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// export const channel_API= "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="+VIDEO_ID+"&key="+API_KEY;

export const ViewConverter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
}