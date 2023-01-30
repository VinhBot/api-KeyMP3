const express = require("express")
const { zing } = require("zingmp3-api-next")
const ZingController = require("./controllers/ZingController")
var cors = require("cors")

var app = express()
var router = express.Router()
app.use(cors())
app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*")
   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE")
   res.setHeader("Access-Control-Allow-Methods", "Content-Type", "Authorization")
   next()
})

router.get("/home", ZingController.getHome)
router.get("/playlist/:id", ZingController.getPlayList)
router.get("/suggestedplaylists/:id", ZingController.GetSuggestedPlaylists)
router.get("/song/:id", ZingController.getSong)
router.get("/songinfo/:id", ZingController.getSongInfo)
router.get("/songlyrics/:id", ZingController.getSongLyrics)
router.get("/homechart", ZingController.getHomeChart)
router.get("/newreleasechart", ZingController.getNewReleaseChart)
router.get("/weekchart/:id", ZingController.getWeekChart)
router.get("/radio", ZingController.getRadio)
router.get("/newfeeds", ZingController.getNewFeeds)
router.get("/artist/:name", ZingController.getArtist)
router.get("/hubhome", ZingController.getHub)
router.get("/hubdetails/:id", ZingController.getHubDetail)
router.get("/top100", ZingController.getTop100)
router.get("/listmv", ZingController.getListMv)
router.get("/categorymv/:id", ZingController.getCategoryMv)
router.get("/mv/:id", ZingController.getMv)
router.get("/events", ZingController.getEvents)
router.get("/eventinfo/:id", ZingController.getEventInfo)
router.get("/searchall", ZingController.getSearchAll)
router.get("/searchtype", ZingController.getSearchbyType)
router.get("/recommendkeyword", ZingController.getRecommendKeyword)
router.get("/suggestionkeyword", ZingController.getSuggestionKeyword)

app.use("/api/", router)
app.use("/", (req, res) => {
   console.log("Home")
   res.json("Home")
});

app.listen(3000, () => {
   console.log(`Server start on port`)
});